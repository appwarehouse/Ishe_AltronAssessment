using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_2.Library.Database
{
    internal class UpdateDatabase : IDatabase
    {
        private readonly UserManagementDbContext _dbContext;

        public UpdateDatabase(UserManagementDbContext dbcontext)
        {
            _dbContext = dbcontext;
        }
        public void DoMigration()
        {
            _dbContext.Database.Migrate();
        }
    }
}
