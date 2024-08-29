using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CookBook.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class BookSeedDataMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Book",
                columns: new[] { "Id", "Author", "Description", "ISBN", "PublishDate", "Title" },
                values: new object[,]
                {
                    { 1, "Samy", "desc1", "123", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Title 1" },
                    { 2, "Samy", "desc2", "123", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Title 2" },
                    { 3, "Samy", "desc3", "123", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Title 3" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Book",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Book",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Book",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
