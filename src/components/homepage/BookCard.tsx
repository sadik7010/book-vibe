import { Ibook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
interface IbookCardProps{
    book:Ibook
}

const BookCard = ({ book }:IbookCardProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-base-200">
        <Image
          src={image}
          alt={bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold shadow backdrop-blur">
            {category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Book Name */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold">
            {bookName}
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            by {author}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-3 border-y border-base-300 py-3 text-sm">
          <div>
            <p className="text-base-content/50">Pages</p>
            <p className="font-semibold">{totalPages}</p>
          </div>

          <div>
            <p className="text-base-content/50">Published</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-base-content/50">Publisher</p>
            <p className="truncate font-semibold">{publisher}</p>
          </div>

          <div>
            <p className="text-base-content/50">Rating</p>
            <p className="font-semibold">⭐ {rating}/5</p>
          </div>
        </div>

        {/* Review */}
        <p className="line-clamp-2 text-sm leading-6 text-base-content/60">
          {review}
        </p>

        {/* Button */}
        <Link href={`/books/${bookId}`} className="block">
          <button className="btn btn-primary w-full rounded-xl">
            View Details
            <span className="text-lg">→</span>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default BookCard;