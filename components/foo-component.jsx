import React from 'react';

class FooComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('Clicked!');
    }    

    render() {
        return (
            <button onClick={this.handleClick}>Click me!</button>
        )
    }
}

export default FooComponent;