import React,{useState} from 'react'
import {Typography,Box,Grid,TextField,Button} from '@mui/material'
import { deepPurple} from '@mui/material/colors'
import List from '../student/List'
import axios from 'axios'



// const useStyles=makeStyles({
//     headingColor:{
//         backgroundColor:deepPurple[400],
//         color:"white"
//     }

// })

const Home = () => {
//     const classes = useStyles();
const[student,setStudent]=useState({
    roll:" ",
    name:' ',
    city:" ",
});
const[status,setStatus]=useState()

function onTextFieldChange(e){
    setStudent({
        ...student,
        [e.target.name]:e.target.value

    });

}
async function onFormSubmit (e){
    e.preventDefault();
    try{
        await axios.post(` http://localhost:3333/students`,student)
        // await axios.post(` http://127.0.0.1:8000/studentapi/`,student)
        // console.log(students.data)
        setStatus(true);
    }catch(error){
    console.log("something went teribaly wrong")
}

}
if (status){
    return <Home/>
}

  return (
    <>
    <Box textAlign="center"    backgroundColor={deepPurple[400]} color="white">
        <Typography variant='h2'>React CRUD with API CALL</Typography>
    </Box>
    <Grid container  my={2}>
        <Grid item md={6} xs={12}>
            <Box textAlign='center' p={2} mb={2} backgroundColor="green" color="white">
                <Typography variant='h4'>Add Student</Typography>
            </Box>
            < form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField autoComplete='roll' name='roll'  required fullWidth id='roll' label='Roll' onChange={e=>onTextFieldChange(e)} autoFocus/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField autoComplete='name' name='name'  required fullWidth id='name' label='Name'  onChange={e=>onTextFieldChange(e)} autoFocus/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField autoComplete='city' name='city'  required fullWidth id='city' label='City' onChange={e=>onTextFieldChange(e)} autoFocus/>
                    </Grid>
                    <Box m={3}>
                        <Button type="submit" variant='contained' color='primary' onClick={e=>onFormSubmit(e)}>Add</Button>
                    </Box>
                </Grid>
            </form>



        </Grid>
        <Grid item md={6} xs={12}>
            <List/>
        

        </Grid>


    </Grid>
    </>
  )
}

export default Home