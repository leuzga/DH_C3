import PizzaOrder from './components/PizzaOrder';
import CancelOrder from './components/CancelOrder';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <h1>Aplicación de Pedido de Pizza</h1>
      <PizzaOrder />
      <CancelOrder />
    </div>
  );
};

export default App;
