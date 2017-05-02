import React from 'react'
import 'isomorphic-fetch'
import { API_ENDPOINT } from '../configs'
import App from '../components/App'
import he from 'he'
export default class extends React.Component {
    static async getInitialProps({query, res}) {
        const data = await fetch(`${API_ENDPOINT}/posts?slug=${query.slug}&_embed`)
        let posts = await data.json()
        return {post: posts[0]}
    }

    render() {
        const {post} = this.props
        if (!post) 
            return <h1>Post not found</h1>

        return (
            <App>
                <h1>{he.decode(post.title.rendered)}</h1>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}>
                </div>
            </App>
        )
    }
}