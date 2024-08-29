namespace CookBook.WebApi.DB
{
    public class BookHistory
    {
        public int Id { get; set; }
        public int BookId { get; set; } // Für FK in Database
        public DateTime HistoryDate { get; set; }
    }
}
