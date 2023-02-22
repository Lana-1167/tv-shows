import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import './App.css';
import showsData from  './shows-data';

import Show from ´./components/Show´;
import ShowList from ´./componets/ShowList´;
import Header from ´./component/Header´;



function App() {
  return (
    <div className="App">
      <Header />
      <h1>The Best TV Show App</h1>
      <ShowList shows={showsData}/>
      
     
      
    </div>
  );
}





export default App;
