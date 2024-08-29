using CookBook.WebApi.DB;
using CookBook.WebApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CookBook.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class BooksController : ControllerBase
{
    private readonly IBookRepository repository;
    public BooksController(IBookRepository repository)
    {
        this.repository = repository;
    }

    [HttpGet(Name = "GetById")]
    public Book GetById(int id)
    {
       return this.repository.GetById(id);
    }

    [HttpPost]
    public void Insert([FromBody] Book book)
    {
        this.repository.Insert(book);
    }
}
