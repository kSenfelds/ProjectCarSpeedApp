using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeed.Data;

namespace CarSpeed.Services
{
    public class CarService: EntityService<Car>, ICarService
    {
        public CarService(ICarsDbContext context) : base(context)
        {
        }

        public Car[] GetCars()
        {
            return _context.Cars.ToArray();
        }

        public Car[] AddCars(Car[] cars)
        {
            _context.Cars.AddRange(cars);
            _context.SaveChanges();

            return cars;
        }

        public IQueryable<Car> GetQueryableCars()
        {
            return _context.Cars;
        }

        public Dictionary<int, int> GetAverageSpeedsByHour(DateTime date)
        {
            var result = new Dictionary<int, int>();
            var cars = _context.Cars.Where(c => c.TimeStamp.Date == date.Date).ToArray();

            for (int i = 0; i < 24; i++)
            {
                var carsByHour = cars.Where(c => c.TimeStamp.Hour == i).ToArray();
                if (carsByHour.Any())
                    result.Add(i, (int)carsByHour.Average(c => c.Speed));
            }

            return result;
        }

        public bool DeleteCars()
        {
            _context.Cars.RemoveRange(_context.Cars);
            _context.SaveChanges();
            
            return _context.Cars.Any();
        }
    }
}