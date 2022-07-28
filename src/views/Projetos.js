import React,{ useEffect, useState } from "react"; // hook que aplica memória de estados
import api from "../services/api"; // aqui importa o arquivo do link da api consumida

function Projetos() {
  const [curso, setCurso] = useState();

  useEffect(() => {
    api
      .get("/cursos/1")
      .then((response) => setCurso(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3 my-3">
          <div class=" card">
            <img
              src={require("../images/banner1.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{curso.titulo}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="{curso.url}" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
