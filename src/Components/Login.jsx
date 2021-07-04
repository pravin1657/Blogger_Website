import React from 'react';
import {Link} from 'react-router-dom';
class Login extends React.Component{
    render(){
        return(
            <div className="container mt-4">
                <div className="">
                    <div className="">
                    <div className="card card1 text-center m-4">
                    
                    <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <form>
                        <div className="row mb-3">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                   <input type="text" className="form-control" id="username"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="password"/>
                            </div>
                            <div className="m-2">
                            <input type="checkbox" id="check" name="check1" value="check2"/>
                            &nbsp;
                        <label htmlFor="check"> Keep me logged in</label>
                            </div>
                            
                        
                        </div>
                     
                            <div className="row">
                                <div className="col-4">
                                    
                                </div>
                                <div className="col-4">
                                <button  type="submit" className="btn btn-primary ">Login</button>
                                </div>
                                <Link  to="/Signup" className="col-4 signup">Signup?</Link>
                            </div>
                       
                        </form>
                         </div>
                    
                    </div>
                    </div>
                    

                </div>
               
            </div>
        );
    }
}

export default Login;