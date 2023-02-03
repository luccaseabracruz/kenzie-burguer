import { StyledValueContainer } from "./style";

export default function TotalValue({treatedPrice, removeAllFromCart}) {

    return (
        <StyledValueContainer>
            <div className="info">
                <h2>Total</h2>
                <p>R$ {treatedPrice}</p>
            </div>
            <button className="grey default" onClick={removeAllFromCart}>Remover todos</button>



        </StyledValueContainer>

    )
}