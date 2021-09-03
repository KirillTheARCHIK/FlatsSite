import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import { useContext } from 'react'
import HouseBlock from './HouseBlock'

const Examples = observer(()=>{
    const {complexMas} = useContext(Context)
    return(
        <div className="Examples">
            <h1 style={{width: '100%'}}>Примеры домов</h1>
            <div className="break"></div>
            {complexMas._houses.map(house=>
                <HouseBlock key={house.id} house={house}/>
            )}
        </div>
    )
})

export default Examples