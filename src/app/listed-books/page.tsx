"use client";
import BookCard from "@/components/homepage/BookCard";
import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/book.type";
import React, { useContext, useState } from "react";
import BookListCard from "./BookListCard";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext)  
  const [shortby, setShortby] = useState<"rating" | "pages" | "year">("rating");
  // console.log(readBooks, wishList, "ReadBooks", "wishlist");
  return (
    <div className="container mx-auto py-5">
      <h1 className="my-7 bg-green-200 rounded-3xl py-5 font-bold text-4xl text-center">
        Listed Books
      </h1>

      <div className="text-center">
        <select
          value={shortby}
          onChange={(event) => setShortby(event.target.value as typeof shortby)}
          className="select select-success"
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publisher year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6  ">
          <div className="flex flex-col gap-7">
            {readBooks.length > 0 ? (
              readBooks.map((book: Ibook) => (
                <BookListCard key={book.bookId} book={book}></BookListCard>
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No read Books found
              </p>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col gap-7">
            {wishlist.length > 0 ? (
              wishlist.map((book: Ibook) => (
                <BookListCard key={book.bookId} book={book}></BookListCard>
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No <span className="text-pink-500">WishList</span> Books found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
