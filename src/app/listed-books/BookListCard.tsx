import { Ibook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";

const BookListCard = ({ book }: { book: Ibook }) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-5">
        {/* Image */}
        <div className="h-44 w-44 shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <div className="h-44 w-44 shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={book.image}
              alt={book.bookName}
              width={176}
              height={176}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <h2 className="text-xl font-bold text-gray-800">{book.bookName}</h2>

          <p className="mt-2 text-sm text-gray-600">
            By : <span className="font-medium">{book.author}</span>
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-gray-800">Tag</span>

            {book.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-1.5 text-sm text-green-600"
              >
                #{tag}
              </span>
            ))}

            <span className="text-sm text-gray-500">
              📍 Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          <div className="mt-4 flex gap-6 text-sm text-gray-500">
            <span>👥 Publisher: {book.publisher}</span>
            <span>📄 Page {book.totalPages}</span>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-gray-200 pt-4">
            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm text-blue-500">
              Category: {book.category}
            </span>

            <span className="rounded-full bg-orange-50 px-5 py-2 text-sm text-orange-500">
              Rating: {book.rating}
            </span>

            <Link
              href={`/books/${book.bookId}`}
              className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;
