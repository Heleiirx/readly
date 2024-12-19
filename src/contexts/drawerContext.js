import { useState, createContext, useContext } from "react";

export const drawerContext = createContext(); //Nota: Export permite usarlo fuera de este archivo

export function DrawerProvider({ children }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [bookID, setBookID] = useState(null);

  const openDrawer = (book) => {
    setDrawerIsOpen(true);
    setBookID(book);
  }
  const closeDrawer = () => {{
    setDrawerIsOpen(false);
    setBookID(null);
  }}

  return (
    <drawerContext.Provider value={{ drawerIsOpen, openDrawer, closeDrawer, bookID }}>
      {children}
    </drawerContext.Provider>
  );
};

export const useDrawer = () => useContext(drawerContext);