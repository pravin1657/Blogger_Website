import React from 'react';
import {Link} from 'react-router-dom';
class Icons extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="homeicons">
                    <h3>
                        <Link to="/Newpost" style={{color: 'black'}} className="bi bi-pencil-square m-2"> 
                            
                        </Link>
                <Link  to="/Saved" style={{color: 'black'}} className="bi bi-bookmark m-2"></Link>
                    </h3>
                </div>
                
            </div>
        );
    }
}
export default Icons;