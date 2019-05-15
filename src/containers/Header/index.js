import React from 'react';

// import './../styles/Style.css';


class Header extends React.Component {
    render() {
        return <div>
            <p>{this.props.tagName}</p>
            <p>Some text</p>
        </div>
    }
}


export default Header;
