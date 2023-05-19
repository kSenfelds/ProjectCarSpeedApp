using CarSpeed.Core.Models;
using CarSpeed.Data;
using Microsoft.EntityFrameworkCore;

namespace CarSpeedAPI
{
    public class CarsDbContext: DbContext, ICarsDbContext
    {
        public CarsDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
    }
}