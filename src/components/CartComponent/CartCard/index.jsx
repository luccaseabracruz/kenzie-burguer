import { StyledCartCard } from "./style";

export default function CartCard({product, removeFromCart}) {

    return (
        <StyledCartCard>
            <div className="imgContainer">
                <img src={product.img} alt={`Foto de um ${product.name}`} />
            </div>

            <div className="cartCardInfo">
                <p className="name">{product.name}</p>
                <p className="category">{product.category}</p>
            </div>

            <p onClick={removeFromCart} className="removeBtn" id={product.uuid}>Remover</p>

            {/* {product.quantity > 1 && <p>Qtd: {product.quantity}</p>} */}
        </StyledCartCard>
    )
}