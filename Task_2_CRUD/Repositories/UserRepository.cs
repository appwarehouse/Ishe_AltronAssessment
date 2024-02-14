
using Microsoft.EntityFrameworkCore;
using System.Collections;
using Task_2.Library;
using Task_2.Library.Database;

namespace Task_2_CRUD.Repositories
{
    public class UserRepository : IRepository<User>
    {

        private readonly UserManagementDbContext _context;

        public UserRepository(UserManagementDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(User entity)
        {
            await _context.Users.AddAsync(entity);
        }

        public void Delete(User entity)
        {
            _context.Users.Remove(entity);
        }

        public async Task<User?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _context.Users.FindAsync(id, cancellationToken);
        }

        public async Task<ICollection<User>> ListAsync(CancellationToken cancellationToken = default)
        {
            return await _context.Users.ToListAsync(cancellationToken);
        }

        public void Update(User existingEntity, User updatedEntity)
        {
            if (existingEntity != null)
            {
                _context.Entry(existingEntity).CurrentValues.SetValues(updatedEntity);
            }
        }
    }
}
