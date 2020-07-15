import React from 'react';
import {FaBackspace} from 'react-icons/fa'
import './Logo.css'
class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div id="containerIntro">
                    <h1 className="f1 Moto" >OMDB DEMO </h1>
                    <label id='label'>
                        <input
                            onClick={this.props.BackButtionClick}
                            type="radio"
                        />
                        <p className='f3 ph3 mh0 bb back'>
                            <strong>Back to Home Page</strong>
                        </p>
                    </label>
                </div>
            </div>
        );
    }
}

export default Logo;