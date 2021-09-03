import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import serverUrl from '../env.js'
import HouseBlock from './HouseBlock'

const ComplexBlock=({complex, houses})=>{
    const bgpath=serverUrl+complex.image
    return(
        <div className="ComplexBlock">
            <div className="ComplexInfo" style={{backgroundImage:'url("'+bgpath+'")'}}>
                <p style={{flexGrow: '15'}}></p>
                <h1 style={{
                    width: '50%',
                    position: 'relative',
                    fontSize: '60px',
                    left: '20%',
                    flexGrow: '0',
                }}>{complex.name}</h1>
                <p className="ComplexAddress" style={{
                    textTransform: 'uppercase',
                    left: '20%',
                    fontWeight: '550',
                    flexGrow: '1'
                }}> {complex.city} {complex.address}        {complex.district} район</p>
            </div>
            <h1>Дома комплекса {complex.name}:</h1>
            <div className="ComplexHousesList">

                {houses.map(house=>
                    <HouseBlock key={house.id} house={house}/>
                )}
            </div>

        </div>
    )
}

export default ComplexBlock