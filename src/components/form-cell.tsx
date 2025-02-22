
interface FormCellProps {
    label : string,
    placeholder : string,
    type : string,
    isMandatory ?: boolean
}

export const FormCell = ({label,placeholder,type,isMandatory = false } : FormCellProps) => {
    return <>
        <div className="relative w-full rounded-lg p-2 my-4">
            <div className="absolute top-0 left-0 -z-10 rounded-lg h-full w-full bg-foreground opacity-20 border-foreground border-[1px]" />
            <div className="text-sm font-bold">{label} {isMandatory ? '*' : ''}</div>
            {type=="message" ? <textarea  className="bg-transparent text-lg placeholder-foreground w-full focus:border-none focus:outline-none" placeholder={placeholder} /> :
            <input type={type} className="bg-transparent text-lg w-full placeholder-foreground focus:border-none focus:outline-none" placeholder={placeholder} />}
        </div>
    </>
}