import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getSingleEmployee, updateEmployee } from "../../services/employeesService";


class UpdateEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            fullName: '',
            dateOfBirth: '',
            image: '',
            age: 0
        };
    }

    componentDidMount() {
        getSingleEmployee(this.state.id).then(employee=>{
            if(employee){
                this.setState({
                    fullName: employee.fullName,
                    dateOfBirth: employee.dateOfBirth,
                    image: employee.image,
                    age: employee.age
                });
            }
        })
    }
    updateEmployee=()=> {
        const employee={
            id:parseInt(this.state.id),
            fullName: this.state.fullName,
            dateOfBirth: this.state.dateOfBirth,
            image: this.state.image,
            age: parseInt(this.state.age)
        };
    
        updateEmployee(employee).then(res=>{
            if(res.status===200){
                this.props.history.push('/');
            }
        })
    }

    render() {
        return(
            <div>
            <Link to="/"><Button color="secondary">Back to employee's list</Button></Link>
            <div>
                <div className="text-input">
                    <TextField label="FullName" variant="outlined" sx={{width: '25%'}} value={this.state.fullName} onChange={(event)=>this.setState({fullName: event.target.value})}/>
                </div>
                <div className="text-input">
                    <TextField label="DateOfBirth" variant="outlined" sx={{width: '25%'}} value={this.state.dateOfBirth} onChange={(event)=>this.setState({dateOfBirth: event.target.value})}/>
                </div>
                <div className="text-input">
                    <TextField label="Image" variant="outlined" sx={{width: '25%'}} value={this.state.image} onChange={(event)=>this.setState({image: event.target.value})}/>
                </div>
                <div className="text-input">
                    <TextField label="Age" variant="outlined" sx={{width: '25%'}} value={this.state.age} onChange={(event)=>this.setState({age: event.target.value})}/>
                </div>
                <div className="text-input">
                    <Button variant="contained" sx={{width: '25%'}} onClick={this.updateEmployee}>Update employee</Button>
                </div>
            </div>
        </div>
        );
    }
}




export default UpdateEmployee;