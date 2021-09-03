import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import HouseBlock from '../components/HouseBlock'
import Header from '../components/Header'
import React, { useContext, useEffect } from 'react'
import { fetchComplexes, fetchHouses } from '../http/complexAPI'
import ComplexList from '../components/ComplexList'

const CatalogPage = observer(()=>{
    const {complexMas}=useContext(Context)

    useEffect(()=>{
        fetchHouses().then(data=>complexMas.setHouses(data))
        fetchComplexes().then(data=>complexMas.setComplexes(data))
    },[])

    return (
        <div>
            <Header/>
            <ComplexList/>
        </div>
    );
})

export default CatalogPage