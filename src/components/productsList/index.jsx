import { useProducts } from "../../providers/Products"
import { useCart } from "../../providers/Cart"
import { Produtos } from "./style"

const ProductsList = () => {

  const { products  } = useProducts()
  const { addToCart } = useCart()

  return (
    <Produtos>
      <ul>
        {products.map((prod)=>(
          <li key={prod.id}>
            <h2>{prod.produto}</h2>
            <img src={prod.img} alt={prod.produto}/>
            <p>Preço por {prod.unidade}: R$ {prod.valor.toFixed(2).replace(".", ",")}</p>
            <p>Categoria: {prod.categoria}</p>
            <button onClick={()=>addToCart(prod)}>Comprar</button>
          </li>
        ))}
      </ul>
      </Produtos>
  )
}

export default ProductsList