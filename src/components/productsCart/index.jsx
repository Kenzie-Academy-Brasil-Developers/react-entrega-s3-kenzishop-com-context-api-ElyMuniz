import { useCart } from '../../providers/Cart'
import { Ulcarrinho } from './style'

const ProductsnoCart = () => {
 
  const { cart, removeFromCart } = useCart()
  
  return (
   
      <Ulcarrinho>
        { cart.length === 0?
          <ul>Carrinho vazio</ul>:
       
        cart.map(prod =>(
          <li key={ prod.id}>
            <img src={prod.img} alt={prod.produto}/>
            <h5>{prod.produto}</h5>
            <p>R$ {prod.valor.toFixed(2).replace(".", ",")}</p>
            <p>{prod.qtde}</p>
            <p>R$ {prod.valor_total.toFixed(2).replace(".", ",")}</p>
            <button onClick={()=>removeFromCart(prod)}>Excluir</button>
          </li>
        ))
      } 
      </Ulcarrinho>
   
  )
}

export default ProductsnoCart