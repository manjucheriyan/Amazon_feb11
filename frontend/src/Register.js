
import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import amazon_logo from './images/amazon_logo.png';
import Navbar from './Navbar';

const RegisterSchema=Yup.object().shape({
    yourName:Yup.string()
            .required('Required'),
    password:Yup.string() 
                .required('Required'),
    mobileNo:Yup.string()
            .required('Required'),
    email:Yup.string()
            .required('Required'),
})
class Register extends React.Component {
  
    onSubmit =(values)=>{
            let Name=values.yourName;
           
            let password=values.password; 
              
            let mobileNo=values.mobileNo;
            let email=values.email;

            
alert(Name+password+mobileNo+email)
            
FrontEndController.registration(Name,password,mobileNo,email)
            .then(response=>{
                swal("Registration success",response.data.message,"success")
                this.props.history.push("/userHome");
            })
            .catch(error=>{
                console.log(error)
                swal("Registration Failed","u provided invalid message","error");
            })}



    render() {
        return (
<div className="container">
<Navbar name={""} productCountInCart ={""}/>
<img className="header__logo" src={amazon_logo} alt=""/>
<div className="row">
<div className="col-4"> </div>
<div className="col-4"></div>
</div>
<div className="row">
<div className="col-4"></div>
<div className="col-5">


<Formik
initialValues={{
yourName:"",
mobileNo:"",
password:"",
email:""

}}
validationSchema={RegisterSchema}
onSubmit={this.onSubmit}
>

{({errors,touched})=>(
<Form>
<div className="jumbotron" >
<div className="heading-createAccount"><span><h4>Create Account</h4></span></div>

<div className="form-group">
    <div><small><b><span>Your name</span></b></small></div>
   <div>
   <Field name="yourName" type="text"/>
    {errors.yourName?<div>{errors.yourName}</div>:null}
   </div>
</div>

<div className="form-group">
<div><small><label for="">Mobile No</label></small></div>
<Field name="mobileNo" type="Number" />
{errors.password?<div>{errors.password}</div>:null}
</div>

<div className="form-group">
<div><small><label for="">Email(optional)</label></small></div>
<Field name="email" type="email" />
{errors.email?<div>{errors.email}</div>:null}
</div>

<div className="form-group">
<div><small><label for="">Password</label></small></div>
<Field name="password" type="password" />
{errors.password?<div>{errors.password}</div>:null}
</div>


<small><span>We will send you a text to verify your phone.
Message and Data rates may apply.</span></small>

<div className="form-group">
<button type="submit" className="btn btn-success">Continue</button>
</div>
</div>
</Form>
)}
</Formik>

<div className="col-4"></div>
</div></div>
</div>

);
}
}export default withRouter(Register) ;