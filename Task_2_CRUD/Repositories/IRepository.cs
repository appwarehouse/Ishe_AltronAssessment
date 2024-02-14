namespace Task_2_CRUD.Repositories
{
    public interface IRepository<T> where T : class
    {

        public Task CreateAsync(T entity);
        public Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
        public Task<ICollection<T>> ListAsync(CancellationToken cancellation = default);
        public void Update(T existingEntity, T updatedEntity);
        public void Delete(T entity);

    }
}
