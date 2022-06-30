import { CartProvider } from "./Cart"
import { ProductsProviders } from "./Products"

const Providers = ({ children }) => {
    return (
        <ProductsProviders>
            <CartProvider>
            { children }
            </CartProvider>
        </ProductsProviders>

    )
}

export default Providers