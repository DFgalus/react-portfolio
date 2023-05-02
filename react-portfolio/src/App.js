import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [page, setPage] = useState('about');

  function pickPage() {
    switch(page) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact': 
        return <Contact />;
      case 'resume':
        return <Resume />;
      default: 
        return <h1>404</h1>;
    }
  }

  function handlePage(e, page) {
    e.preventDefault();
    setPage(page);
  }
  return (
      <>
        <Nav handlePage={handlePage} page={page} />
        <section>{pickPage()}</section>
        <Footer />
      </>
    );
}

export default App;


  

