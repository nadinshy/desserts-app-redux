
import './App.css';
import Cart from './Components/Cart/Cart';
import Desserts from './Components/DessertsComponent/Desserts';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <Desserts/>
     </div>
     <div className='block'>
      <img className='cake' src='https://img.icons8.com/external-linector-lineal-linector/512/external-cake-romantic-love-linector-lineal-linector.png' alt='cake'/>
     <h1>Dazzling Desserts</h1>
      <AllCategories/>
      <Cart/>
     </div>
    </div>
  );
}

export default App;
