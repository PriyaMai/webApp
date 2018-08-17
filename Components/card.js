import React from 'react';

class Card extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        
        let cardSize = {
            height: this.props.height,
            width: this.props.width
        };
        return (
            <div className="card" style= {cardSize}>
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Card;