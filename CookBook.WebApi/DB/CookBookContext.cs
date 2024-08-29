using Microsoft.EntityFrameworkCore;

namespace CookBook.WebApi.DB;

public class CookBookContext : DbContext
{
    public CookBookContext(DbContextOptions options)
        : base(options)
    {
    }

    public DbSet<Book> Books { get; set; }
    public DbSet<BookHistory> BookHistories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BookHistory>().ToTable("BookHistory");
        modelBuilder.Entity<BookHistory>().HasIndex(x => x.BookId);

        modelBuilder.Entity<Book>().ToTable("Book");
        modelBuilder.Entity<Book>().Property(x => x.Title).HasMaxLength(50);
        modelBuilder.Entity<Book>().Property(x => x.Description).IsRequired();
        modelBuilder.Entity<Book>().Property(x => x.IsAvailable).HasDefaultValue(true);

        modelBuilder.Entity<Book>()
            .HasMany(x => x.Histories).WithOne().HasForeignKey(x => x.BookId);

        modelBuilder.Entity<Book>().HasIndex(x => x.Title);
        modelBuilder.Entity<Book>().HasIndex(x => x.IsAvailable);

        modelBuilder.Entity<Book>().HasData(
            new Book
            {
                Id = 1,
                Author = "Samy",
                Description = "desc1",
                Title = "Title 1",
                ISBN = "123"
            },
            new Book
            {
                Id = 2,
                Author = "Samy",
                Description = "desc2",
                Title = "Title 2",
                ISBN = "123"
            },
            new Book
            {
                Id = 3,
                Author = "Samy",
                Description = "desc3",
                Title = "Title 3",
                ISBN = "123"
            });
    }
}
