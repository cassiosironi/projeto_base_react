import React, { useState, useEffect } from "react"; // hook que aplica memória de estados
import axios from "axios";


function Projetos() {

    const [posts, setPosts] = useState([])
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/cassiosironi/api-test/cursos")

            .then((response) => {
                setPosts(response.data)
                console.log(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/cassiosironi/api-test/alunos")

            .then((response) => {
                setAlunos(response.data)
                console.log(response.data)
            })
    }, [])

    return (

        <div className="container">
            
            <div className="row my-5">
                <div className="col-12 p-2">
                    <h2>Cursos</h2>
                    <hr></hr>
                </div>
                {posts.map((post, key) => {
                        return (
                            <div className="col-md-6 col-lg-4 p-2" key={key}>
                                <div className="card" style={{ minHeight: '140px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.titulo}</h5>
                                        <hr></hr>
                                        <a href={post.url} className="btn btn-primary card-link">Acessar</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row my-5">
                <div className="col-12 p-2">
                    <h2>Alunos</h2>
                    <hr></hr>
                </div>
                {alunos.map((aluno, key) => {
                        return (
                            <div className="col-md-6 col-lg-4 p-2" key={key}>
                                <div className="card" style={{ minHeight: '140px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{aluno.nome}</h5>                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

}

export default Projetos;