using CookBook.WebApi.DB;

namespace CookBook.WebApi.Repositories;

public interface IBookRepository // CRUD
{
    List<Book> GetAll();
    Book GetById(int id);
    void Insert(Book book);
    void Update(Book book);
    void Delete(int id);
}
