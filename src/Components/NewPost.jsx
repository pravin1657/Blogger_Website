import React from 'react';

class NewPost extends React.Component{
    render(){
        return(
            <div>
            
            <div className="container border mt-2">
            <h2 className="text-center">New Post</h2>
                <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                <label htmlFor="details" className="form-label">Details</label>
                <textarea className="form-control" id="details" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Post</button>
            </div>
            </div>
        );
    }
}

export default NewPost;