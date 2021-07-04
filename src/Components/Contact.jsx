import React from 'react';
const Contact = () => {
    return ( 
        <div className="container mt-4">
        <div className="">
            <div className="">
            <div className="card card1 text-center m-4">
            
            <div className="card-body">
                <h2 className="card-title">Contact Us</h2>
                <form>
                <div className="row mb-3">
                    <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                           <input type="text" className="form-control" id="mail"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Comments" className="col-sm-2 col-form-label">Comments</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="Comments" rows="3"></textarea>
                    </div>
                    
                    </div>
                    
                    
                
             
                <button  type="submit" className="btn btn-primary ">Send Us</button>
               
                </form>
                 </div>
            
            </div>
            </div>
            

        </div>
       
    </div>
     );
}
 
export default Contact;