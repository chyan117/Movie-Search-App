import React, { Component } from 'react';
import Card from './Card'
import Loading from './Loading'
import PageController from './PageController';
import Error from './Error'
class CardList extends Component {
    constructor(props) {
        super(props);
        // Collection.length is total page number
        this.state = {
            Collection: [],
            curr_page: 1,
            curr_first: 1,
            curr_end: 4,
        }
    }
    componentDidUpdate(){
        fetch(`http://www.omdbapi.com/?apikey=23b271d4&s=${this.props.searchOntitle}&type=${this.props.searchOntype}&y=${this.props.searchOnyear}&page=${this.state.curr_page}`)
            .then(response => response.json())
            .then(res => {
                this.setState({ Collection: res.Search})
                let total_page = Math.floor(this.props.totalResults / 10);
                let Mod = this.props.totalResults % 10;
                if (Mod > 0) total_page++;
                if(total_page<4){
                    this.setState({ curr_end: total_page})
                }
            }
            )
    }
    OnPageChange = (event) =>{
        fetch(`http://www.omdbapi.com/?apikey=23b271d4&s=${this.props.searchOntitle}&type=${this.props.searchOntype}&y=${this.props.searchOnyear}&page=${event.target.value}`)
            .then(response => response.json())
            .then(res => {
                this.setState({ Collection: res.Search })
            }
        )
        this.setState({ curr_page: event.target.value/1 })
    }
    BackToRootPage = () =>{
        this.setState({curr_page: 1})
        this.setState({curr_first: 1})
        let total_page = Math.floor(this.props.totalResults / 10);
        let Mod = this.props.totalResults % 10;
        if (Mod > 0) total_page++;
        if(total_page>3){
            this.setState({ curr_end: 4 })
        }else{
            this.setState({ curr_end: total_page})
        }
    }
    BackToLastPage = ()=>{
        let cur_p = this.state.curr_page/1;
        if (this.state.curr_page!==1){
            if (cur_p %4===1){
                this.setState({curr_first: cur_p - 4})
                this.setState({ curr_end: cur_p - 1 })
                this.setState({ curr_page: cur_p - 1 })
            }else{
                this.setState({ curr_page: cur_p - 1 })
            }
        }
    }
    MoveToNextPage = () =>{
        let cur_p = this.state.curr_page/1;
        let total_page = Math.floor(this.props.totalResults / 10);
        let Mod = this.props.totalResults % 10;
        if (Mod > 0) total_page++;
        if (this.state.curr_page !== total_page) {
            if (cur_p%4===0){
                if (cur_p+4 > total_page){
                    this.setState({curr_first: cur_p + 1});
                    this.setState({ curr_page: cur_p + 1 });
                    this.setState({curr_end: total_page});
                }else{
                    this.setState({ curr_first: cur_p + 1 })
                    this.setState({ curr_end: cur_p + 4 })
                    this.setState({ curr_page: cur_p + 1 })
                }
            }
            this.setState({ curr_page: cur_p + 1 })
        }
    }
    MoveToEndPage = () => {
        let total_page = Math.floor(this.props.totalResults/10);
        let Mod        = this.props.totalResults % 10;
        if(Mod>0)   total_page++;
        this.setState({ curr_page: total_page })
        this.setState({ curr_end: total_page})
        if (total_page<=4){
            let result = 1;
            this.setState({curr_first: result})
        } else if (total_page%4==0){
            let result = total_page - 3
            this.setState({ curr_first: result })
        }else{
            let result = total_page - total_page % 4 + 1
            this.setState({ curr_first: result})
        }
    }
    render() {
        let head;
        if (this.props.searchOntitle == ''){
            head = 'You must input the title of movies!'
        }
        else if (this.props.searchOntype == '' && this.props.searchOnyear==''){
            head = `There is ${this.props.totalResults} results named "${this.props.searchOntitle}"  `;
        } else if (this.props.searchOntype == ''){
            head = `There is ${this.props.totalResults} results named "${this.props.searchOntitle}" found in  ${this.props.searchOnyear}`;
        } else if (this.props.searchOnyear==''){
            head = `There is ${this.props.totalResults} results of {${this.props.searchOntype}} named "${this.props.searchOntitle} `
        }
        else{
            head = `There is ${this.props.totalResults} results of {${this.props.searchOntype}} named "${this.props.searchOntitle}" found in {${this.props.searchOnyear}}`;
        }
        if (this.state.Collection==undefined){
            if(this.props.totalResults>0){
                return(
                    <Error BackButtionClick={this.props.BackButtionClick}/>
                );
            }else{
                return (
                    <div>
                        <div className="tc f2 bg-light-gray">
                            <hr className="b"
                            />
                            {head}
                            <hr />
                        </div>
                    </div>
                );
            }
        }
        else if (this.state.Collection.length===0){
            return(
                <Loading/>
            );
        }
        else{
            const all = this.state.Collection.map((element, i) => {
                return <Card key={i} title={element.Title} src={element.Poster} Type={element.Type} year={element.Year} imdbID={element.imdbID} OnRouteChange={this.props.OnRouteChange} />
            })
            return (
                <div>
                    <div>
                        <div className="tc f2 bg-light-gray">
                            <hr className="b"
                            />
                            {head}
                            <hr className="b"/>
                        </div>
                        <div>{all}</div>
                    </div>
                    <div className='flex justify-center pa3 br3'>
                        <PageController 
                            start={this.state.curr_first} 
                            end={this.state.curr_end} 
                            OnPageChange={this.OnPageChange} 
                            BackToRootPage={this.BackToRootPage} 
                            BackToLastPage={this.BackToLastPage}
                            MoveToNextPage={this.MoveToNextPage}
                            MoveToEndPage={this.MoveToEndPage}
                            current_page = {this.state.curr_page}
                        />
                    </div>
                </div>
            );
        }
    }
}      
export default CardList