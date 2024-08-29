using CookBook.WebApi.DB;

namespace CookBook.WebApi.Repositories;

public interface IBookRepository // CRUD
{
    List<Book> GetAll();
    Book GetById(int id);
    Book Insert(Book book);
    Book Update(Book book);
    void Delete(int id);
}
