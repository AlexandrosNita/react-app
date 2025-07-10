import axios from 'axios';
import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

type Book = {
    ID: number
    TITLE: string
    AUTHOR: string
};

function App() {
    const [books, setBooks] = useState<Book[] | null>(null);

    useEffect(() => {
        axios.get<Book[]>('http://localhost:3000/books')
             .then(res => setBooks(res.data))
             .catch(err => console.error(err));
    }, []);

    if (!books) {
        return (
            <div>
                <p>Books not found!</p>
            </div>
        )
    }

    console.log(books);

    // const bookArray = (books as Book[]).map(book => {
    //     return {
    //         id: book.id,
    //         title: book.title,
    //         author: book.author
    //     }
    // });

    return (
        <div className="logo">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        console.log(book.TITLE);
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{book.TITLE}</td>
                                <td>{book.AUTHOR}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

  // const [count, setCount] = useState(0);
  //
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
