"use client";
import { Ibook } from "@/types/book.type";
import React, { createContext, useState } from "react";

interface IbooksContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

export const BooksContext = createContext<IbooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);
  const sharedDtaa = {
    readBooks,
    setReadBooks,
    wishlist: wishlist,
    setWishlist,
  };
  return (
    <BooksContext.Provider value={sharedDtaa}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
