import create from 'zustand'

const useStore = create(set => ({

    id:'',
    setId:(v)=>set( state=>({ id:v }) ),
    price:'',
    setPrice:(v)=>set( state=>({price:v}) ),
    call:false,
    setCall:(v)=>set( state=>({ call:v }) ),
    error:false,
    setError:(v)=>set( state=>({error:v}) )
  
}))

export {useStore}