import { useState, createContext, useContext } from "react";
import { searchBook } from "../client-server/booksWS";

export const searchContext = createContext(); //Nota: Export permite usarlo fuera de este archivo

export function SearchProvider({ children }) {
    const [books, setBooks] = useState([]);
    
    const searchBooks = async (query) => {
        const tempBooks = await searchBook(query)
        setBooks(tempBooks);
        console.log(books)
    }

  return (
    <searchContext.Provider value={{ searchBooks, books }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);