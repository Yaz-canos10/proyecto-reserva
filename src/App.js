import React from 'react';
import Reserva from './components/reserva'; 
import ListaReservas from './components/listareserva';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestión de Reservas</h1>
      <Reserva />
      <ListaReservas />
    </div>
  );
};

export default App;