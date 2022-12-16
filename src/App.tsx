import { useState } from 'react'
import styles from './App.module.css'
import {GridItem} from './components/GridItem'
import { levels, calculateImc, Level } from './helpers/imc'
import lefArrowImage from './assets/leftarrow.png'
export function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null);

  function handleCalculateButton() {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField,weightField))

    }else {
      alert("Preencha algo")
    }
  }

  const handleBackButton = ()=>{
    setToShow(null)
    setWeightField(0)
    setHeightField(0)

  } 
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <h1 className={styles.logo}>IMC</h1>
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC.</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        <input disabled={toShow ? true : false} type="number" placeholder='Digite a sua Altura. EX: 1.5 (em metros)' value={heightField > 0 ? heightField : ''} onChange={e => setHeightField(parseFloat(e.target.value))} />
        <input disabled={toShow ? true : false} type="number" placeholder='Digite o seu Peso EX: 60.6 (em kg)' value={weightField > 0 ? weightField : ''} onChange={e => setWeightField(parseFloat(e.target.value))} />

        <button  onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>

      {!toShow &&   <div className={styles.grid}>
          {levels.map((item,key)=> (
          <GridItem key={key} item={item}/>
          ))}
      </div>}

      {toShow && <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={lefArrowImage} alt="" width={25} />
            </div>
            <GridItem item={toShow}/>
          </div>}

      </div>

      </div>
    </div>
  )
}

