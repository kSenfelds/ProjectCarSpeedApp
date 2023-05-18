import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Car } from '../Types/Car';
import { getGraphData } from '../api';


export const Graphic = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("2020-08-01"));
  const [data, setData] = useState<Record<number, number>>({0:0});

  useEffect(() => {
    getGraphData(selectedDate).then((data) => {
      setData(data);
      console.log(data);
    });


    createChart(data, selectedDate);
  }, [selectedDate]);

  

  const createChart = (data: Record<number, number>, selectedDate: Date) => {
    
    const ctx = document.getElementById('myCars') as HTMLCanvasElement;

    const chartInstance = Chart.getChart(ctx);
    if (chartInstance) {
      chartInstance.destroy();
      
    }

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data? Object.keys(data).toString().split(","): [],
          datasets: [{
              label: `Average Speed for ${selectedDate.toISOString().substr(0, 10)}`,
              data: Object.values(data).toString().split(","),
              
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          }]
          
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  min: 0,
                  max: 100
              }
          }
      }
    });
   
    return myChart;
  }
  
  return (
    
        <>
            <h1>Chart</h1>
            <form onSubmit={ (e) => {
              e.preventDefault();
              setSelectedDate(selectedDate);
            }}>
            <input type="date" value={selectedDate.toISOString().substr(0, 10)} onChange={(e) => {
              e.preventDefault();
              setSelectedDate(new Date(e.target.value));
            }}/>
            
            </form>
            
            <canvas id="myCars" width="100" height="100"></canvas>
        </>
    
  )
}
