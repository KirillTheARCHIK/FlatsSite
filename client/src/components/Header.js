import React from 'react'

export default class Header extends React.Component
{
    render()
    {
        return(
            <div className="Header">
                <div className="NavBlock">
                    <ul className="NavUl">
                        <li> <a href="/"><img src="" id="logo" /></a> </li>
                        <li> <a href="/Catalog">Квартиры</a> </li>
                        <li> <a href="">Каталог отделок</a> </li>
                        <li className="BuyLink"> <a href="">Консультация</a> </li>
                    </ul>
                </div>
            </div>
        );
    }
}