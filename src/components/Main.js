import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Index from "../pages/Index"


function Main() {
    const [prescription, setPrescription] = useState(null);

    const URL = "https://nurse-mern.herokuapp.com/";

    const getPrescription = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPrescription(data);
    };

    const createPrescription = async (medicine) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(medicine)
        });
        getPrescription();
    };

    const deletePrescription = async id => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getPrescription();
    };

    useEffect(() => getPrescription(), [])

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Index prescription={prescription} createPrescription={createPrescription}/>}/>
            </Routes>
        </div>
    )
}


export default Main;