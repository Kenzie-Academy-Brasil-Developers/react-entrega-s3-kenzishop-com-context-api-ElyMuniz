
import { useCart } from "../../providers/Cart"
import ProductsnoCart from "../productsCart"
import { Carrinho } from "./style"


const Cart = () => {
    
  const { cart } = useCart() 
  

  return (
    <Carrinho>
      <h3>Carrinho de compra</h3>
      {<ProductsnoCart/>}
      <h3>Total R$ {(cart.reduce((acum, vAtual) => acum + vAtual.valor_total,0)).toFixed(2).replace(".", ",")} </h3>
    </Carrinho>
  )
}

export default Cart