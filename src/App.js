import React , {Component}from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import Logo from './Components/Logo'
import Error from './Components/Error'
import CardList from './Components/CardList'
import Item from './Components/Item'
class App extends Component{
  constructor(){
    super();
    this.state = {
        error : false,
        page : "home",
        title: "",
        type: "",
        year: "",
        totalResults:"",
        details : {
          Poster: "",
          Title: "",
          Type: "",
          imdbID: "",
          year: ""
        }
    }
  }
  setInformation = (title, year, type, totalResults, Valid)=>{
    if(!Valid){
      this.setState({ error: true })
      this.setState({ page: "Errrrr" })
    }else{
      this.setState({ totalResults: totalResults})
      this.setState({ title: title })
      this.setState({ type: type })
      this.setState({ year: year })
      this.setState({ page: "Search" })
      this.setState({ error: false })
    }
  }
  OnRouteChange = (args) =>{
    this.setState({page: args.page})
    this.setState({details: args.details})
  }
  BackButtionClick = ()=>{
    if(this.state.page!=="home"){
      this.setState ({page: "home"})
      this.setState({error: false})
    }
  }
  render(){
    return (
      <div>
        <Logo BackButtionClick={this.BackButtionClick} />
        {
          (this.state.error === true || this.state.page =="Errrrr")?
            <Error BackButtionClick={this.BackButtionClick}/>
        :
          (this.state.page==="home")
        ?
          <HomePage setInformation={this.setInformation} />
        :
          (this.state.page==="Search")
        ?
                <CardList 
                  BackButtionClick={this.BackButtionClick}
                  OnRouteChange={this.OnRouteChange} 
                  searchOntitle={this.state.title} 
                  searchOnyear={this.state.year}
                  searchOntype={this.state.type}
                  totalResults={this.state.totalResults}
                />
        :
          <Item details={this.state.details}/>
        }
      </div>
    )
  }
};
export default App;