import React from 'react';

class Profile extends React.Component{
    
    render(){
        return(
        <div>
            <div className="container a1 border mt-4 p-2"> 
                <div className="row">
                <span className="col-1"><h1><i className="bi bi-person-circle"></i></h1></span>
                    <span className="col text-left name">John Wick</span>
                    <span className="text-muted time">at 2:00am</span>
                    <span className="text-muted location">(india)</span>
                        <span className="dropdown three-dots ">
                        <span  data-bs-toggle="dropdown" >
                        <i className="bi bi-three-dots"></i>
                        </span>
                        <ul className="dropdown-menu dropdown-menu-dark " >
                            <li className="dropdown-item" >Edit</li>
                            <li className="dropdown-item" >Share</li>
                            <li className="dropdown-item" >Report</li>
                        </ul>
                        </span>
                </div>
                     <div className="container">
                         <h6 className="mt-1">This is the title</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minus aspernatur facere itaque soluta possimus alias sed 
                    repellat, similique fugit placeat cumque ut rerum magnam 
                    necessitatibus ipsa cupiditate blanditiis, fuga 
                    exercitationem.
                    </div>
                    <div className="container icons1 mt-2 ">
                    <i className="bi bi-heart m-2"></i>
                    <span className="" data-bs-toggle="collapse" href="#collapseExample" >
                <i className="bi bi-chat m-2"></i>
                </span>
               
                <span className="fix-position">
                    <i className="bi bi-cursor m-2"></i>
                 <i className="bi bi-bookmark m-2"></i>
                </span>
                <div className="collapse mt-2" id="collapseExample">
                <div className="card card-body">
               <div className="row">
                   <div className="col-8"> <div className="input-group">
                <input type="text" className="form-control" placeholder="Add Comment" />
                <span className="input-group-text  btn btn-sm btn-primary" id="basic-addon2">Post</span>
                </div></div>
               </div>
                </div>
                </div>
                
            
                    </div>
            </div>
            </div>
            
        );
    }
}

export default Profile;