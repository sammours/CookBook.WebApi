using CookBook.WebApi.DB;
using CookBook.WebApi.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var configuration = builder.Configuration;
builder.Services.AddDbContext<CookBookContext>(options =>
{
    /*
     * if (env is development)
     *  then use inMemory
     *  UseInMemoryDatabase
     * else
     *  use connection string
     *  options.UseSqlServer(configuration.GetConnectionString("Database"));
     */
    options.UseSqlServer(configuration.GetConnectionString("Database"));
    options.EnableSensitiveDataLogging();
});

builder.Services.AddScoped<IBookRepository, BookRepository>();

var app = builder.Build();

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
