import { Uploader } from './components/Uploader';
import { deleteCars, getFilteredCars } from './api';
import { CarList } from './components/CarList';
import { Graphic } from './components/Graphic';
import { useState, useEffect } from 'react';
import { Car } from './Types/Car';
import { FilterForm } from './components/FilterForm';

function App() {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [filters, setFilters] = useState<{speed: number, startDate: Date, endDate: Date}>({speed: 0, startDate: new Date("2020-01-06"), endDate: new Date("2021-01-01")});
  const [loading, setLoading] = useState<boolean>(false);
  const [cars, setCars] = useState<Car[]>([]);
  
  useEffect(() => {
    setLoading(true);
     
    getFilteredCars(pageIndex, filters.speed, filters.startDate, filters.endDate).then((data) => {
      setCars(data);
      setLoading(false);
      console.log(cars.length);
    });
    
  }, [pageIndex, filters]);

  return (
    
    <>
      {cars.length>0? <button onClick={() => deleteCars()}>Delete cars from DB</button>: <><Uploader></Uploader></>  }
      
      {
        loading? 
        (<>Loading</>):(<>
        <FilterForm
        onSave={
          (speed, startDate, endDate) => {
            setPageIndex(1);
            setFilters({speed: speed, startDate: startDate, endDate: endDate});
          }
        }></FilterForm>
        <CarList cars={cars}
        handleNextPage={() => {
          if (cars.length < 20) return;
          setPageIndex(pageIndex+1)
        }}
        handlePreviousPage={() => {
          if (pageIndex == 1) return;
          setPageIndex(pageIndex-1)}}></CarList>
        
        </>
        )
      }
      <Graphic></Graphic>
      
    </>
  );
}

export default App;
