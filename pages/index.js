import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import '../components/tap_events'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const style = {
    margin: 12
};

const muiTheme = getMuiTheme({userAgent: false});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            open: false
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.increment.bind(this), 1000)

    }

    increment() {
        this.setState(({counter}) => {
            return {
                counter: counter + 1
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({open: false});
    render() {
        const {counter} = this.state;

        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <header>
                        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={(open) => this.setState({open})}/>
                        <div>Webpack is doing its thing with React and ES2015</div>
                        <div
                            style={{
                            color: "red"
                        }}>{counter}</div>
                    </header>
                    <RaisedButton label="Default" style={style}/>
                    <RaisedButton label="Primary" primary={true} style={style}/>
                    <RaisedButton label="Secondary" secondary={true} style={style}/>
                    <RaisedButton label="Disabled" disabled={true} style={style}/>
                    <br/>
                    <br/>
                    <RaisedButton label="Full width" fullWidth={true}/>
                    <RaisedButton label="Open Drawer" onTouchTap={this.handleToggle}/>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}
