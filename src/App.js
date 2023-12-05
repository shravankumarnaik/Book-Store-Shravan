
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/addBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetail from './components/Book/BookDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header />
     <Routes>
      <Route element={<Home />} path='/' exact />
      <Route element={<AddBook />} path='/add' exact />
      <Route element={<Books />} path='/books' exact />
      <Route element={<About />} path='/about' exact />
      <Route  element={<BookDetail />} path='/books/:id' exact />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
