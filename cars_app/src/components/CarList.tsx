import React from 'react';
import { Car } from '../Types/Car';
import  '../Styles/table.scss';

type CarListProps = {
    cars: Car[];
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

export const CarList = ({cars, handleNextPage, handlePreviousPage}: CarListProps) => {    
    
  return (
    <div>
        <h1>Car List</h1>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Speed</th>
                    <th>Licence Plate</th>
                </tr>
            </thead>
            <tbody>
                { cars?.length>0 ? cars.map((car) => (
                    <tr key={car.id}>
                        <td>{car.timeStamp.toString().replace("T", "\t")}</td>
                        <td>{car.speed}</td>
                        <td>{car.licencePlate}</td>
                    </tr>
                )): <tr><td>No cars</td></tr>
            }
            </tbody>
        </table>
        <div className='buttons'>
        <button onClick={() => handlePreviousPage()}>Previous</button>
        <button onClick={() => handleNextPage()}>Next</button>
        </div>
    </div>
  )
}

