import React, { useState, useEffect } from "react";
import api from './services/api';

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
    });
  }, []);

  async function handleAddRepository() {
    //imutabilidade
    setRepositories([...repositories, `Novo repositório ${Date.now()}`]);

    //console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>

      <ul data-testid="repository-list">
        {repositories.map(repository => <li key={repository.id}>{repository.title}</li>)}

        <button onClick={() => handleRemoveRepository(1)}>
            Remover
        </button>
        
      </ul>
      <button onClick={handleAddRepository}>Adcionar</button>
    </div>
  );
}

export default App;


/*
return (
    <div>
     <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>
      
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
*/