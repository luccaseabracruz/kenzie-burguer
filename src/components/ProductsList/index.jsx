import ProductCard from "./ProductCard";
import { StyledProductsContainer } from "./style";

export default function ProductsList({products, addToCart}) {
    

    return(
        <StyledProductsContainer>

            {products.map(product=> <ProductCard key={product.id} product={product} addToCart={addToCart} />)}


        </StyledProductsContainer>
    )
}