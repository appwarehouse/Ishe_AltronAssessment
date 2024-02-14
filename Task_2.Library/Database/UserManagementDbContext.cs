using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_2.Library.Database
{
    public class UserManagementDbContext:DbContext
    {

        public UserManagementDbContext()
        {
            
        }

        public UserManagementDbContext(DbContextOptions<UserManagementDbContext> options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connString = "Server=.;Database=UserManAltronAssessment;ConnectRetryCount=0;Trusted_Connection=True;MultipleActiveResultSets=true";
                optionsBuilder
                    .EnableSensitiveDataLogging(false)
                    .UseSqlServer(connString, options => options.MaxBatchSize(150));
            }
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }


    }
}
