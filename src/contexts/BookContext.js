import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBook] = useState([
    { title: 'one', id: 1 },
    { title: 'Two', id: 2 },
    { title: 'Three', id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
