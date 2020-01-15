import React, { useEffect, useState } from "react";
import "./App.scss";

import SideBar from "./components/sidebar/sidebar.component";
import DevCard from "./components/dev-item/dev-item.component";
import api from "./services/api";

function App() {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  });

  const handleNewUser = user => {
    setDevs([...devs, user]);
  };

  return (
    <div className="App">
      <aside>
        <SideBar className="sidebar" handleNewUser={handleNewUser} />
      </aside>
      <main>
        <ul>
          {devs.map(({ _id, ...otherProps }) => (
            <DevCard key={_id} {...otherProps} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
