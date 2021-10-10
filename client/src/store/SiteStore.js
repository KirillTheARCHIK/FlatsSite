import {makeAutoObservable} from 'mobx'

export default class SiteStore{
    constructor(){
        this._complexes=[]
        this._houses=[
            //{complexId: 1, name: 'Дом 4', startprice: '2', image: 'BulgakDom4.jpg'},
            //{complexId: 1, name: 'Дом 8', startprice: '3', image: 'afdb44bd-efbc-4634-9faf-ccb9a7ab4851.jpg'},
            //{complexId: 2, name: 'Дом 12', startprice: '1,8', image: 'LetoDom12.jpg'}
        ]
        makeAutoObservable(this)
    }
    setComplexes(complexes){
        this._complexes=complexes
    }
    setHouses(houses){
        this._houses=houses
    }
    getComplexes(){
        return this._complexes
    }
    getHouses(){
        return this._houses
    }
}