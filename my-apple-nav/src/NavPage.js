import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MacIconCard from './MacInfoBar';
import ButtonDropdown from './buttonDropdown.js';

export default class NavPage extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };

        const handleChange = () => {
            this.props.onUserInput(
              this.refs.filterTextInput.value,
            );
          }
    }

    render() {
        return (
            <div>
                <div className = "navigation">
                    <Link to = '/' className = "nav">Home</Link>
                    <Link to = '/Mac' className = "nav">Mac</Link>
                    <Link to = '/iPad' className = "nav">iPad</Link>
                    <Link to = '/iPhone' className = "nav">iPhone</Link>
                    <Link to = '/Watch' className = "nav">Watch</Link>
                    <Link to = '/TV' className = "nav">TV</Link>
                    <Link to = '/Music' className = "nav">Music</Link>
                    <Link to = '/Support' className = "nav">Support</Link>
                    <div>
                    <form className = "searchBar">
                        <input 
                                type= "text"
                                placeholder = "...Search..."
                                value = {this.props.filterText}
                                ref = "filterTextInput"
                                onChange = {this.handleChange}
                            />
                    </form>
                    </div>
                    <ButtonDropdown>Shopping</ButtonDropdown>
                </div>
                <div>
                    I'm supposed to be icons of various Apple products but I won't work. 
                </div>
            </div>      
         );
    }

 
    
};