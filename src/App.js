import { useState } from 'react';
import './App.css';
import PainelControle from './componentes/PainelControle';
import logo from './imagens/logo.png';

function App() {

const [homens, setHomens] = useState(0)
const [mulheres, setMulheres] = useState(0)
const [criancas, setCriancas] = useState(0)
const [carne, setCarne] = useState(0)
const [pao, setPao] = useState(0)
const [bebidas, setBebidas] = useState(0)
  
return (
    <div id="conteudo">
      <img src={logo} alt='logo da calculadora de churrasco' />
      <h1>Calculadora de Churrasco</h1>
      <div id="painel">
        <div class="painelDados">
         <PainelControle label="Homens" valor={homens} setValor={setHomens}></PainelControle>
         <PainelControle label="Mulheres" valor={mulheres} setValor={setMulheres}></PainelControle>
         <PainelControle label="Crianças" valor={criancas} setValor={setCriancas}></PainelControle>
        </div>
        <div class="painelDados">
        <PainelControle label="Queijo" botoes={false} valor={carne} setValor={setCarne}></PainelControle>
        <PainelControle label="Pão" botoes={false} valor={pao} setValor={setPao}></PainelControle>
        <PainelControle label="Bebidas" botoes={false} valor={bebidas} setValor={setBebidas}></PainelControle>
         
        </div>
      </div>
    </div>
  );
}

export default App;
