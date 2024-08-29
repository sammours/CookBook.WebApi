using System.ComponentModel.DataAnnotations;

namespace CookBook.WebApi.DB
{
    public class Book
    {
        public int Id { get; set; }
        public string Title  { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string ISBN { get; set; }
        public DateTime PublishDate { get; set; }
        public bool IsAvailable { get; set; }
        public List<BookHistory> Histories { get; set; }
    }
}
