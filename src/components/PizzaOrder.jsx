import { useEffect, useState } from 'react';
import './PizzaOrder.css';

const PizzaOrder = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    console.log('PizzaOrder: Componente montado');

    const timer = setTimeout(() => {
      setOrder('Pepperoni Pizza');
    }, 2000);

    return () => {
      console.log('PizzaOrder: Componente desmontado');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('PizzaOrder: Componente actualizado');
  }, [order]);

  return (
    <div className='PizzaOrder'>
      <h2>Pedido de Pizza</h2>
      {order ? <p>Tu pedido es: {order}</p> : <p>Cargando pedido...</p>}
    </div>
  );
};

export default PizzaOrder;
