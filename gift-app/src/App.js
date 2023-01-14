import { useState } from "react";
import './App.css';
import Form from "./components/Form"

const App = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Form page={page} setPage={setPage} />
      </header>
    </div>
  );
}

export default App;
