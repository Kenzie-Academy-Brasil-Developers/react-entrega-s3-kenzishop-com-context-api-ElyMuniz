import Global from './style/global';
import Cabecalho from './components/cabecalho';
import ProductsList from './components/productsList';
import Cart from './components/cart';


function App() {
  return (

    <>   
      <Global/>
        <Cabecalho/>
          <main>
            <ProductsList/>
            <Cart/>
          </main>
    </>    
   
  );
}

export default App;
