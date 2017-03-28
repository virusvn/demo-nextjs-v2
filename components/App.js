import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../components/tap_events'
import { Link, Router } from '../routes'
import {APP_NAME} from '../configs'

const muiTheme = getMuiTheme({
    userAgent: false,
    appBar: {
        height: 56,
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({open: false});
    handleLinkClick(href) {
        return (e) => {
            e.preventDefault()
            Router.push(href)
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <header>
                    <AppBar
                            title={APP_NAME}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={(open) => this.setState({open})}/>
                </header>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleLinkClick("/")}> Home
                    </MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
                {this.props.children}
                </div>    
            </MuiThemeProvider>
        );
    }
}
