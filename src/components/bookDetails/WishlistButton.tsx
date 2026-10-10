'use client'

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/book.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({book}:{book:Ibook}) => {
  
    const {wishlist,setWishlist} = useContext(BooksContext)
    
    
    const handleAddToWishlist = ()=> {
         setWishlist([...wishlist,book])
         
          toast.success(`You add Wishlist '${book.bookName}'`);
        console.log('read book button triggred',book);
    }
  return (
    <button className="btn btn-primary flex-1 rounded-xl" onClick={()=> handleAddToWishlist()}>📖 Add To Wishlist</button>
  );
};

export default WishlistButton;