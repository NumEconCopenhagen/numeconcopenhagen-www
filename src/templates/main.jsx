import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Markdown from '../components/Markdown'
import Typography from "@material-ui/core/Typography"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <Header>
                <Typography>{post.frontmatter.title}</Typography>
                <Markdown>{post.rawMarkdownBody}</Markdown>
            </Header>
        </div>
    )
}

export const query = graphql`
query($slug: String!) {    
    markdownRemark(fields: { slug: { eq: $slug } }) 
    {
        rawMarkdownBody
        frontmatter 
        {
            title      
        }    
    }  
}`