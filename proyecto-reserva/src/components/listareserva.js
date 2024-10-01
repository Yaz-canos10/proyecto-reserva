import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const ListaReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const obtenerReservas = () => {
      const reservasCollection = collection(db, 'reservas');
      onSnapshot(reservasCollection, (snapshot) => {
        setReservas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    };

    obtenerReservas();
  }, []);

  return (
    <div className="mt-4">
      <h2>Lista de Reservas</h2>
      <ul className="list-group">
        {reservas.map((reserva) => (
          <li key={reserva.id} className="list-group-item">
            {reserva.nombre} - {reserva.personas} personas - {reserva.fecha} - {reserva.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaReservas;