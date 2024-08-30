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
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
    {
        options.UseInMemoryDatabase("CookBookInMemoryDb");
    }
    else
    {
        options.UseSqlServer(configuration.GetConnectionString("Database"));
    }
    options.EnableSensitiveDataLogging();
});

var cookBookPolicy = "CookBookPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(cookBookPolicy,
        builder =>
        {
            builder
                .AllowAnyOrigin() // Server Urls
                .AllowAnyHeader() // Request Headers: access token, referer url, ...
                .AllowAnyMethod(); // GET, POST, PUT, DELETE, OPTIONS
        });
});

var dbContext = builder.Services.BuildServiceProvider().GetRequiredService<CookBookContext>();
dbContext.Books.Add(new Book
{
    Id = 1,
    Title = "Book1",
    Author = "Jens",
    Description = "Book desc",
    IsAvailable = true,
    ISBN = "S-123123123",
    PublishDate = DateTime.Now,
});

dbContext.Books.Add(new Book
{
    Id = 2,
    Title = "Book2",
    Author = "Jens",
    Description = "Book desc",
    IsAvailable = true,
    ISBN = "S-123123124",
    PublishDate = DateTime.Now.AddMonths(-5),
});

dbContext.SaveChanges();

builder.Services.AddScoped<IBookRepository, BookRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(cookBookPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();
