import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Reserva = () => {
  const [nombre, setNombre] = useState('');
  const [personas, setPersonas] = useState('');
  const [fecha, setFecha] = useState('');
  const [estado, setEstado] = useState('Confirmada');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !personas || !fecha) {
      alert('Todos los campos son obligatorios');
      return;
    }

    try {
      await addDoc(collection(db, 'reservas'), {
        nombre,
        personas,
        fecha,
        estado,
      });

      setNombre('');
      setPersonas('');
      setFecha('');
      setEstado('Confirmada');

      alert('Reserva creada con éxito');
    } catch (error) {
      console.error("Error creando la reserva: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre del cliente</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre del cliente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="personas" className="form-label">Número de personas</label>
        <input
          type="number"
          className="form-control"
          id="personas"
          placeholder="Número de personas"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">Fecha y hora</label>
        <input
          type="datetime-local"
          className="form-control"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="estado" className="form-label">Estado</label>
        <select
          className="form-select"
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Crear Reserva</button>
    </form>
  );
};

export default Reserva;