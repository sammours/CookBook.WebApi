using CookBook.WebApi.DB;
using CookBook.WebApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

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

    [HttpGet]
    [Route("GetAll")]
    [ProducesResponseType(typeof(List<Book>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    [ProducesResponseType((int)HttpStatusCode.NotFound)]
    public IActionResult GetAll([FromQuery] int? take, [FromQuery] int? skip, [FromQuery] string? bookTitle)
    {
        var books = this.repository.GetAll();
        if (books is null)
        {
            return this.NotFound();
        }

        return this.Ok(books);
    }

    [HttpGet]
    [Route("GetByUserId/{userId}")]
    [ProducesResponseType(typeof(List<Book>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    [ProducesResponseType((int)HttpStatusCode.NotFound)]
    public IActionResult GetByUserId(int userId)
    {
        var books = this.repository.GetById(userId);
        return this.Ok(books);
    }

    [HttpGet]
    [Route("GetById/{id}")]
    [ProducesResponseType(typeof(Book), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    [ProducesResponseType((int)HttpStatusCode.NotFound)]
    public IActionResult GetById(int id)
    {
        if (id == 0)
        {
            return this.BadRequest();
        }

        var book = this.repository.GetById(id);
        if (book is null)
        {
            return this.NotFound();
        }

        return this.Ok(book);
    }

    [HttpPost]
    [Route("Insert")]
    [ProducesResponseType(typeof(Book), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public IActionResult Insert([FromBody] Book book)
    {
        book = this.repository.Insert(book);
        return this.Created(this.Request.Path + "/" + book.Id, book);
    }

    [HttpPut]
    [Route("Update")]
    [ProducesResponseType(typeof(Book), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public IActionResult Update([FromBody] Book book)
    {
        book = this.repository.Update(book);
        return this.Ok(book);
    }

    [HttpDelete]
    [Route("Delete")]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public IActionResult Delete(int id)
    {
        this.repository.Delete(id);
        return this.Ok();
    }
}
