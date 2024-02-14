


using Task_2.Library;
using Task_2_CRUD.Repositories;

namespace Task_2_CRUD.Interfaces
{
    public interface IUnitOfWork
    {

        IRepository<User> UserRepository { get; }
        Task SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
