import React, {useState,useEffect}from 'react'
import {Typography,Box,TableContainer,Table,TableBody,TableCell,TableHead,TableRow,Paper,Button} from '@mui/material'
import { useParams } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const View = () => {
    const{id}=useParams();
    const [student,setStudent]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        async function getStudent (){
            try{
                const student = await axios.get(` http://localhost:3333/students/${id}`)
                // const student = await axios.get(` http://127.0.0.1:8000/studentapi/${id}`)
                // console.log(student.data)
                setStudent(student.data)
            }catch(error){
            console.log("something went teribaly wrong")
        }
    
        }

        getStudent ()

    },[id])

    
    function handleClick(){
        navigate("/")

    }

  return (
    <>
    <Box textAlign="center" p={2}  backgroundColor='orange' color='white'>
        <Typography variant='h4'> Student Detail</Typography>
        </Box>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor:"#616161"}}>
                        <TableCell align="center"  color='white' fontWeight='bold' fontSize='16'>NO</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16' >Roll</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>Name</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>City</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">{student.id}</TableCell>
                        <TableCell align="center">{student.roll}</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.city}</TableCell>
                       
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Box m={3} textAlign='center'><Button variant='contained' color='primary' onClick={handleClick}>Back To Home</Button></Box>

    
    </>
  )
}

export default View