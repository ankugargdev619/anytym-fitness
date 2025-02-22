interface FooterSectionProps {
    children : React.ReactNode,
    title : string
}

export const FooterSection = ({children,title} : FooterSectionProps) => {
    return <div className="px-10 w-full md:w-fit flex flex-col h-full justify-start items-start">
        <h1 className="text-xl my-5">{title}</h1>
        <div>
            {children}
        </div>
    </div>
}