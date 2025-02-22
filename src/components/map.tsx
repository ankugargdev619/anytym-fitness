"use client"

import {useRef, useEffect, useState} from "react";
import {Loader} from "@googlemaps/js-api-loader";

export const Map = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const initMap = async () => {
            setIsLoading(true);
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version : "weekly"
            });
            
            const position = {
                lat : 31.84229,
                lng : 76.06622
            }

            const mapOptions : google.maps.MapOptions = {
                center: position,
                zoom:20,
                mapId: 'ANYTYM_FITNESS'
            }

            
            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
            const map = new Map(mapRef.current as HTMLDivElement,mapOptions)
            new AdvancedMarkerElement({
                map:map,
                position:position,
                title: 'AnyTym Fitness'
            })

            setIsLoading(false);
        }

        initMap();

    },[isLoading])

    return <div className="w-full h-[500px] rounded-lg overflow-hidden" >
        <div className="my-6">Visit Us</div>
        <div className="w-full h-full rounded-lg" ref={mapRef} />
    </div>
}