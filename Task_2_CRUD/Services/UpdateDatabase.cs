using Task_2.Library.Database;
using Task_2_CRUD.Interfaces;

namespace Task_2_CRUD.Services
{
    public class UpdateDatabase: IDbUpdateService
    {
        private readonly IDatabase _updateDatabase;
        public UpdateDatabase(IDatabase updateDatabase)
        {
            _updateDatabase = updateDatabase;
        }

        public void MigrateDatabse()
        {
            _updateDatabase.DoMigration();
        }
    }
}
