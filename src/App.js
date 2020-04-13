import React, { useState, useEffect } from "react";
import api from './services/api';

import Header from './components/Header';

import "./styles.css";

function App() {
  //estado
  const [repositories, setRepositories] = useState([]);

  //Parametros
  //1) qual função disparar; 2) quando disparar
  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);

      //visualizando o formato do response no console.log
      //console.log(response);
    })
  }, [])

  async function handleAddRepository() {
    //imutabilidade
    //setRepositories([...repositories, `Novo repositório ${Date.now()}`]);

    const response = await api.post('repositories', {
      title: `Novo repositório ${Date.now()}`,
      url: "http://github.com/app%do%teste",
      techs: ["React", "JavaScript"]
    })

    const repository = response.data;

    setRepositories([...repositories, repository]);

    //console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    setRepositories(repositories.filter(
      repository => repository.id !== id 
    ))
  }

return (
  <div>
    <Header/>
    <ul data-testid="repository-list">
      {repositories.map(repository => (
        <li key={repository.id}>
          {repository.title}

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>

    <button id="delete" onClick={handleAddRepository}>Adicionar</button>
  </div>
);
}

export default App;