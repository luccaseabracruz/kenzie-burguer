import { useEffect, useState } from "react";
import "./App.css";
import CartComponent from "./components/CartComponent";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { api } from "./services/api";

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(getCartFromLocalStorage())
  const [carTotal, setCarTotal] = useState(0);

  useEffect(()=>{
    async function loadProducts() {

      try {
        const response = await api.get("products")
        setProducts(response.data.filter(item => item.name))

        
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()

  }, [])

  useEffect(() => {
    totalValue()
    setOnLocalStorage()

  }, [currentSale])
  


  function addToCart(product){
    if(!currentSale.some(item => item.id === product.id)){
      setCurrentSale([...currentSale, {...product, uuid: crypto.randomUUID()}])
    } else {
      console.log("Esse item já existe") //mudaaaaarrr para toast
    }
    
  }

  function removeFromCart(event){
    setCurrentSale(currentSale.filter(product=> product.uuid !== event.target.id))
  }

  function totalValue() {
    const pricesArray = currentSale.map(product => product.price)

    const total = pricesArray.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

    setCarTotal(total)
  }

  function removeAllFromCart() {
    setCurrentSale([])
  }

  function setOnLocalStorage(){
    localStorage.setItem("@BK: cart", JSON.stringify(currentSale))
  }
  function getCartFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem("@BK: cart"))

    if(data){
      return data;
    } else {
      return []
    }

  }



  return (
    <div className="App">

      <Header/>

      <main>
        <ProductsList products={products} addToCart={addToCart} />

        <CartComponent currentSale={currentSale} removeFromCart={removeFromCart} carTotal={carTotal} removeAllFromCart={removeAllFromCart}/>        

      </main>
      
    </div>
  );
}

export default App;
