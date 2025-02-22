import { features } from "process"
import { PricingCard } from "./pricing-card"


const plans = [
    {
        name : "Standard",
        frequency : "month",
        cost : 650,
        popular : false,
        features : [
            {
                description : "Training Program",
                flag : true
            },
            {
                description : "Diet Plan",
                flag : true
            },
            {
                description : "Tread Mill Access",
                flag : false
            }
        ]
    },
    {
        name : "Combo",
        frequency : "quarter",
        cost : 1800,
        popular : true,
        features : [
            {
                description : "Training Program",
                flag : true
            },
            {
                description : "Diet Plan",
                flag : true
            },
            {
                description : "Tread Mill Access",
                flag : true
            }
        ]
    },
    {
        name : "Premium",
        frequency : "month",
        cost : 700,
        popular : false,
        features : [
            {
                description : "Training Program",
                flag : true
            },
            {
                description : "Diet Plan",
                flag : true
            },
            {
                description : "Tread Mill Access",
                flag : true
            },
            {
                description : "Track Progess",
                flag : true
            }
        ]
    }
]

const plan = [
    
    {
        name : "Combo",
        frequency : "quarter",
        cost : 1800,
        popular : true,
        features : [
            {
                description : "Training Program",
                flag : true
            },
            {
                description : "Diet Plan",
                flag : true
            },
            {
                description : "Tread Mill Access",
                flag : true
            }
        ]
    }
]

export const Pricing = () => {
    return <>
        <div className="m-4 md:m-10 text-4xl text-center">Membership</div>
        <div className="flex flex-col md:flex-row justify-center  gap-10 items-center md:items-end">
            {plans.map((plan,_id)=>(
                <PricingCard key={_id} plan={plan.name} frequency={plan.frequency} cost={plan.cost} popular={plan.popular} features={plan.features} />
            ))
            }
        </div>
    </>
}