import React, { Fragment } from "react";
import {getEmployees, deleteEmployee} from '../../services/employeesService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import './getEmployees.css';



class GetEmployees extends React.Component {
    constructor() {
        super();

        this.state={
            employees:[]
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

getEmployees=()=>{
    getEmployees().then(employees=>{
        if(employees!=null) {
            this.setState({
                employees: employees
            });
        }
    })
}

deleteEmployee=(id)=> {
    deleteEmployee(id).then(res=>{
        if(res.status===200){
            getEmployees().then(employees=>{
                if(employees!=null) {
                    this.setState({
                        employees: employees
                    });
                }
                
            })
        }
    })
        
}

    render(){
        return(
            <div>
            <Grid item xs={12} md={12}>
            <Link to="/add-employee">
                 <Button color="secondary">Create new employee</Button>
            </Link>
                <List>
                    {this.state.employees.map(employee =>
                    <div>
                    <ListItem
                    secondaryAction={
                        
                        <Fragment >
                            <Link to={`/update-employee/${employee.id}`}> 
                        <IconButton edge="end">
                                <EditIcon />
                            </IconButton>
                            </Link>
                            <IconButton edge="end" aria-label="delete" onClick={()=> this.deleteEmployee(employee.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Fragment>
                        }
                        >
                        <ListItemAvatar>
                            <Avatar src={employee.image}>
                            </Avatar>
                        </ListItemAvatar>
                        <div class="divform">
                        <a>Full name:</a>
                        <ListItemText
                            primary={employee.fullName}
                            />
                            </div>
                            <div class="divform">
                        <a>Date of birth:</a>
                            <ListItemText
                            primary={employee.dateOfBirth}
                            />
                            </div>
                            <div class="divform">
                        <a>Age:</a>
                            <ListItemText
                            primary={employee.age}
                            />
                            </div>
                            <div class="divform">
                        <a>Department:</a>
                        <ListItemText
                               primary={employee.department.name}
                               />
                               </div>
                    </ListItem>
                    <Divider/>
                    </div>
                            )}
                </List>
            </Grid>
        </div>
        );
    }
}
 

export default GetEmployees;