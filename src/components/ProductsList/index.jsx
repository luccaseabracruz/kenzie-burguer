import ProductCard from "./ProductCard";
import { StyledProductsContainer } from "./style";

export default function ProductsList({products, addToCart, filteredProducts}) {

    return(
        <>
            {filteredProducts.length === 0 ? (
                <StyledProductsContainer>
                    {products.map(product=> <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
                </StyledProductsContainer>
                    
                ) : (
                    <StyledProductsContainer>
                        {filteredProducts.map(product=> <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
                    </StyledProductsContainer>
                )}
        </>
    )
}