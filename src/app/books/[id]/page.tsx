import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { Ibook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";

interface IbookDetailPageProp {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Featching Books Data", error);
    return [];
  }
};


const BookDetailPage = async ({ params }: IbookDetailPageProp) => {
  const { id } = await params;

  const bookData = await getBooks();

  const book = bookData.find(
    (book: Ibook) => String(book.bookId) === String(id)
  ) as Ibook;

  if (!book) {
  
  return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Book Not Found</h2>
          <p className="mt-2 text-base-content/60">
            The book you are looking for doesn't exist.
          </p>

          <Link href="/books">
            <button className="btn btn-primary mt-5">
              Back to Books
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-base-200/50 py-10">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            <li>{book.bookName}</li>
          </ul>
        </div>

        {/* Main Card */}
        <section className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">

          <div className="grid lg:grid-cols-[380px_1fr]">

            {/* ================= BOOK COVER ================= */}
            <div className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 p-10">

              {/* Background Glow */}
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />

              {/* Book Image */}
              <div className="relative w-full max-w-[270px] overflow-hidden rounded-xl shadow-2xl transition duration-500 hover:-translate-y-2 hover:rotate-1">

                <Image
                  src={book.image}
                  width={600}
                  height={800}
                  alt={book.bookName}
                  className="h-auto w-full object-cover"
                  priority
                />

              </div>
            </div>

            {/* ================= BOOK INFORMATION ================= */}
            <div className="p-6 md:p-10 lg:p-12">

              {/* Category + Rating */}
              <div className="mb-5 flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  {book.category}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-warning/10 px-4 py-1.5 text-sm font-semibold text-warning">
                  ⭐ {book.rating}
                </span>

              </div>

              {/* Title */}
              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 text-lg text-base-content/60">
                Written by{" "}
                <span className="font-semibold text-base-content">
                  {book.author}
                </span>
              </p>

              {/* Description */}
              <div className="mt-8">
                <h3 className="mb-3 text-xl font-bold">
                  About this book
                </h3>

                <p className="max-w-3xl text-base leading-8 text-base-content/70">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-7">
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-base-300 px-4 py-2 text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ================= BOOK META ================= */}
              <div className="my-8 grid grid-cols-2 gap-4 border-y border-base-300 py-6 md:grid-cols-4">

                <div>
                  <p className="text-sm text-base-content/50">
                    Pages
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Published
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Publisher
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Rating
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    ⭐ {book.rating}/5
                  </p>
                </div>

              </div>

              {/* ================= ACTIONS ================= */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <ReadButton book={book} />

                <WishlistButton book={book}/>

                <button className="btn btn-ghost rounded-xl">
                  ♡
                </button>

              </div>

            </div>
          </div>
        </section>

        {/* ================= BOTTOM INFO ================= */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
            <div className="mb-3 text-2xl">📚</div>
            <h3 className="font-bold">Easy Reading</h3>
            <p className="mt-1 text-sm text-base-content/60">
              Enjoy this book anytime from your digital library.
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
            <div className="mb-3 text-2xl">⭐</div>
            <h3 className="font-bold">Highly Rated</h3>
            <p className="mt-1 text-sm text-base-content/60">
              Rated {book.rating} out of 5 by readers.
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
            <div className="mb-3 text-2xl">🏷️</div>
            <h3 className="font-bold">Book Category</h3>
            <p className="mt-1 text-sm text-base-content/60">
              {book.category} · {book.tags.join(" · ")}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
};

export default BookDetailPage;