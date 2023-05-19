using CarSpeed.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CarSpeed.Data
{
    public interface ICarsDbContext
    {
        public DbSet<Car> Cars { get; set; }

        public int SaveChanges();

        DbSet<T> Set<T>() where T : class;
        
        EntityEntry<T> Entry<T>(T entity) where T : class;
    }
}