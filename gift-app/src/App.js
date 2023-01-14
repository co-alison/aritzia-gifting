import { useState } from "react";
import './App.css';
import Form from "./components/Form"
import Results from "./components/Results";
import { Route, Routes } from "react-router-dom";

const items = [
  { title: "Alchemy Dress", recipient: "Partner", event: "Party", size: "Small", type: "Dress" },
  { title: "Cozy Fleece Mega Sweatpant", recipient: "Myself", event: "Seasonal Specials", size: "Medium", type: "Pants" },
  { title: "Pleated Pant", recipient: "Family", event: "Professional ", size: "Large", type: "Pants" },

  { title: "Program Pant", recipient: "Family", event: "Professional", size: "Small", type: "Pants" },
  { title: "The Super Puff™    ", recipient: "Myself", event: "Professional", size: "Medium", type: "Top" },
  { title: "Saturn Longsleeve Midi Dress", recipient: "Friend", event: "Party ", size: "Large", type: "Dress" },

  { title: "Cozy Fleece Boyfriend Crew Sweatshirt", recipient: "Family", event: "Casual", size: "Small", type: "Top" },
  { title: "Tabloid Trench Coat", recipient: "Myself", event: "Professional", size: "Medium", type: "Top" },
  { title: "Weatherford Sweater", recipient: "Friend", event: "Casual ", size: "Large", type: "Top" },

  { title: "Terry Fleece Boyfriend Zip Hoodie", recipient: "Partner", event: "Seasonal Specials", size: "Small", type: "Top" },
  { title: "Grey SweatPants", recipient: "Myself", event: "Seasonal Specials", size: "Medium", type: "Pants" },
  { title: "Memories Blazer", recipient: "Friend", event: "Professional ", size: "Large", type: "Top" },
]  

const App = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    step1: '', // who are you buying for (radio)
    step2: '', // occasion/event (radio)
    step3: '', // colour (checkbox)
    step4: '', // type of clothing (checkbox)
    step5: ''
})
  const [backendData, setBackendData] = useState(items);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Form page={page} setPage={setPage} data={data} setData={setData} backendData={backendData} setBackendData={setBackendData}/>} />
          <Route path="/results" element={<Results data={data}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
