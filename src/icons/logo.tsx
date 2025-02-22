import {Sriracha} from "next/font/google";
import Link from "next/link";
const merienda = Sriracha({
    subsets : ["latin"],
    weight : ["400"]
})

interface logoProps {
    width : string,
    height : string,
    size : string
}

export const NamedLogo = ({width , height, size} : logoProps) => {
    return <Link href="/">
            <div className="flex items-center gap-3">
            <svg id="eigYd6zajtc1" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision" width={width} height={height} >
                <g transform="matrix(1.431635 0 0 1.431638-64.745246-75.482996)">
                    <path fill="var(--foreground)" d="M20.622108,210.028384c0-108.221594,20.91067-162.332391,129.202685-162.332391s131.147877,54.110797,131.147877,162.332392-43.39176,65.089339-43.39176-.000001c0-108.221594-20.723262-108.221594-86.78351-108.221594s-86.783531,0-86.783531,108.221594c0,65.08934-43.391761,108.221595-43.391761,0Z" transform="matrix(.460917 0 0 0.369612 80.49492 52.370989)" strokeWidth="0"/>
                    <path d="M80.29963,169.85019C80.29963,131.273,111.57262,100,150.14982,100s69.85019,31.27299,69.85019,69.85019c0,25.60276-13.77469,47.98827-34.31735,60.14981h-71.06569c-20.54266-12.16154-34.31735-34.54705-34.31735-60.14981h.00001Zm69.401899,35.515877c20.83174,0,40.448286,0,40.448286-35.838605s-19.168262-34.527462-40.000002-34.527462-39.999998,0-39.999998,34.527462s18.719974,35.838605,39.551714,35.838605Z" transform="translate(-.149815 15)" fill="#ef3816" strokeWidth="0"/>
                </g>
                <line stroke="var(--foreground)" x1="-15.314346" y1="0.000008" x2="9.350879" y2="0" transform="matrix(0-1.469798 1.300906 0 149.999995 167.491005)" strokeWidth="3" strokeLinecap="round"/>
                <line stroke="var(--foreground)" x1="-15" y1="0" x2="12.034041" y2="0" transform="matrix(-1.059143 0 0-.937434 134.112853 189.537971)" strokeWidth="4.5" strokeLinecap="round"/>
            </svg>
            <div className={`${merienda.className} text-${size}`}>
                <span className="text-brand-600">AnyTym</span>
                <br/>
                <span>Fitness</span>
            </div>
        </div>
    </Link>
}