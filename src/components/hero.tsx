import { Button } from "./button"

export const Hero = ()=>{
    return <div className="max-h-[1000px] h-screen w-full">
        <div className="absolute top-0 border-brand-600 max-h-[1000px] h-screen w-full overflow-hidden bg-gradient-to-b from-[#140303] to-[#020202]">
            <div className="flex w-full h-full">
                <div className="absolute overflow-hidden bg-right-top bg-[url(/hero.png)] w-full h-full bg-no-repeat bg-contain md:bg-auto" />
                <div className="absolute w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-[#ef3816] to-transparent" />
                <div className="w-full h-full absolute pb-10 md:pb-0">
                    <div className="text-brand-50 flex flex-col justify-end md:justify-center items-start h-full mx-[10%] w-fit md:max-w-[40%] gap-12">
                        <h1 className="text-4xl">Your Body, Your Goals</h1>
                        <p className="text-lg">We help you to achieve your personal health and wellness goals. Whether you want to lose weight, build muscle, or boost endurance, we provide personalized workout plans, nutrition guidance.</p>
                        <div className="flex gap-6">
                            <Button label="Join Now" variant="primary" border={true}/>
                            <Button label="Contact Us" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
}