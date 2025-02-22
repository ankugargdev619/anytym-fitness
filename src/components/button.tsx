
const variantStyle = {
    primary : 'bg-brand-700 text-brand-50',
    secondary : 'bg-brand-200 text-black',
    outline : 'text-background  border-background '
}

interface ButtonProps {
    label : string,
    variant : 'primary'|'secondary' | 'outline',
    border? : boolean
}

export const Button = ({label,variant,border = false} : ButtonProps) => {
    return <>
        <button className={`${variantStyle[variant]} ${border? 'border-[1px]' : ''} px-6 py-2 rounded-2xl`}>
            {label}
        </button>
    </>
}
