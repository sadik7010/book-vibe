'use client'
import React, { createContext, useState } from "react";

 export const BooksContext = createContext({})


const BooksProvider = ({children}:{children:React.ReactNode}) => {
    const [readBooks,setReadBooks] = useState([]);
    const [wishList,setWishlist] = useState([]);
    const sharedDtaa ={
        readBooks,
        setReadBooks,
        wishList,
        setWishlist
    }
    return <BooksContext.Provider value={sharedDtaa}>{children}</BooksContext.Provider>
};

export default BooksProvider;