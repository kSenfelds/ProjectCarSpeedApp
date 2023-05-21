using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeed.Data;

namespace CarSpeed.Services
{
    public class EntityService<T>: DbService, IEntityService<T> where T : Entity
    {
        public EntityService(ICarsDbContext context) : base(context)
        {
        }

        public T GetById(int id)
        {
            return GetById<T>(id);
        }
        public void Create(T entity)
        {
            Create<T>(entity);
        }

        public void Update(T entity)
        {
            Update<T>(entity);
        }

        public void Delete(T entity)
        {
            Delete<T>(entity);
        }

        public List<T> GetAll()
        {
            return GetAll<T>();
        }

        public void CreateMany(List<T> entities)
        {
            CreateMany<T>(entities);
        }
    }
}