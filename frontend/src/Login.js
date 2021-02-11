import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import Navbar from './Navbar';
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import amazon_logo from './images/amazon_logo.png';
import {Link} from "react-router-dom"


const LoginSchema=Yup.object().shape({
    email:Yup.string()
            
            .required('Required'),
    
})
class Login extends React.Component {
  register=()=>{
    this.props.history.push("/register");
  }
    onSubmit =(values)=>{           
            let email=values.email;            
            FrontEndController.login(email)
            .then(response=>{
                //let name = response.data.record.Name
                //alert(name)
                swal("login success",response.data.message,"success")
                this.props.history.push({
                pathname:"/userHome",
                userObj:response.data.record,
                });
            })
            .catch(error=>{
                console.log(error)
                swal("login failed","u provided invalid message","error");
            })}



    render() {
return (
    <div>
    <Navbar name={""} productCountInCart ={""}/>
<div className="container">
<img className="header__logo" src={amazon_logo} alt="amazon logo"/>

<div className="row">
<div className="col-4"></div>
<div className="col-4">

<Formik
initialValues={{
    email:""
    
}}
validationSchema={LoginSchema}
onSubmit={this.onSubmit}
>
{({errors,touched})=>(
<Form>
<div className="jumbotron" >
<h3>Sign-In</h3>
<div className="form-group">
    <label for="exampleInputPassword1"><span className="header__optionLineTwo">Email or mobile phone number</span>
    </label>
    <Field name="email" />{errors.email?<div>{errors.email}</div>:null}
</div>
<div className="form-group">
    <button type="submit" className="btn btn-primary">Continue</button>
</div>

<small id="emailHelp" class="form-text text-muted">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
<div className="needHelp__link">
    <Link to='' >Need Help?</Link>
</div>
</div>

</Form>
)}
</Formik>
<small id="" class="form-text text-muted">-------------------New to Amazon-------------</small>
<div className="form-group">



    <button type="submit" id="button-register" className="btn btn-primary" onClick={this.register}>Create Your Amazon Account</button>
</div>
<div className="col-4"></div>
</div>
</div>
</div>  
</div>          
);
    }
}

export default withRouter(Login) ;