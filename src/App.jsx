import { useState } from 'react'
import MoneyImg from './assets/Money.png'
import './App.css'
import InputField from './components/InputField'
import Tabelle from './components/Tabelle'

function App() {
  const [inputValue, setInputValue] = useState({
    'initialInvestment': 10000,
    'annualInvestment': 100,
    'expectedReturn': 4,
    'duration': 20
  });

  function handleInputValue(inputIdentifier, newValue) {
    setInputValue(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <img src={MoneyImg} alt="Geldmünze" className="Image"></img>
      <h1>Investment Calculator</h1>
      <InputField onChangeInput={handleInputValue} inputValue={inputValue}></InputField>
      <Tabelle inputValue={inputValue}></Tabelle>
    </>
  )
}

export default App
