import CartCard from "./CartCard";
import { StyledCartContainer } from "./style";
import TotalValue from "./TotalValue";

export default function CartComponent({ currentSale, removeFromCart, carTotal, removeAllFromCart }) {
  
  const treatedPrice = Number(carTotal).toFixed(2).toString().split(".").join(",")

  return (
    <StyledCartContainer>
      <div className="cartHeader">
        <h1 className="heading three">Carrinho de compras</h1>
      </div>
      {currentSale.length > 0 ? (
        <>
            <ul className="itensContainer">
            {currentSale.map((product) => (
                <CartCard
                key={product.uuid}
                product={product}
                removeFromCart={removeFromCart}
                />
            ))}
            </ul>
            <TotalValue treatedPrice={treatedPrice} removeAllFromCart={removeAllFromCart}/>
        </>
      ) : (
        <ul className="emptyCartContainer">
          <h1 className="heading three">Sua sacola está vazia</h1>
          <p>Adicionar itens</p>
        </ul>
      )}
    </StyledCartContainer>
  );
}
