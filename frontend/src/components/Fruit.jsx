import api from "../api.js";
import {AddFruitForm} from "./AddFruitForm.jsx";
import { useState, createContext } from "react";

export let context = createContext();

export const FruitList = () => {
    const [fruits, setFruits] = useState([]);

    const addFruit = async (fruitName) => {
        try {
            await api.post("/fruits", { name: fruitName });
            fetchFruits();
        } catch(err) {
            console.error("Error adding data. ", err);
        }
    };

    const fetchFruits = async () => {
        try {
            const response = await api.get("/fruits");
            console.log(response.data.fruits);
            setFruits(response.data.fruits);
        } catch(err) {
            console.error("Error fetching data. ", err);
        }
    };


    return <>
        <context.Provider value={{addFruit}}>
            <div className="grid h-96 w-96 place-items-center border-2 rounded-xl shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center text-2xl font-bold mb-4">Fruit List</h2>
                    <ul className="list-disc">{fruits.map((fruit, i) => { return <li key={i}>{fruit["name"]}</li> })}</ul>
                    <AddFruitForm/>
                </div>
            </div>
        </context.Provider>
    </>
}