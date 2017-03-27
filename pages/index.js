import React, { Component } from "react";
import App from '../components/App'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import 'isomorphic-fetch'
import { Link, Router } from '../routes'
const style = {
    margin: 12
};
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            open: false
        };
    }
  static async getInitialProps ({ query, res }) {
        const data = await fetch(`https://www.businesscard.vn/blog/wp-json/wp/v2/posts`)
        let posts = await data.json()
        return {posts};  
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

            <App>
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
                        <MenuItem onTouchTap={this.handleClose}>
                            Menu Item
                            </MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                    {this.props.posts.map(function (post, i) {
                        return (
                            <h3> <Link  route='blog' params={{ slug: post.slug}}><a>{post.title.rendered}</a></Link></h3>
                        )
                    })}
                </div>
            </App>
        );
    }
}
