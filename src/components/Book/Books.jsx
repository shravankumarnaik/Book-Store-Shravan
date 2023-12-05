
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import "./Book.css"

const URL = "https://book-store-rs2q.onrender.com/books"

//fecthHandler Function
const fetchHandler = async() =>{
   return await axios.get(URL).then((res)=>res.data)
}

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetchHandler().then((data)=>{
            setBooks(data.books);
        })
        // console.log(books)
    },[])
    return ( 
        <div className="books">
            <ul>
                {books && books.map((book,i)=>{
                    return(
                        <li className="book" key={i}>
                            <Book book={book} />
                        </li>
                    )
               
                })}
            </ul>
        </div>
     );
}
 
export default Books;