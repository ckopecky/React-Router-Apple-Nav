import React from 'react';
import { Button, Fade } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div>
                <Link to = '/'><img src = /></Link>

                <Button color="secondary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <div className = 'nav'>
                        
                    </div>
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};