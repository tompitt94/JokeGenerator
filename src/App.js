import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newJoke, setJoke] = useState([]);

  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJoke(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <button class="btn" onClick={getJoke}>New Joke</button>
          <p>{newJoke.joke}</p>
        </header>
      </div>
    );
  }

  function getJoke() {

    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setJoke(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
}

export default App;
