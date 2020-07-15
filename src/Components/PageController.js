import React, {Component} from "react";
import { AiFillFastBackward, AiFillBackward, AiFillForward, AiFillFastForward} from 'react-icons/ai'
import './PageController.css'
class PageController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const content = [];
        for (let i = this.props.start; i<=this.props.end; i++){
            let element;
            if (i == this.props.start){
                if(i==this.props.current_page){
                    element = (<div id="first" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start}
                            />
                            <p id="first" className='underline f1 pa3'>{this.props.start}</p>
                        </label>
                    </div>)
                }else{
                    element = (<div id="first" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start}
                            />
                            <p id="first" className='underline f2 pa3'>{this.props.start}</p>
                        </label>
                    </div>)
                }
            } else if (i == this.props.start+1){
                if (i == this.props.current_page) {
                    element = <div id="second" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start + 1}
                            />
                            <p id="second" className='underline f1 pa3'>{this.props.start + 1}</p>
                        </label>
                    </div>
                }else{
                    element = 
                    <div id="second" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start + 1}
                            />
                            <p id="second" className='underline f2 pa3'>{this.props.start + 1}</p>
                        </label>
                    </div>
                }
            } else if (i == this.props.start+2){
                if (i == this.props.current_page) {
                    element = (
                    <div id="third" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start+ 2}
                            />
                            <p id="third" className='underline f1 pa3'>{this.props.start + 2}</p>
                        </label>
                    </div>)
                }
                else{
                    element = (
                    <div id="third" key={i}>
                        <label>
                            <input
                                onClick={this.props.OnPageChange}
                                type="radio"
                                value={this.props.start + 2}
                            />
                            <p id="third" className='underline f2 pa3'>{this.props.start + 2}</p>
                        </label>
                    </div>)
                }
            } else if (i == this.props.start+3){
                if (i == this.props.current_page) {
                    element = (
                    <div key={i} id="forth">
                        <label>
                            <input
                                value={this.props.start+ 3}
                                onClick={this.props.OnPageChange}
                                type="radio"
                            />
                            <p id="forth" className='underline f1 pa3'>{this.props.start + 3}</p>
                        </label>
                    </div>)
                }
                else{
                    element = (
                    <div key={i}  id="forth">
                        <label>
                            <input
                                value={this.props.start + 3}
                                onClick={this.props.OnPageChange}
                                type="radio"
                            />
                            <p id="forth" className='underline f2 pa3'>{this.props.start + 3}</p>
                        </label>
                    </div>)
                }
            }
            content.push(element);
        }
        return (
            <div id='containers'>
                <div id='stuff1'>
                    <label>
                        <input
                            onClick={this.props.BackToRootPage}
                            type="radio"
                        />
                        <AiFillFastBackward size={50} />
                    </label>
                </div>
                <div id='stuff2'>
                    <label>
                        <input
                            onClick={this.props.BackToLastPage}
                            type="radio"
                        />
                        <AiFillBackward size={50} />
                    </label>
                </div>         
                {content}
                <div id='stuff3'>
                    <label>
                        <input
                            onClick={this.props.MoveToNextPage}
                            type="radio"
                        />
                        <AiFillForward size={50} />
                    </label>
                </div>
                <div id='stuff4'>
                    <label>
                        <input
                            onClick={this.props.MoveToEndPage}
                            type="radio"
                        />
                        <AiFillFastForward size={50} />
                    </label>
                </div>
            </div>
        );
    }
}

export default PageController;