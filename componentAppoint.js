//appointment.js
import React , {useEffect ,useState } from 'react'
import { Button, Container, makeStyles, TextField ,Paper,Toolbar,InputAdornment} from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useDispatch,useSelector } from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
//import {createAppoint} from '../../actions/AppointAction'
import { createAppointApi} from '../../features/AppointSlice'
import ListAppoinTable from './ListAppoinTable'
 //import { getAppoint } from '../../actions/AppointAction'
import Popup from './Popup'
 //import { useSelector } from 'react-redux';




const useStyles= makeStyles(theme=>({
  root:{
    padding: theme.spacing(2)
  },
  title:{
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    color:" blue"
  },
  text:{
    margin: "0.5px 8px ",
    padding:"5px 8px ",
    width:"250px",
    height:"100px",
   fontWidth:"250px"
  
  }
  }))


 const appointState={
     description:"",
     date: new Date(),
     tel:"",
     prenom:"",
     age:Number,
     sex:"",


 }
function Appointment() {
 
  //const appSelector = useSelector((state)=>state.appointment)
  //console.log(appSelector) 
  const {appoints,loading}=  useSelector((state)=>({...state.appoint}))
  console.log(appoints)
  const [openPopup,setOpenPopup]= useState(false)
  const [appoint,setAppoint]= useState(appointState);
  const dispatch=useDispatch();
  const handleCreatePost=(e)=>{
    e.preventDefault() 
    dispatch(createAppointApi(appoint))
  }
   
  const appointClick =e=>{
    const {name,value}=e.target;
    setAppoint({...appoint,
      [name]:value 
    })
  };
  
    const getHireDate=(obj,value)=>({
        target:{
           obj, value
        }
            })
           
            const classes=useStyles();
  return (
    <div>
      <Container>
      <Paper>
      <Toolbar>
  <TextField
  label="Chercher Liste Rendez-vous"
  variant="standard"
  className={classes.searchInput}
  InputProps={{startAdornment:(<InputAdornment position = "start"><searchInput placeholder="chercher"/></InputAdornment>
  )}}
  
  />
  <Button
  label='Add New List'
  className={classes.newButton}
  variant="outlined"
  // startIcon={<AddIcon/>}
  onClick={ ()=>setOpenPopup(true)}
 
  > All  List</Button>
  </Toolbar>
    <form autoComplete='false' noValidate className='' onSubmit={handleCreatePost}>
      <TextField className={classes.text}
        label="Prenom"
        name="prenom"
        value={appoint.prenom}
        onChange={appointClick}
        />
        <TextField className={classes.text}
        label="Sex"
        name="sex"
        value={appoint.sex}
        onChange={appointClick}
        />
        <TextField className={classes.text}
        label="Description"
        name="description"
        value={appoint.description}
        onChange={appointClick}
        />
        <TextField className={classes.text}
        label="Tel"
        name="tel"
        value={appoint.tel}
        onChange={appointClick}
        />
        <TextField className={classes.text}
        label="Age"
        name="age"
        value={appoint.age}
        onChange={appointClick}
        />
     < MuiPickersUtilsProvider utils={DateFnsUtils}>
   <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined" 
   label="Date"
   format="MMM/dd/yyyy"
   name="date"
   value={appoint.date}
   onChange={((obj,date)=>getHireDate(obj,date))}
   />
   </MuiPickersUtilsProvider>
   <Button variant='contained' color='prymary' size='large' type='submit'>Ajouter</Button>
   </form>
   </Paper>
      </Container>
      <Container>
      <Paper>
      <Popup open={openPopup}
      setOpenPopup={setOpenPopup}>
      <ListAppoinTable />
      </Popup>
      </Paper>
      </Container>
    </div>
  )
}

export default Appointment
