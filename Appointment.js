// controller appointment
import  mongoose  from 'mongoose'
import  RendModel from '../models/RendModel.js'
 
 
 export const getRendVous= async(req,res)=>{
     console.log(req)
  try {
     const rendModel = await RendModel.find()
     console.log(rendModel)
     res.status(200).json(rendModel)
  } catch (error) {
      res.status(404).json({message:error.message})
  }
}

 //methode post 
export const CreatePost= async(req,res)=>{
const post=req.body
const newpost = new RendModel(post)

try {
    await newpost.save()
    res.status(201).json(newpost);
} catch (error) {
    res.status(400).json({message:error.message})
}
}

// //methodes update 
 export const UpdateAppoint=async(req,res)=>{
    const {id:_id}=req.params
    const apointUpdate= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post found whith id')
      
            try {
                const updateApoint= await RendModel.findByIdAndUpdate(_id,
                   { ... apointUpdate,_id} ,{new:true})
                   res.status(200).json(updateApoint)
            } catch (error) {
                res.status(500).json(error)
            }
        }


// methodes delete
 export const deleteApoint=async(req,res)=>{
    const {id:_id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
 return res.status(404).json(' appoint not found')
 try {
  await RendModel.findByIdAndRemove(_id)
  res.json({message:'deleted succeffuly'})
 } catch (error) {
   res.status(400).json({error:error.message})
 }
    
}
