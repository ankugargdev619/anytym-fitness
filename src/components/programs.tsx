import { Program } from "./program-card"

const programs = [
    {
        title : "Strength",
        imageUrl : "./strength.png",
        description : "Build muscle and increase endurance with structured resistance training for overall power and functional fitness."
    },
    {
        title : "Cardio",
        imageUrl : "./cardio.png",
        description : "Improve heart health and stamina through high-intensity or steady-state aerobic exercises."
    },
    {
        title : "Calisthenics",
        imageUrl : "./calisthenics.png",
        description : "Master bodyweight movements to enhance strength, flexibility, and agility with minimal equipment."
    }
    ,
    {
        title : "Powerlifting",
        imageUrl : "./powerlifting.png",
        description : "Develop maximum strength with heavy squats, deadlifts, and bench presses for raw power."
    }
]

export const Programs = () => {
    return <div className="m-10">
        <div className="my-10 text-4xl text-center">Training Programs</div>
        <div className="flex gap-5 justify-center max-w-screen flex-wrap"> 
            {programs.map((program,_id)=>(
                <Program key={_id} title={program.title} imageUrl={program.imageUrl} description={program.description} />
            ))}
        </div>
    </div>
}