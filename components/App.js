import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../components/tap_events'

const muiTheme = getMuiTheme({userAgent: false});

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {this.props.children }
            </MuiThemeProvider>
        );
    }
}
