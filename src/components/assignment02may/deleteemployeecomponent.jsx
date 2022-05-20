import react,{useState, Fragment, useEffect} from 'react'; 
// import hooks to read the parameters from the Route Link and navigate after saving the data
import {useParams, useNavigate} from 'react-router-dom';

import EmployeeService from '../../services/employeeservices'
// import the select component
import SelectComponent from './../resuablecomponents/selectcomponent';

const DeleteEmployeeComponent=(props)=>{
    let [employee, setEmployee] = useState({empno:0, empname:'', designation:'',salary:0,deptno:0});
   
    const serv = new EmployeeService();
    const [message, setMessage] = useState("");

    // define navigate and params object
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.empno);

    // use useEffect() to load the department data for edit purpose  
    useEffect(()=>{
        async function loadData(){
            try {
                let response = await serv.getDataById(id);
                setEmployee(response.data.data);

            }catch(ex){
                setMessage(`Error Occurred in Loading data ${ex.message}`);
            }
        }
        loadData();
    },[]);

    const deleteData= async ()=>{
         try {
            let response = await serv.deleteData(id);
            setMessage('Delete is Successful');
            // navigate to root
            navigate("/employeelist");
         }catch(ex){
             setMessage(ex.message);
         }    
    };
    const clear=()=>{
        // reset department properties
        setEmployee({empno:0, empname:'', designation:'',salary:0,deptno:0});
    }

    return(
        <Fragment>
            <h1>{props.message} Employee</h1>
            <div className='form-group'>
                <label>EmpNo</label>
                <input type="text" value={employee.empno} onChange={(evt)=>setEmployee({...employee, empno:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>EmpName</label>
                <input type="text" value={employee.empname} onChange={(evt)=>setEmployee({...employee, empname:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Designation</label>
                <input type="text" value={employee.designation} onChange={(evt)=>setEmployee({...employee, designation:evt.target.value})} className="form-control"/>
                 
            </div>
            <div className='form-group'>
                <label>Salary</label>
                
                <input type="text" value={employee.salary} onChange={(evt)=>setEmployee({...employee, salary:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>DeptNo</label>
                
                <input type="text" value={employee.deptno} onChange={(evt)=>setEmployee({...employee, deptno:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                {/* <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/> */}
                <input type="button" className='btn btn-success' value="Delete" onClick={deleteData}/>
            </div>
          
           
           
        </Fragment>
    );
}
export default DeleteEmployeeComponent;