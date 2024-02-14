namespace Task_2_CRUD.Repositories
{
    public interface IRepository<T> where T : class
    {

        public Task CreateAsync(T entity);
        public Task<T?> GetByIdAsync(string id, CancellationToken cancellationToken = default);
        public Task<ICollection<T>> ListAsync(CancellationToken cancellation = default);
        public void Update(T entity);
        public void Delete(T entity);

    }
}
