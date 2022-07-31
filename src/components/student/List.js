import React,{useState,useEffect} from 'react'

import {Typography,Box,TableContainer,Table,TableBody,TableCell,TableHead,TableRow,Paper,IconButton,Tooltip} from '@mui/material'
// import { deepPurple,green,orange } from '@mui/material/colors'
// import Visibility from '@mui/material/'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {Link} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";



const List = () => {
    const [students,setStudents]=useState([])
    useEffect(()=>{

        getAllStudent ()

    },[])

    async function getAllStudent (){
        try{
            const students = await axios.get(" http://localhost:3333/students")
            // const students = await axios.get("http://127.0.0.1:8000/studentapi/")
            // console.log(students.data)
            setStudents(students.data)
        }catch(error){
        console.log("something went teribaly wrong")
    }

    }
    const handleDelete= async id=>{
        await axios.delete( `http://localhost:3333/students/${id}`);
        // await axios.delete( `http://127.0.0.1:8000/studentapi/${id}`);
        var newstudent= students.filter((item)=>{
            return item.id !==id;
        })
        setStudents(newstudent);
    }
    
  return (
    <>
    <Box textAlign="center" p={2}  backgroundColor='orange' color='white'>
        <Typography variant='h4'> Student List</Typography>
        </Box>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor:"#EE82EE"}}>
                        <TableCell align="center"  color='white' fontWeight='bold' fontSize='16'>NO</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16' >Roll</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>Name</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>City</TableCell>
                        <TableCell align="center" color='white' fontWeight='bold' fontSize='16'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                      students.map((student,i) =>{
                        return(
                            <TableRow key={i}>
                        <TableCell align="center">{i+1}</TableCell>
                        <TableCell align="center">{student.roll}</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.city}</TableCell>
                        <TableCell align="center">
                            <Tooltip title="View">
                             <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary"/></Link></IconButton></Tooltip>
                             <Tooltip title="Edit">
                             <IconButton><Link to={`/edit/${student.id}`}><EditIcon/></Link></IconButton></Tooltip>
                             <Tooltip title="Delete">
                             <IconButton onClick={()=>handleDelete(student.id)}><DeleteIcon /></IconButton></Tooltip> 
                        </TableCell>
                    </TableRow>

                        )

                      } ) 
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>

    
    
    </>
  )
}

export default List









