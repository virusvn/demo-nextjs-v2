import React, {Component} from "react";
import App from '../components/App'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import 'isomorphic-fetch'
import {Link, Router} from '../routes'
import { API_ENDPOINT } from '../configs'
import he from 'he'
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
                        <GridList cols={4} cellHeight={180} style={styles.gridList}>
                            {this
                                .props
                                .posts
                                .map((post, i) => (
                                    
                                        <GridTile
                                        onClick={() => Router.pushRoute('blog', {slug: post.slug})}
                                        key={i}
                                        title={he.decode(post.title.rendered)}
                                        subtitle={< span > by < b > {post.author.name} < /b></span >}
                                        actionIcon={< IconButton > <StarBorder color="white"/> < /IconButton>}>
                                        <img src={post.image}/>
                                    </GridTile>
                                ))}
                        </GridList>
                    </div>
                </div>
            </App>
        )
    }
}