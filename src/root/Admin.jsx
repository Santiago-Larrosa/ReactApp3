import { useEffect, useState } from 'react';
import "./AdminStyle.css";

function Admin() {
  const [contraseña, setContraseña] = useState('');
  const [admin, setAdmin] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const Con = '123';

  useEffect(() => {
    const AdminJson = localStorage.getItem('admin');
    if (AdminJson) {
      console.log(AdminJson);
      const mostrarMensajeJson = localStorage.getItem('mostrarMensaje');
      setAdmin(JSON.parse(AdminJson));
      setMostrarMensaje(JSON.parse(mostrarMensajeJson));
      setMostrarMensaje(AdminJson);


    }

    const mostrarMensajeJson = localStorage.getItem('mostrarMensaje');
    if (mostrarMensajeJson) {

      console.log(AdminJson);
      setMostrarMensaje(JSON.parse(mostrarMensajeJson));
    }
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (contraseña === Con) {
      setAdmin(true);
      localStorage.setItem('admin', JSON.stringify(true));
      setMostrarMensaje(true);
      localStorage.setItem('mostrarMensaje', JSON.stringify(true));
    } else {
      setAdmin(false);
      localStorage.removeItem('admin');
      setMostrarMensaje(false);
      localStorage.removeItem('mostrarMensaje');
    }
    setContraseña('');
  };

  const Boton = () => {
    setAdmin(false);
    setMostrarMensaje(false);
    localStorage.removeItem('admin');
    localStorage.removeItem('mostrarMensaje');
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div>
          <label className="contraseña" htmlFor="contraseña"></label>
          <input
            className='InContraseña'
            type="text"
            id="contraseña"
            placeholder='Contraseña'
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button type='submit' className='botonor'>Enviar</button>
        </div>
      </form>
      <button className='botonor2'><a className='link' href="/">Ir a Inicio</a></button>
      {mostrarMensaje && (
        <div>
          <h1 className='comprobacion'>Permiso Concedido</h1>
          <button className='botonor3' onClick={Boton}>Cerrar sesión</button>
        </div>
      )}
    </>
  );
}

export default Admin;
