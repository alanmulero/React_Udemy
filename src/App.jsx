import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from "./Componentes/Lista/index.jsx";
import Soma from "./Componentes/Soma/index.jsx";
import FuncaoRenderizada from "./Componentes/FuncaoRenderizada/index.jsx"
import TesteHook from "./Componentes/TesteHook/index.jsx";

function App() {


  return (
    <>
     <p>Teste Local</p>
        <Lista />
        <Soma />
        <FuncaoRenderizada />
        <TesteHook />
    </>
  )
}

export default App

