import { useState, useContext } from "react";
import { context } from "./Fruit";

export const AddFruitForm = () => {
    const [fruit, setFruit] = useState("");
    const { addFruit } = useContext(context);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fruit.length > 0){
            addFruit(fruit);
            setFruit("");
        }
    }

    return (
        <>
            <form className="mt-10 flex flex-row items-center justify-center gap-4" onSubmit={handleSubmit}>
                <input
                    className="border-2 rounded-md shadow-lg" 
                    type="text" 
                    value={fruit} 
                    onChange={(e)=>{ setFruit(e.target.value) }}
                    placeholder="Enter the fruit name."
                />
                <button className="shadow-lg p-2 rounded-lg bg-red-400" type="submit">Add Fruit</button>
            </form>
        </>
    )
}