'use client'

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/book.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:Ibook}) => {
  
    const {readBooks,setReadBooks} = useContext(BooksContext)
    
    
    const handleReadBook = ()=> {
         setReadBooks([...readBooks,book])
         
         toast.success(`You have read '${book.bookName}'`);
        console.log('read book button triggred',book);
    }
  return (
    <button className="btn btn-primary flex-1 rounded-xl" onClick={()=> handleReadBook()}>📖 Read Book</button>
  );
};

export default ReadButton;
