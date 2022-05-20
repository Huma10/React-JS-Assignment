import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import the createSalaMiddleware so that the current app can use it
import createSagaMiddleware from 'redux-saga';
// Importing Bootstrap css
import  './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore,compose, applyMiddleware } from "redux";
import reducers from './components/reduxapps/reducers/reducers';

//import reducers from './components/assignment05May/reducers/reducer';
import rootSaga from './components/assignment05May/sagas/sagas';

import App from './App';
import DepartmentComponent from './components/departmentcomponents/departmentcomponent';
import reportWebVitals from './reportWebVitals';
import CheckBoXComponent from './components/departmentcomponents/assignment22april(2)component';
import CalculatorComponent from './components/departmentcomponents/asssignment22april(1)component';
import EmployeeComponent from './components/employeecomponents/employeeformcomponent';
import EmployeeContexctProviderComponent from './components/usingcontextassign26thApril/employeecontextcomponent';
import EmployeeAjaxComponent from './components/assignment28april/employeeajaxcomponent';
import DepartmentAjaxComponent from './components/assignment28april/departmentajaxcomponent';
import SecuredRestComponent from './components/assignment28april/securedrestapicomponent';
import UseCustomHookReducerComponent from './components/customhookuserreducer/usecustomhookreducercomponent';
import UseCustomHookComponent from './components/assignment29thapril/useremoteoperationcomponent';
import ErrorBoundaryComponent from './components/assignment28april/ErrorBoundary';
import ContainerComponentWithErrorBoundary from './components/assignment28april/ErroBoundaryComponent';
import ImageUploadComponent from './components/assignment29thapril/imageupload';
import {BrowserRouter} from 'react-router-dom';
import MainRouterComponent from './components/assignment02may/mainroutercomponent';
import MainReduxComponent from './components/reduxapps/mainreduxcomponent';
import MainReduxSAGAomponent from './components/sagaapps/mainsagacomponent';
import MainReduxSAGAomponent2 from './components/assignment05May/maincomponentssagas';
import DepartmentTestComponent from './componentfortest/departmenttestcomponent';
import DepartmentValidationTestComponent from './componentfortest/departmentvalidationtestcomponent';
import OrderComponent from './components/assignment13May/ordercomponent';
const enhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// create a Saga Middleware Object
// Initialization the Middleware for the current store and hence the application
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, enhancer);
console.log(`Store is ${JSON.stringify(store)}`);
// keep the SAGA Middleware running at application level
//sagaMiddleware.run(rootSaga); 

//let store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DepartmentComponent/> */}
    {/* <CheckBoXComponent/> */}
    {/* <CalculatorComponent/> */}
    {/* <EmployeeComponent/> */}
    {/* <EmployeeContexctProviderComponent/> */}
    {/* <EmployeeAjaxComponent/> */}
    {/* <ErrorBoundaryComponent>
    <DepartmentAjaxComponent/>
    </ErrorBoundaryComponent> */}
    {/* <SecuredRestComponent/> */}
    {/* <UseCustomHookReducerComponent/> */}
    {/* <UseCustomHookComponent/> */}
    {/* <ContainerComponentWithErrorBoundary/> */}
    {/* <ImageUploadComponent/> */}
    {/* <BrowserRouter>
      <MainRouterComponent></MainRouterComponent>
    </BrowserRouter> */}
    {/* <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
    </Provider> */}
    {/* <Provider store={store}>
      <MainReduxSAGAomponent2></MainReduxSAGAomponent2>
    </Provider> */}
    {/* <DepartmentTestComponent/> */}
    {/* <DepartmentValidationTestComponent/> */}
    <OrderComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
