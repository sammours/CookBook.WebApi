using CookBook.WebApi.DB;
using CookBook.WebApi.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;
builder.Services.AddDbContext<CookBookContext>(options =>
{
    options.UseInMemoryDatabase(databaseName: "MyDatabase");
});
builder.Services.AddScoped<IBookRepository, BookRepository>();
