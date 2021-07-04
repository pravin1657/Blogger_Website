import React from 'react';

class Signup extends React.Component{
    render(){
        return(
            <div className="container mt-4">
                <div className="">
                    <div className="">
                    <div className="card card1 text-center m-4">
                    
                    <div className="card-body">
                        <h2 className="card-title">Signup</h2>
                        <form>
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="name"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="email"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="country"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="password2" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="password2"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="password1" className="col-sm-2 col-form-label">Retype Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="password1"/>
                            </div>
                            <div className="m-2">
                            <input type="checkbox" id="check2" name="check1" value="check2"/>
                            &nbsp;
                        <label htmlFor="check2"> I Agree</label>
                            </div>
                        </div>
                        <button  type="submit" className="btn btn-primary ">Signup</button>
                        </form>
                         </div>
                    
                    </div>
                    </div>
                    

                </div>
               
            </div>
        );
    }
}

export default Signup;