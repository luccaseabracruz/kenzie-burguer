import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CartComponent from "./components/CartComponent";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import SearchTitle from "./components/SearchTitle";
import { api } from "./services/api";

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentSale, setCurrentSale] = useState(getCartFromLocalStorage())
  const [carTotal, setCarTotal] = useState(0)

  
  useEffect(()=>{
    const searchProduct = products.filter((product) => {
      return search === "" ? false : (product.name.toLowerCase()).includes(search.toLowerCase())
    })
    
    setFilteredProducts(searchProduct)

  }, [search])


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
    setCartOnLocalStorage()

  }, [currentSale])
  


  function addToCart(product){
    if(!currentSale.some(item => item.id === product.id)){
      setCurrentSale([...currentSale, {...product, uuid: crypto.randomUUID()}])
      toast.success("Produto adicionado")
    } else {
      toast.error("Produto já selecionado", )
    }
    
  }

  function removeFromCart(event){
    setCurrentSale(currentSale.filter(product=> product.uuid !== event.target.id))
    toast.success("Produto removido")
  }

  function totalValue() {
    const pricesArray = currentSale.map(product => product.price)

    const total = pricesArray.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

    setCarTotal(total)
  }

  function removeAllFromCart() {
    setCurrentSale([])
    toast.success("Carrinho limpo")
  }

  function setCartOnLocalStorage(){
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

      <Header setSearch={setSearch}/>
      
      {filteredProducts.length > 0 && <SearchTitle search={search} setFilteredProducts={setFilteredProducts}/>}

      <main>
        <ProductsList products={products} addToCart={addToCart} filteredProducts={filteredProducts}/>

        <CartComponent currentSale={currentSale} removeFromCart={removeFromCart} carTotal={carTotal} removeAllFromCart={removeAllFromCart}/>        

      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
    </div>
  );
}

export default App;
