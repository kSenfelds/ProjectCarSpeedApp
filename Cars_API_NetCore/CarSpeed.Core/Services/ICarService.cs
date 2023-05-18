using CarSpeed.Core.Models;

namespace CarSpeed.Core.Services
{
    public interface ICarService: IEntityService<Car>
    {
        Car[] GetCars();
        Car[] AddCars(Car[] cars);
        Dictionary<int, int> GetAverageSpeedsByHour(DateTime date);
        bool DeleteCars();
    }
}
