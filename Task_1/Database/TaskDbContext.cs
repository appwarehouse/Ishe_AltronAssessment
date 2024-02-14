using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Database
{
    public class TaskDbContext: DbContext
    {
        public TaskDbContext()
        {
                
        }

        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
            => optionsBuilder.UseSqlServer("Server=.;Database=AltronAssessment;ConnectRetryCount=0;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True");


        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<SubCategory> SubCategories { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductCategory> ProductsCategories { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductCategory>()
                .HasKey(nameof(ProductCategory.ProductId), nameof(ProductCategory.CategoryId));

            modelBuilder.Entity<Category>().HasData(
                   new Category { CategoryId = 1, CategoryName = "Fiction" },
                   new Category { CategoryId = 2, CategoryName = "Biography" },
                   new Category { CategoryId = 3, CategoryName = "Magazines" },
                   new Category { CategoryId = 4, CategoryName = "Non-Fiction" },
                   new Category { CategoryId = 5, CategoryName = "Romance" },
                   new Category { CategoryId = 6, CategoryName = "Sci-Fi" },
                   new Category { CategoryId = 7, CategoryName = "Fantasy" }
               );

            modelBuilder.Entity<Product>().HasData(
                new Product { ProductId = 1, ProductName = "The Catcher in the Rye" },
                new Product { ProductId = 2, ProductName = "Long Walk to Freedom" },
                new Product { ProductId = 3, ProductName = "National Geographic" },
                new Product { ProductId = 5, ProductName = "The Notebook" },
                new Product { ProductId = 6, ProductName = "The Hitchhiker's Guide to the Galaxy" },
                new Product { ProductId = 7, ProductName = "The Lord of the Rings" },
                new Product { ProductId = 8, ProductName = "To Kill a Mockingbird" },
                new Product { ProductId = 9, ProductName = "The Diary of a Young Girl" },
                new Product { ProductId = 10, ProductName = "Time Magazine" },
                new Product { ProductId = 11, ProductName = "The Art of War" },
                new Product { ProductId = 12, ProductName = "Pride and Prejudice" },
                new Product { ProductId = 13, ProductName = "Dune" },
                new Product { ProductId = 14, ProductName = "Harry Potter and the Philosopher's Stone" },
                new Product { ProductId = 15, ProductName = "Animal Farm" },
                new Product { ProductId = 16, ProductName = "Steve Jobs" }

            );

            modelBuilder.Entity<ProductCategory>().HasData(
                new ProductCategory { ProductId = 1, CategoryId = 1 },
                new ProductCategory { ProductId = 2, CategoryId = 2 },
                new ProductCategory { ProductId = 3, CategoryId = 3 },
                new ProductCategory { ProductId = 4, CategoryId = 4 },
                new ProductCategory { ProductId = 5, CategoryId = 5 },
                new ProductCategory { ProductId = 6, CategoryId = 6 },
                new ProductCategory { ProductId = 7, CategoryId = 7 },
                new ProductCategory { ProductId = 8, CategoryId = 1 },
                new ProductCategory { ProductId = 9, CategoryId = 2 },
                new ProductCategory { ProductId = 10, CategoryId = 3 },
                new ProductCategory { ProductId = 11, CategoryId = 4 },
                new ProductCategory { ProductId = 12, CategoryId = 5 },
                new ProductCategory { ProductId = 13, CategoryId = 6 },
                new ProductCategory { ProductId = 14, CategoryId = 7 },
                new ProductCategory { ProductId = 15, CategoryId = 1 },
                new ProductCategory { ProductId = 16, CategoryId = 2 }
            );
        }

    }
}


