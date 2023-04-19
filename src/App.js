import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShowPage from './pages/ShowPage';
import  Search  from './pages/Search';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path ="/home" element={<Home />}/>
          
          <Route path= "/favorites" element={<Favorites />}/>

          <Route path ="/upcoming" element={<Upcoming />}/>
          <Route path="/show/:showID" element={<ShowPage />}/>
          <Route path="/search/:searchText" element={<Search />}/>
          <Route path ="*" element={<NotFound />}/>
        </Routes>
      

        </Router>
     
      
    </div>
  );
}





export default App;
