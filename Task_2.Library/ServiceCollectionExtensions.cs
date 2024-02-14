using Microsoft.Extensions.DependencyInjection;
using Task_2.Library.Database;


namespace Task_2.Library
{
    public static class ServiceCollectionExtensions
    {
        public static void AddLibraryServices(this IServiceCollection services)
        {
             services.AddScoped<IDatabase, UpdateDatabase>();
        }
    }
}