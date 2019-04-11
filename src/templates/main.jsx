import React, { Component } from 'react'
import { graphql } from "gatsby"
import Header from '../components/Header'
import Markdown from '../components/Markdown'
import Typography from "@material-ui/core/Typography"


export class main extends Component {
    constructor(props) {
        super(props)
        this.state = { 'class': 'none' }
    }
    componentDidMount() {
        this.setState({ 'class': 'block' })
    }
    render() {
        const { data } = this.props
        console.log(this.state)
        return (
            <div style={{ display: this.state.class }}>
                <Header>
                    <Typography variant='h1'>{data.markdownRemark.frontmatter.title}</Typography>
                    <Markdown>{data.markdownRemark.rawMarkdownBody}</Markdown>
                </Header>
            </div>
        )
    }
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

export default main
