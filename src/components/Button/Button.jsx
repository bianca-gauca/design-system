import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Button.css'

export default class Button extends Component {

    handleClickEvent = () => {
        const { onClick } = this.props;
        onClick();
    }

    render() {
        const { color } = this.props;
        const customClasses = `action-button animate ${color}`;
        return (
            <div className={customClasses} onClick={this.handleClickEvent}>
                {this.props.children}
            </div>
        )
    }
}

Button.defaultProps = {
    color: 'blue',
    onClick: () => { }
};

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string
}