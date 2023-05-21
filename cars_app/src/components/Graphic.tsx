import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { getGraphData } from '../api';
import '../Styles/graphic.scss';


export const Graphic = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("2020-08-08"));
  const [data, setData] = useState<Record<number, number>>({0:0});

  useEffect(() => {
    console.log("current date", selectedDate);
    getGraphData(selectedDate).then((data) => {
      setData(data);
      createChart(data, selectedDate);
    });
   
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
                  'rgba(255, 99, 132, 0.7)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
              borderRadius: 5,
              barPercentage: 0.8,
              categoryPercentage: 0.8,
              
              
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
    
        <div className='chart-container'>
            <h1>Chart</h1>
            <form className = 'chart-form' onSubmit={ (e) => { e.preventDefault();}}>
              <input type="date" value={selectedDate.toISOString().substr(0, 10)} onChange={(e) => {
                console.log(e.target.value);
                setSelectedDate(new Date(e.target.value));}}/>
            </form>
            <div className='chart'>
            <canvas id="myCars" width="100%" height="80%"></canvas>
            </div>
            
        </div>
  )
}