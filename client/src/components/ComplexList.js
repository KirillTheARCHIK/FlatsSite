import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import { useContext } from 'react'
import HouseBlock from './HouseBlock'
import ComplexBlock from './ComplexBlock'

const ComplexList = observer(()=>{
    const {siteMas} = useContext(Context)
    const ComplexElements=[];

    {siteMas._complexes.map(complex=>{
        let houses=[];
        {siteMas._houses.map(house=>{
            if(house.complexId==complex.id)
            {
                houses.push(house)
            }
        })}
        ComplexElements.push(<ComplexBlock key={complex.id} complex={complex} houses={houses}/>)
    })}

    return(
        <div className="ComplexList">
            <h1 style={{
                width: '50%',
                marginTop: '100px',
                display: 'block',
                position: 'relative',
                fontSize: '50px',
                left: '20%'}}>
            Примеры комплексов:</h1>

            {ComplexElements}
        </div>
    )
})

export default ComplexList

