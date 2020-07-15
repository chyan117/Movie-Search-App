import React from 'react'
import './Error.css';
class Error extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <hr className="b"
                />
                <h1 className='f1 title'>Oooops, Something went wrong</h1>
                <br />
                <p className='b tc f3'>The below condtions will cause the website to collapse....</p>
                <div className='b content '>
                    <p className='p_tag underline'>1. Too many search results. Please "TRY" to narrow down your scope!</p>
                    <p className='p_tag underline'>2. Something Wrong with the server. Please go back to home page. </p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='underline f1 tc'>
                    <label>
                        <input
                            onClick={this.props.BackButtionClick}
                            type="radio"
                        />
                        <p className='back'>Click "Here" To Home Page</p>
                    </label>
                </div>
            </div>
        );
    }
} 

export default Error;