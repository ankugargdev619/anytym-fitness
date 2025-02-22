import {Sriracha} from "next/font/google";
const merienda = Sriracha({
    subsets : ["latin"],
    weight : ["400"]
})

interface PageHeadingProps {
    title : string
}

export const PageHeading = ({title} : PageHeadingProps) => {
    return <>
        <div className={`${merienda.className} text-white flex items-center text-4xl px-10 md:px-20 h-36  bg-gradient-to-br from-brand-600 to-transparent`}>
            {title}
        </div>
    </>
}