// axios
import axios from 'axios'
 const API= axios.create({baseURL:'http://localhost:5000'})
//const url= 'http://localhost:5000/app'
export const fecthAppoint=()=> API.get('/app/')
export const createAppoint=(newAppoint)=> API.post('/app/appoint',newAppoint)
export const updateappoint=(id,updatedAppoint) => API.patch(`/app/update/${id}`,updatedAppoint)
export const deleteAppoint=(id)=>API.delete(`/app/${id}`)
export const getAllConsult=()=>API.get('/app/consultation')
export const createConsult=(newCosult)=> API.post('/app/consultation',newCosult)
export const updateConsult=(id,updatedConsult) => API.patch(`/app/consultation/${id}`,updatedConsult)
export const deleteConsult=(id)=>API.delete(`/app/${id}`)
export const getOrdonance=()=>API.get('/app/ordonance' )
export const createOrdonance=(newOrd)=>API.post('/app/ordonance',newOrd)
export const updateOrd=(id,updateOrd)=>API.patch(`/app/ordonace/${id}`,updateOrd)
export const deleteOrd=(id)=>API.delete(`/app/ordonance/${id}`)

export const getAccouch=()=>API.get('/app/accouchement')
export const createAccouch=(newAccouch)=>API.post('/app/accouchement',newAccouch)
export const updateAccouch=(id,updateAccouch)=>API.patch(`/app/modifier/${id}`,updateAccouch)
export const deleteAccouch=(id)=>API.delete(`/app/accouchement/${id}`)
export const signIn=(formData)=>API.post('/app/signin',formData)
export const signUp =(formData)=>API.post('/app/signup',formData)
