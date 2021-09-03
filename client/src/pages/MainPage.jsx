import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import Examples from '../components/Examples'
import { fetchHouses } from '../http/complexAPI'
import adv1 from '../images/advantage1.jpg'
import adv2 from '../images/advantage2.jpg'
import adv3 from '../images/advantage3.jpg'
import adv4 from '../images/advantage4.jpg'
import Header from '../components/Header'
/*
class  extends React.Component
{
    render(){
        return(

        );
    }
}
*/
class MainColumn extends React.Component
{
    render() 
    {
        return (
            <div className="MainColumn">
                {this.props.children}
            </div>
        );
    }
}
class Page extends React.Component
{
    render(){
        return(
            <div className="Page">
                <Header/>
                {this.props.top}
                <MainColumn>
                   {this.props.column}
                </MainColumn>
            </div>
        );
    }
}
class Info extends React.Component
{
    render(){
        return(
            <div className="Info">
                <div id="InfoPhoto"/>
                <div>
                    <h1>О компании</h1>
                    <p>Застройщик "" уже более 10 лет возводит жилые
                    здания по всей территории города Саратова.</p>
                    <p>Мы предлагаем большой ассортимент разнообразных 
                    квартир, среди которых вы найдёте свой новый дом.</p>
                </div>
            </div>
        );
    }
}
class Advantages extends React.Component
{
    render(){
        return(
            <div className="Advantages">
                <h1>Наши преимущества</h1>
                <div className="AdvantageBlock">
                    <img src={adv1} height="64" width="64" />
                    <h1>10 лет на рынке строительства</h1>
                    <p>Мы постоили 8 домов и 564 квартир</p>
                </div>
                <div className="AdvantageBlock">
                    <img src={adv3} height="64" width="64"/>
                    <h1>Надежный застройщик</h1>
                    <p>Все объекты сданы в срок</p>
                </div>
                <div className="AdvantageBlock">
                    <img src={adv2} height="64" width="64"/>
                    <h1>Большой <br/>выбор</h1>
                    <p>Работаем во всех районах</p>
                </div>
                <div className="AdvantageBlock">
                    <img src={adv4} height="64" width="64"/>
                    <h1>Есть квартиры с отделкой</h1>
                    <p>Качественный ремонт от застройщика</p>
                </div>
            </div>
        );
    }
}
const MainPage = observer(()=>{
    const {complexMas}=useContext(Context)

    useEffect(()=>{
        fetchHouses().then(data=>complexMas.setHouses(data))
    },[])

        return (
            <Page 
            top={
                <div className="TopPhotoDiv">
                    <br/><br/><br/><br/>
                    <h1>Купите квартиру в новостройке в Саратове</h1>
                    <br/><br/><br/><br/>
                </div>
            }
            column={
                <div>
                    <Info/>
                    <Advantages/>
                    <Examples/>
                    <div className="Footer">

                    </div>
                </div>
            } />
        );
})

export default MainPage