import { SuccessCard } from "./success-card"

const stories = [
    {
        name : "Ankit",
        imageUrl : "./strength.png",
        description : "Lost over 10kgs of weight"
    },
    {
        name : "Cardio",
        imageUrl : "./cardio.png",
        description : "Improve heart health and stamina through high-intensity or steady-state aerobic exercises."
    },
    {
        name : "Calisthenics",
        imageUrl : "./strength.png",
        description : "Master bodyweight movements to enhance strength, flexibility, and agility with minimal equipment."
    }
    ,
    {
        name : "Powerlifting",
        imageUrl : "./strength.png",
        description : "Develop maximum strength with heavy squats, deadlifts, and bench presses for raw power."
    }
]

export const SuccessStories = () => {
    return <div className="m-10">
        <div className="my-10 text-4xl text-center">Success Stories</div>
        <div className="flex gap-5 justify-center max-w-screen flex-wrap"> 
                    {stories.map((stories,_id)=>(
                        <SuccessCard key={_id} name={stories.name} imageUrl={stories.imageUrl} description={stories.description} />
                    ))}
                </div>
    </div>
}