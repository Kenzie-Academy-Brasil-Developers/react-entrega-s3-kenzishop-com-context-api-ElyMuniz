import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem('@cart')) || [])
    
    const addToCart = (product) => {

             
        if (cart.find(prod => prod.id === product.id)) {
            product.qtde++
            product.valor_total = product.qtde * product.valor
            setCart([...cart])
            localStorage.setItem('@cart', JSON.stringify(cart))

        } else{
            product.qtde = 1
            product.valor_total = product.valor
            setCart([...cart, product])
            localStorage.setItem('@cart', JSON.stringify([...cart, product]))
        }
    }

    const removeFromCart = (product) => {
        if (product.qtde === 1) {
            const newCart = cart.filter(prod => prod.id !== product.id)
            setCart(newCart)
            localStorage.setItem('@cart', JSON.stringify(newCart))

        } else{
            product.qtde--
            product.valor_total = product.qtde * product.valor
            setCart([...cart])
            localStorage.setItem('@cart', JSON.stringify([...cart]))
        }
    }

  
    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)