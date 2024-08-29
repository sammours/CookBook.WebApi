using CookBook.WebApi.DB;
using Microsoft.EntityFrameworkCore;

namespace CookBook.WebApi.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly CookBookContext dbContext;
        public BookRepository(CookBookContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // 1. Reusability
        // 2. Unit Testing
        // 3. Single responsibility

        public List<Book> GetAll()
        {
            return this.dbContext.Books.ToList();
        }

        public Book GetById(int id)
        {
            if (id == 0)
            {
                throw new ArgumentException("Id cannot be 0");
            }

            var book = this.dbContext.Books
                .FirstOrDefault(x => x.Id == id);
            if (book == null)
            {
                throw new Exception("Cannot find a book with id: " + id);
            }

            return book;
        }

        public Book Insert(Book book) // SOLID: Single Responsibility
        {
            if (book == null)
            {
                throw new ArgumentException("Book cannot be null");
            }

            book.Histories.Add(new BookHistory
            {
                HistoryDate = DateTime.Now,
            });

            this.dbContext.Books.Add(book);
            this.dbContext.SaveChanges();

            return book;
        }

        public Book Update(Book book)
        {
            if (book == null)
            {
                throw new ArgumentException("Book cannot be null");
            }

            book.Histories.Add(new BookHistory
            {
                HistoryDate = DateTime.Now,
            });

            this.dbContext.Books.Update(book);
            this.dbContext.SaveChanges();
            return book;
        }

        public void Delete(int id)
        {
            if (id == 0)
            {
                throw new ArgumentException("Id cannot be 0");
            }

            var book = this.dbContext.Books.Find(id);
            if (book == null)
            {
                throw new Exception("Cannot find a book with id: " + id);
            }

            this.dbContext.Books.Remove(book);
            this.dbContext.SaveChanges();
        }
    }
}
