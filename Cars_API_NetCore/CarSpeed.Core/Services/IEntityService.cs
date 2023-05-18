using CarSpeed.Core.Models;

namespace CarSpeed.Core.Services
{
    public interface IEntityService<T> : IDbService where T : Entity
    {
        public T GetById(int id);
        public void Create(T entity);
        public void Update(T entity);
        public void Delete(T entity);
        public List<T> GetAll();
        public void CreateMany(List<T> entities);
    }
}
