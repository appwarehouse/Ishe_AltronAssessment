using Task_2.Library;
using Task_2.Library.Database;
using Task_2_CRUD.Interfaces;
using Task_2_CRUD.Repositories;

namespace Task_2_CRUD
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly UserManagementDbContext _userManagementDbContext;
        private IRepository<User> _userRepository;
        public UnitOfWork(UserManagementDbContext userManagementDbContext)
        {
            _userManagementDbContext = userManagementDbContext;
        }

        public IRepository<User> UserRepository
        {
            get
            {
                if (_userRepository == null)
                {
                    _userRepository = new UserRepository(_userManagementDbContext);
                }
                return _userRepository;
            }
        }
        public void Dispose()
        {
            _userManagementDbContext.Dispose();
        }

        public async Task SaveChangesAsync(CancellationToken cancellationToken = default)
        {
           await _userManagementDbContext.SaveChangesAsync(cancellationToken);
        }
    }
}
