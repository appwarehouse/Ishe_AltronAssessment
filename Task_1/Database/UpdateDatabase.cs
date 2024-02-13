using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Database
{
    internal class UpdateDatabase : IDatabase
    {
        private readonly TaskDbContext _dbContext;

        public UpdateDatabase(TaskDbContext dbcontext)
        {
            _dbContext = dbcontext;
        }
        public void DoMigration()
        {
            _dbContext.Database.Migrate();
        }
    }
}
