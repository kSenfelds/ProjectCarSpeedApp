import React, { useState } from 'react';
import "../Styles/filter.scss";

type FilterFormProps = {
    onSave: (speed: number, startDate:Date, endDate:Date) => void;    
}

export const FilterForm = ({onSave}: FilterFormProps) => {
    const [form, setForm] = useState({
        speed: 0,
        startDate: new Date("2020-01-06"),
        endDate: new Date("2021-01-01")
    });
    

    const handleInputChange = (value: Date | number, key: string) => {
        setForm({...form, [key]: value});
    }

  return (
    <>
    <div>
        <form className='filterForm'
            onSubmit={(event) => {
                event.preventDefault();
                const speed = form.speed;
                const startDate = form.startDate;
                const endDate = form.endDate;
                onSave(speed, startDate, endDate);
                
            }}>
            <div><label htmlFor="speed">Speed:</label>
            <input type="number" id="speed" name="speed" value={form.speed} 
            onChange= {(event) => {
                handleInputChange(parseInt(event.target.value), "speed");
            }}/></div>
            
            <div>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" value={form.startDate.toISOString().substr(0, 10)}
            onChange={(event) => {
                handleInputChange(new Date(event.target.value), "startDate");
            }}/>
            </div>
            
            <div>
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" value={form.endDate.toISOString().substr(0, 10)}
            onChange={(event) => {
                handleInputChange(new Date(event.target.value), "endDate");
            }}/>
            </div>
            
            <div>
            <button type="submit">Filter</button>
            <button onClick={() => {
                setForm({
                    speed: 0,
                    startDate: new Date("2020-01-06"),
                    endDate: new Date("2021-01-01")
                });
                onSave(form.speed, form.startDate, form.endDate);
            }}>Reset</button>
            </div>
            
        </form>
    </div>
    </>
  )
}

