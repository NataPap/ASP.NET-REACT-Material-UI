import './App.css';
import GetEmployees from './components/getEmployees/getEmployees';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddEmployee from './components/addEmployee/addEmploee';
import UpdateEmployee from './components/updateEmployee/updateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetEmployees}/>
          <Route exact path="/add-employee" component={AddEmployee}/>
          <Route exact path="/update-employee/:id" component={UpdateEmployee}/>
          <Route path="*" children={()=> <h1>404 Page Not Found</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
