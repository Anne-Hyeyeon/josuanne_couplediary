import * as React from 'react';
import Top from './components/Top';
import Blog from './components/Blog';
import List from './components/List';
import Footer from './components/Footer';
import Ddaycounter from './components/Ddaycounter';
import Album from './components/Album';
import Quotes from './components/Quotes';


function App() {
  
  return (
    <div className="App">
      <Top />
      <Ddaycounter />
      <Blog />
      <List />
      <Album />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
