using CarSpeed.Core.Models;

namespace CarSpeed.Core.Services
{
    public interface IDbService
    {
        public T GetById<T>(int id) where T : Entity;
        public void Create<T>(T entity) where T : Entity;
        public void Update<T>(T entity) where T : Entity;
        public void Delete<T>(T entity) where T : Entity;
        public List<T> GetAll<T>() where T : Entity;
        public void CreateMany<T>(List<T> entities) where T : Entity;
    }
}