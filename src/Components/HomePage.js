import React, {Component} from 'react';
import tachyons from 'tachyons';
import { FaSearch } from 'react-icons/fa'
import './HomePage.css';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            year: "",
            type: ""
        }
    }
    titleValue = (event)=>{
        this.setState({ title: event.target.value})
    }
    YearValue=(event)=>{
        this.setState({ year: event.target.value })
    }
    MovieType = (event)=>{
        this.setState({ type: event.target.value })
    }
    // title, year, type, totalResults, Valid
    OnSubmit = ()=>{
        fetch(`http://www.omdbapi.com/?apikey=23b271d4&s=${this.state.title}&type=${this.state.type}&y=${this.state.year}&page=1`)
            .then(response => response.json())
        .then(res=>{
            if(res.Response === "False" && res.Error === "Too many results."){
                this.props.setInformation("", "", "", "", false);
            }else{
                if (res.totalResults===undefined){
                    this.props.setInformation(this.state.title, this.state.year, this.state.type, 0, true);
                }else{
                    this.props.setInformation(this.state.title, this.state.year, this.state.type, res.totalResults, true);
                }
            }
        })
    }
    render(){
        return(
            <div >
                <hr className="b"
                />
                <p className='tc f1 lh-title'>Let's find out ...</p>
                <div className="flex justify-center pa3 br3" >
                    <div id='container'>
                        <p id='first-title'>Title</p>
                        <input placeholder='Must Fill' onChange={this.titleValue} className="pa1 w-60" type='text' />
                    </div>
                    <div id='year'>
                        <p>Year</p>
                        <input onChange={this.YearValue}  className="pa1 w-60" type='text' />
                    </div>
                    <div id='search'>
                        <select 
                            onChange={this.MovieType}   
                            style={{
                                width: 100,
                                height: 30}
                                }
                            >
                            <option value="">Type</option>
                            <option value="Movie">Movies</option>
                            <option value="Series">Series</option>
                            <option value="Eposode">Eposode</option>
                        </select>
                        <label>
                            <input
                                onClick={this.OnSubmit}
                                type="radio"
                            />
                            <FaSearch
                                className= 'Search'
                                size={50}
                            />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;