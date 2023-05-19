using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeed.Data;
using Microsoft.EntityFrameworkCore;

namespace CarSpeed.Services
{
    public class DbService : IDbService
    {
        protected readonly ICarsDbContext _context;

        public DbService(ICarsDbContext context)
        {
            _context = context;
        }
        public void Create<T>(T entity) where T : Entity
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public void Update<T>(T entity) where T : Entity
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete<T>(T entity) where T : Entity
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public List<T> GetAll<T>() where T : Entity
        {
            return _context.Set<T>().ToList();
        }

        public void CreateMany<T>(List<T> entities) where T : Entity
        {
            _context.Set<T>().AddRange(entities);
            _context.SaveChanges();
        }

        public T GetById<T>(int id) where T : Entity
        {
            return _context.Set<T>().SingleOrDefault(s => s.Id == id);
        }
    }
}