import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import serverUrl from '../env.js'
import {useHistory} from "react-router-dom"

const HouseBlock=({house})=>{
    const history=useHistory()
    return(
        <div className="HouseBlock">
            <img src={serverUrl+house.image} height="200" width="310"/>
            <h1 onClick={() => history.push('Houses/' + house.id)}>{house.name}</h1>
            <p>Квартиры от {house.startPrice} млн. рублей</p>
        </div>
    )
}

export default HouseBlock