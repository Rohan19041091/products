
import { CartProvider } from './assets/component/CartContext';
import LoginForm from './assets/component/Login'
import Home from './assets/component/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <CartProvider>
        <Router>
        
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
     
    </Router>
    </CartProvider>
  )
}

export default App
