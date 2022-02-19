import Cart from './components/Cart/Cart.js';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
