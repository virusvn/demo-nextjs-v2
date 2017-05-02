import React, {Component} from "react";
import App from '../components/App'
import IconButton from 'material-ui/IconButton';
import 'isomorphic-fetch'
import {Link, Router} from '../routes'
import { API_ENDPOINT } from '../configs'

import Divider from 'material-ui/Divider';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import { FormLabel } from 'material-ui/Form';

import he from 'he'

const styleSheet = createStyleSheet('FullWidthLayout', (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const styles = {
    margin: 12,
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        overflowY: 'auto'
    }
};
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            open: false
        };
    }
    static async getInitialProps({query, res}) {
        const data = await fetch(`${API_ENDPOINT}/posts?_embed`)
        let posts = await data.json()
        posts.map(function (post) {
            if (post._embedded && post._embedded["wp:featuredmedia"][0]) {
                post.image = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["medium"]["source_url"]
            }
            post.author = post._embedded.author[0]
            
            return post
        })
        return {posts};
    }

    render() {
        const {counter} = this.state;

        return (

            <App>
                <div>
                    <div style={styles.root}>
                         <Layout type="item" 
          xs={6}
          xsJustify="center"
          xsAlign="center"
                        >
             <Paper>
            xs=12
          </Paper>
          <Paper>
            xs=12
          </Paper>
          <Paper>
            xs=12
          </Paper>

                        </Layout>
                    </div>
                </div>
            </App>
        )
    }
}