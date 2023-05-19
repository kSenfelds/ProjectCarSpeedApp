import { useEffect, useState } from "react";
import { getFilteredCars } from "../api";
import { Car } from "../Types/Car";
import { FilterForm } from "../components/FilterForm";
import { CarList } from "../components/CarList";

export const Cars = () => {
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
    
    return(
        <>
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
          </>
    )
    
  };