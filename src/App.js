import react from "react";
import Tabs from "./Components/Tabs";
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Tabs />
      </DataProvider>
    </div>
  );
}

export default App;
