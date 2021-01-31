import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div style={{marginTop: 10}}>
                <h3>Contact</h3>
                <form >
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value=""
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value=""
                                
                                />
                    </div>
                    <div className="form-group">
                        <label>Message: </label>
                        
                        <textarea className="form-control">

                        </textarea>
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Message" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}