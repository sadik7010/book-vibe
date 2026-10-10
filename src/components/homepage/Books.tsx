import { Ibook } from "@/types/book.type";
import BookCard from "./BookCard";

const getBooks = async()=>{
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const Books = async() => {
    const bookData = await getBooks();
  return (
    <section className="container mx-auto px-4 py-10">
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Explore Our Books
        </h2>

        <p className="mt-2 text-base-content/60">
          Find your next favorite book from our collection.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {bookData.slice(0,3).map((book:Ibook) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </section>
  );
};

export default Books;