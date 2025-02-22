import { CrossIcon } from "@/icons/cross"
import { TickIcon } from "@/icons/tick"

interface Feature {
    description : string,
    flag : boolean
}

interface PricingCardInterface {
    plan : string,
    cost : number,
    frequency : string,
    popular? : boolean,
    features : Feature[]
}

const format = new Intl.NumberFormat('en-IN',{
    style : 'currency',
    currency : 'INR',
    trailingZeroDisplay: 'stripIfInteger'
})

export const PricingCard = ({plan, cost, frequency, popular = false, features} : PricingCardInterface) => {
    return <>
        <div className=
            {`${popular ? 'border-brand-600 text-black md:h-[500px] w-[90vw] max-w-[450px] md:w-[33%]' : 'md:h-[450px] max-w-[450px] w-[90vw] md:w-[25%] border-foreground'} 
            relative border-[2px] rounded-2xl text-foreground`}>
            {popular ? <div className="top-4 md:top-10 right-6 absolute px-2 md:px-4 py-1 md:py-2 rounded-full text-xs  bg-brand-700 text-brand-50">Popular</div> : <></>}
            <div className="my-12 text-4xl flex justify-center text-foreground">{plan}</div>
            <div className="text-foreground px-10">
                <div className="mb-8">
                    <span className="text-4xl">{`${format.format(cost)}`} / </span>{frequency}
                </div>
                <div>
                    {features.map((feature,_id)=>(
                        <div key={_id} className="flex justify-between my-4">
                            <div className="text-lg">{feature.description}</div>
                            {feature.flag ? <TickIcon size="30" /> : <CrossIcon size="30" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}