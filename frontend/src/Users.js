import React from 'react';
import { withRouter } from 'react-router';
import FrontendController from './FrontEndController';
import swal from 'sweetalert';


class Users extends React.Component{

    state ={
        users:[]
    }


    deleteUser = (username) => {
        FrontendController.deleteUser(username)
            .then(response=>{
                swal("success","Delete successfull","success")
            })
            .catch(err=>{
                swal("User Deletion Failed","U provide invalid data","error")
            })
    }


    componentDidMount(){
        FrontendController.getUsers()
        .then(data=>{
            this.setState({
                users:data.data.users
            });
        });
    }

    render(){
        return (<div className="container">
            <h1>Users</h1>
            <table class="table">
                <tr>
                    <th>Username</th>
                    <th>balance</th>
                    
                </tr>                
                    {
                        this.state.users.map(user=><tr>
                            <td>{user.username}</td>
                            <td>{user.balance}</td>
                            <td onClick={()=>{this.deleteUser(user)}}>Delete</td>
                </tr>)
                    }
                
            </table>
        </div>
        )
    }
    

}
export default withRouter(Users);
