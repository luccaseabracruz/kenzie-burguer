import { StyledCard } from "./style";

export default function ProductCard({product, addToCart}) {

    const {id, name, category, price, img} = product

    const treatedPrice = `R$ ${(Number(price).toFixed(2)).toString().split(".").join(",")}`

    return (
        <StyledCard >
            <div className="imgContainer">
                <img src={img} alt={`Foto do ${name}`} />
            </div>
            
            <div className="productInfo">
                <h2 className="heading three">{name}</h2>
                <p className="category caption">{category}</p>
                <p className="price">{treatedPrice}</p>
                <button onClick={()=> addToCart(product)} className="medium green" id={id}>Adicionar</button>
            </div>
        </StyledCard>
    )
}