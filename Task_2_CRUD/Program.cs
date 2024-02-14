using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Task_2.Library;
using Task_2.Library.Database;
using Task_2_CRUD;
using Task_2_CRUD.Interfaces;
using Task_2_CRUD.Repositories;
using Task_2_CRUD.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("Default", builder =>
    {  
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); 
    });
});

builder.Services.AddDbContext<UserManagementDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("UserManagementDb");
    options.UseSqlServer(connectionString);
});

builder.Services.AddLibraryServices();
builder.Services.AddScoped<IUnitOfWork,UnitOfWork>();
builder.Services.AddScoped<IRepository<User>, UserRepository>();
builder.Services.AddScoped<IDbUpdateService, UpdateDatabase>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Run the migration
using (var scope = app.Services.CreateScope())
{
    var dbUpdateService = scope.ServiceProvider.GetRequiredService<IDbUpdateService>();
    dbUpdateService.MigrateDatabse();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.Run();
