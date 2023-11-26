import React, { useState, useEffect } from 'react';
import './Appstyle.css';
import imagen from "./13009.png";
import { useNavigate } from "react-router-dom";
import imagen2 from "./13007.png";

function TuComponente() {
  const [nombre, setNombre] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const fechaInicial = new Date();
  const [hora, sethora] = useState(fechaInicial);
  const navigate = useNavigate();
  const [button, setButton] = useState(true);
  const [contador, setContador] = useState(() => {
    const storedContador = localStorage.getItem('contador');
    return storedContador ? parseInt(storedContador) : 1;
  });

  // Función para convertir Blob a Data URL
  const blobToDataURL = (blob, callback) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      callback(e.target.result);
    };
    reader.readAsDataURL(blob);
  };

  // Función para almacenar comentarios en localStorage
  const saveComentarios = () => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  };

  // Función para manejar la carga de archivos
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convertir el archivo a Data URL antes de almacenarlo
      blobToDataURL(file, (dataURL) => {
        setArchivo({ name: file.name, dataURL });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevahora = new Date();
    sethora(nuevahora);
    const nuevahoras = nuevahora.getHours().toString().padStart(2, '0');
    const nuevaminuto = nuevahora.getMinutes().toString().padStart(2, '0');
    const nuevasegundos = nuevahora.getSeconds().toString().padStart(2, '0');

    const nuevoComentario = {
      nombre,
      mensaje,
      Titulo,
      archivo,
      id: contador,
      hora: nuevahoras,
      minutos: nuevaminuto,
      segundos: nuevasegundos,
    };

    setContador((prevContador) => prevContador + 1);
    localStorage.setItem('contador', contador + 1);
    setComentarios([...comentarios, nuevoComentario]);
    setNombre('');
    setMensaje('');
    setTitulo('');
    setArchivo(null);
    setButton(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (comentarios.length) {
      saveComentarios();
      // Mueve la navegación aquí
    }
  }, [comentarios]);

  useEffect(() => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios'));
    if (storedComentarios) {
      setComentarios(storedComentarios);
    }
  }, []);

  return (
    <>
      <header className="Head">
        <a href="/app"><img src={imagen2} alt="mensaje" className="imagen" /></a>
        <a href="/"><img src={imagen} alt="mensaje" className="imagen2" /></a>
      </header>
      {button ?
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="Nombre" htmlFor="nombre"></label>
              <input
                className='InNombre'
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="Titulor" htmlFor="Titulo"></label>
              <input
                className='InTitulo'
                type="text"
                id="titulo"
                placeholder='Titulo'
                value={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div>
              <label className="Posting" htmlFor="mensaje"></label>
              <textarea
                className='InPost'
                id="mensaje"
                placeholder='Post'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <div>
              <label className="Posting"  htmlFor="archivo"></label>
              <input
              className="FileLabel"
                type="file"
                id="archivo"
                onChange={handleFileChange}
              />
            </div>
            <button className='botonazo' >Crear <br></br>Post</button>
          </form>
        </div> : <h1>Mensaje Enviado</h1>}
    </>
  );
}

export default TuComponente;
import React, { useState, useEffect } from 'react';
import './Appstyle.css';
import imagen from "./13009.png";
import { useNavigate } from "react-router-dom";
import imagen2 from "./13007.png";

function TuComponente() {
  const [nombre, setNombre] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const fechaInicial = new Date();
  const [hora, sethora] = useState(fechaInicial);
  const navigate = useNavigate();
  const [button, setButton] = useState(true);
  const [contador, setContador] = useState(() => {
    const storedContador = localStorage.getItem('contador');
    return storedContador ? parseInt(storedContador) : 1;
  });

  // Función para convertir Blob a Data URL
  const blobToDataURL = (blob, callback) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      callback(e.target.result);
    };
    reader.readAsDataURL(blob);
  };

  // Función para almacenar comentarios en localStorage
  const saveComentarios = () => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  };

  // Función para manejar la carga de archivos
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convertir el archivo a Data URL antes de almacenarlo
      blobToDataURL(file, (dataURL) => {
        setArchivo({ name: file.name, dataURL });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevahora = new Date();
    sethora(nuevahora);
    const nuevahoras = nuevahora.getHours().toString().padStart(2, '0');
    const nuevaminuto = nuevahora.getMinutes().toString().padStart(2, '0');
    const nuevasegundos = nuevahora.getSeconds().toString().padStart(2, '0');

    const nuevoComentario = {
      nombre,
      mensaje,
      Titulo,
      archivo,
      id: contador,
      hora: nuevahoras,
      minutos: nuevaminuto,
      segundos: nuevasegundos,
    };

    setContador((prevContador) => prevContador + 1);
    localStorage.setItem('contador', contador + 1);
    setComentarios([...comentarios, nuevoComentario]);
    setNombre('');
    setMensaje('');
    setTitulo('');
    setArchivo(null);
    setButton(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (comentarios.length) {
      saveComentarios();
      // Mueve la navegación aquí
    }
  }, [comentarios]);

  useEffect(() => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios'));
    if (storedComentarios) {
      setComentarios(storedComentarios);
    }
  }, []);

  return (
    <>
      <header className="Head">
        <a href="/app"><img src={imagen2} alt="mensaje" className="imagen" /></a>
        <a href="/"><img src={imagen} alt="mensaje" className="imagen2" /></a>
      </header>
      {button ?
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="Nombre" htmlFor="nombre"></label>
              <input
                className='InNombre'
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="Titulor" htmlFor="Titulo"></label>
              <input
                className='InTitulo'
                type="text"
                id="titulo"
                placeholder='Titulo'
                value={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div>
              <label className="Posting" htmlFor="mensaje"></label>
              <textarea
                className='InPost'
                id="mensaje"
                placeholder='Post'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <div>
              <label className="Posting"  htmlFor="archivo"></label>
              <input
              className="FileLabel"
                type="file"
                id="archivo"
                onChange={handleFileChange}
              />
            </div>
            <button className='botonazo' >Crear <br></br>Post</button>
          </form>
        </div> : <h1>Mensaje Enviado</h1>}
    </>
  );
}

export default TuComponente;
