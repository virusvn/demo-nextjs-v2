import React from 'react'

export default class extends React.Component {
    static async getInitialProps({query, res}) {
        const data = await fetch(`https://www.businesscard.vn/blog/wp-json/wp/v2/pages?slug=${query.slug}`)
        let posts = await data.json()
        //wp-json return an array, with the first one is exact match
        let post
        posts.forEach(function (p) {
            if (p.slug == query.slug) {
                post = p
            }
        })
        return {post}
    }

    render() {
        const {post} = this.props
        if (!post) 
            return <h1>Post not found</h1>

        return <h1>{post.title.rendered}</h1>
    }
}