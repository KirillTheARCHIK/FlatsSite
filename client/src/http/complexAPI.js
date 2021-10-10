import {$host} from './index'

export const fetchHouses=async()=>{
    const {data}=await $host.get('api/house')
    return data
}
export const fetchOneHouse=async(id)=>{
    const {data}=await $host.get('api/house', id)
    return data
}
export const fetchComplexes=async()=>{
    const {data}=await $host.get('api/complex')
    return data
}