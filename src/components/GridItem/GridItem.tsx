import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'   
import downImage from '../../assets/down.png'   
type Props = {

    item: Level
}



export function GridItem({item}: Props) {
console.log(item)
    return <>
    <div className={styles.main} style={{background: item.color}}>
        <div className={styles.gridIcon}>
            {/* {item.icon === 'up' && <img src={upImage}/> width="150"} */}
            {/* {item.icon === 'down' && <img src={downImage}/>} */}
            <img src={item.icon === 'up'?upImage : downImage} alt="" width="30" />
        </div>
        <div className={styles.gridTitle}>
            {item.title}
        </div>
        {item.yourImc && <div className={styles.yourImc}>Seu IMC é {item.yourImc} </div>}
        <div className={styles.gridInfo}>
            <>
            imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
        </div>
    </div>
    
    </>
}