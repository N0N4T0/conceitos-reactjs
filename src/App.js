import React, { useState } from "react";

import "./styles.css";

function App() {
  //estado
  const [repositories, setRepositories] = useState(['A']);

  async function handleAddRepository() {
    //imutabilidade
    setRepositories([...repositories, `Novo repositório ${Date.now()}`]);

    console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>

      <ul data-testid="repository-list">
        {repositories.map(repository => <li key={repository}>{repository}</li>)}

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