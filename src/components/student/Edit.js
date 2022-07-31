import React,{useState,useEffect} from 'react'
import {Typography,Box,Grid,TextField,Button} from '@mui/material'
import { deepPurple} from '@mui/material/colors'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Edit = () => {
    const{id}=useParams();
    const navigate=useNavigate();
    const[student,setStudent]=useState({
        roll:' ',
        name:'',
        city:' ',
    });
    useEffect(()=>{
        async function getStudent (){
            try{
                const student = await axios.get(` http://localhost:3333/students/${id}`)
                // const student = await axios.get(` http://localhost:3333/students/${id}`)
                // // console.log(students.data)
                setStudent(student.data)
            }catch(error){
            console.log("something went teribaly wrong")
        }
    
        }

        getStudent ()

    },[id])
    function onTextFieldChange(e){
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }

   
    
    async function onFormSubmit (e){
        e.preventDefault()
        try{
            await axios.put(` http://localhost:3333/students/${id}`,student)
            // await axios.put(`http://127.0.0.1:8000/studentapi/${id}`,student)
            navigate("/")
            
        }catch(error){
        console.log("something went teribaly wrong")
    }
    
    }
    function handleClick(){
        navigate("/")
    }
  return (
    <>
    <Box textAlign="center"    backgroundColor={deepPurple[400]} color="white">
        <Typography variant='h2'>React CRUD with API CALL</Typography>
    </Box>
    <Grid container  my={2}>
        <Grid item md={6} xs={12}>
            <Box textAlign='center' p={2} mb={2} backgroundColor="green" color="white">
                <Typography variant='h4'>Edit Student</Typography>
            </Box>
            < form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField autoComplete='roll' name='roll'  required fullWidth id='roll' label='Roll' autoFocus value={student.roll} disabled/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField autoComplete='name' name='name'  required fullWidth id='name' label='Name' value={student.name} onChange={e=>onTextFieldChange(e)}/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField autoComplete='city' name='city'  required fullWidth id='city' label='City' value={student.city} onChange={e=>onTextFieldChange(e)}/>
                    </Grid>
                    
                </Grid>
                <Box m={3}>
                        <Button type="submit" variant='contained' color='primary' fullWidth onClick={e=>onFormSubmit(e)}>Update</Button>
                    </Box>
            </form>
            <Box m={3} textAlign='center'>
                        <Button  variant='contained' color='primary' onClick={handleClick}>back To Home</Button>
                    </Box>



        </Grid>
        


    </Grid>
    </>
  )
}

export default Edit