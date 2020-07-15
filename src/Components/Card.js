import React, {Component} from 'react';
import './Card.css'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            src: this.props.src,
            year: this.props.year,
            Type: this.props.Type,
            imdbID: this.props.imdbID
        }
    }
    render() {
        let image = this.props.src;
        if (image=='N/A'){
            image = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
        }
        return (
            <div className='dib br3 pa1 ma1 bw1' >
                <label>
                    <input
                        onClick={() => this.props.OnRouteChange({
                            page: "Item",
                            details: {
                                Poster: image,
                                Title: this.props.title,
                                Type: this.props.Type,
                                imdbID: this.props.imdbID,
                                year: this.props.year
                            }
                        })}
                        type="radio"
                    />
                    <div className='dib br3 pa3 ma2 grow bw2 port'>
                        <img style={{ width: 200, height: 130 }} alt='movie image' src={image} />
                        <div>
                            <p className='b tc'>{this.props.title}</p>
                        </div>
                    </div>
                </label>
            </div>
        );
        
    }
}

export default Card
