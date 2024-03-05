import { useEffect } from 'react';
import './CancelOrder.css';

const CancelOrder = () => {
  useEffect(() => {
    console.log('CancelOrder: Componente montado');

    return () => {
      console.log('CancelOrder: Componente desmontado');
    };
  }, []);

  const handleCancel = () => {
    alert('Pedido cancelado, Botón "Cancelar Pedido" presionado');
    console.log('CancelOrder: Botón "Cancelar Pedido" presionado');
  };

  return (
    <div className='CancelOrder'>
      <button onClick={handleCancel}>Cancelar Pedido</button>
    </div>
  );
};

export default CancelOrder;
