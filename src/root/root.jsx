import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './rootstyle.css';
import imagen from './13007.png';
import imagen2 from './13009.png';

export default function Root() {
  const [comentarios, setComentarios] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); // Agrega useNavigate

  useEffect(() => {
    const DownAdmin = localStorage.getItem("admin");
    setAdmin(JSON.parse(DownAdmin));
    setShowButton(admin);
  }, [admin]);

  useEffect(() => {
    const comentariosJson = localStorage.getItem("comentarios");

    if (comentariosJson) {
      const comentariosArray = JSON.parse(comentariosJson);
      setComentarios(comentariosArray);
    }
  }, []);

  const HandleClick = (id) => {
    const updatedComentarios = comentarios.filter((comentario) => comentario.id !== id);
    setComentarios(updatedComentarios);
    localStorage.setItem("comentarios", JSON.stringify(updatedComentarios));
  };

  const handleVerMasClick = (id) => {
    navigate(`/coment/${parseInt(id)}`); // Navega a la página específica
  };

  return (
    <>
      <header className="Head">
        <a href="/app"><img src={imagen} alt="mensaje" className="imagen" /></a>
        <a href="/"><img src={imagen2} alt="mensaje" className="imagen2" /></a>
        {admin && <div className="Activado"><h1 className="admin">Modo Admin ACTIVADO</h1></div>}
      </header>

      <div className="sidebar">
        <div>
          <form method="post"></form>
        </div>
        <nav></nav>

        <div className="EsteDiv">
          <ul>
            {comentarios.map((comentario, index) => (
              <div key={index} className="Post">
                <h2 className="">{comentario.nombre}</h2>
                <h1 className="TituloPost">{comentario.Titulo}</h1>
                {comentario.archivo && (
                  <img
                    src={comentario.archivo.dataURL}  // asumimos que el campo archivo es un objeto con la propiedad dataURL
                    alt={comentario.archivo.name}
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                )}
                <p>{comentario.hora}:{comentario.minutos}:{comentario.segundos}</p>
                <button className="Boton" onClick={() => handleVerMasClick(comentario.id)}>VER MAS</button>
                {showButton && (
                  <button className="Borrar" onClick={() => HandleClick(comentario.id)}>BORRAR</button>
                )}
               
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}
