import axios from "axios";
import { Car } from "../Types/Car";

const BASE_URL = process.env.REACT_APP_BASE_URL;

//get cars
export const getCars = async (pageIndex: number) => {
    try {
        const {data} = await axios.get(`${BASE_URL}pages?pageIndex=${pageIndex.toString()}`);
       
        return data;
    }
    catch (error) { console.log("error", error) }
    }

export const getFilteredCars = async (pageindex: number, minSpeed: number, from: Date, to: Date) => {
    try {
        const {data} = await axios.get(`${BASE_URL}pages/filters?pageIndex=${pageindex.toString()}&minSpeed=${minSpeed.toString()}&from=${from.toISOString()}&to=${to.toISOString()}`);
        return data;
    }
    catch (error) { console.log("error", error) }
    }

export const getGraphData = async (date: Date) => {
    try {
        const {data} = await axios.get(`${BASE_URL}graphic?date=${date.toISOString()}`);
        return data;
    }
    catch (error) { console.log("error", error) }
}

//delete all cars
export const deleteCars = async () => {
    try {
         await axios.delete(`${BASE_URL}data`);
    }
    catch (error) { console.log("error", error) }
    }

//post cars
export const putCars = async (cars: Car[]) => {
    try {  
        await axios.put(`${BASE_URL}data`, cars); 
    }
    catch (error) { console.log("error", error) }
    }