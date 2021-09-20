import React from "react";
import ToDo from "./components/todo/ToDo";
import SettingsContext from './context/settings'
import './App.css';
function App() {
  return (
    <SettingsContext>
      <ToDo />
    </SettingsContext>
  );
}

export default App;
