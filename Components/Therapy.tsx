import TherapyCard from "./TherapyCard";

export default function Therapy (){
    return (
        <div className="w-full h-[30rem] bg-green-500">
            <div className="pl-[33rem]">
            <h1 className="text-4xl font-extrabold">Therapies</h1>
            </div>
            <div className="flex justify-around">
                <TherapyCard/>
                 <TherapyCard/>
                  <TherapyCard/>
            </div>
            

        </div>
    )
}