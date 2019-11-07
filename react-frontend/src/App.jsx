import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [zitat, setZitat] = useState('')

  useEffect(() => {
    loadZitat()
  }, [])

  const loadZitat = () => {
    fetch(`${process.env.REACT_APP_API_URL}/zitat`, {
      method:"GET"
    })
    .then(response => response.json())
    .then(zitat => setZitat(zitat.zitat))
  }

  return (
    <div className="App">
      <div>
        {zitat}
      </div>
      <button onClick={loadZitat}>Neues Zitat laden</button>
    </div>
  );
}

export default App;
