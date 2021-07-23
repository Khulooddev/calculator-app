import React, { Component } from 'react';


class ButtonComponent extends Component {

    render() {
        return (
            <div className="calculator-buttons">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <button name="square-root" onClick={e => this.props.onClick(e.target.name)}>&#8730;</button>
                <button name="power-two" onClick={e => this.props.onClick(e.target.name)}>x&sup2;</button>
                <button name="power-three" onClick={e => this.props.onClick(e.target.name)}>x&sup3;</button>
                <button name="percentage" onClick={e => this.props.onClick(e.target.name)}>&#x25;</button>
                <button name="pi" onClick={e => this.props.onClick(e.target.name)}>&pi;</button>
                <button name="=" className='equal' onClick={e => this.props.onClick(e.target.name)}>=</button>

            </div>
        );
    }
}

export default ButtonComponent;
