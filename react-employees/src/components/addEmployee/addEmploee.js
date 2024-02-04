import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addEmployee.css';
import {useState} from 'react';
import {addEmployee} from '../../services/employeesService';
import {useHistory} from 'react-router-dom';

function AddEmployee (props){
    const[fullName, setFullName]=useState('');
    const[dateOfBirth, setDateOfBirth]=useState('');
    const[image, setImage]=useState('');
    const[age, setAge]=useState('');
    const history =useHistory();

    const createEmployee=()=>{
    const employee={
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        image: image,
        age: parseInt(age)
    };

    addEmployee(employee).then(res=>{
        if(res.status===200){
            history.push('/');
        }
    })
}

    return(
        <div>
            <Link to="/"><Button color="secondary">Back to employee's list</Button></Link>
            <div>
                <div className="text-input">
                    <TextField label="FullName" variant="outlined" sx={{width: '25%'}} onChange={(event)=>setFullName(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="DateOfBirth" variant="outlined" sx={{width: '25%'}} onChange={(event)=>setDateOfBirth(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="Image" variant="outlined" sx={{width: '25%'}} onChange={(event)=>setImage(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="Age" variant="outlined" sx={{width: '25%'}} onChange={(event)=>setAge(event.target.value)}/>
                </div>
                <div className="text-input">
                    <Button variant="contained" sx={{width: '25%'}} onClick={createEmployee}>Add new employee</Button>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;