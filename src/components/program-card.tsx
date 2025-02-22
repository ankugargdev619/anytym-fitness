
interface ProgramProps {
    title: string,
    description : string,
    imageUrl : string
}

export const Program = ({title,description,imageUrl} : ProgramProps) => {
    return <div>
        <div className={`relative overflow-hidden bg-no-repeat border-foreground border-[1px] w-80 h-96 rounded-2xl`}>
            <img src={imageUrl} alt="" />
            <div className="p-4 text-white absolute bottom-0 bg-gradient-to-b from-transparent to-black h-[50%] w-full">
                <div className="z-10 mb-4 text-2xl ">{title}</div>
                <p className="text-md text-gray-300">{description}</p>
            </div>

        </div>
    </div>
}