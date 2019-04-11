import React, { Component } from 'react'
import Markdown from "../components/Markdown"
import Header from "../components/Header"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"


export class index extends Component {
  render() {
    const { data } = this.props
    return (
      <Header>
        <Typography variant="h2">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.title}</Typography>
        <Markdown>{data.allFile.edges[0].node.childMarkdownRemark.rawMarkdownBody}</Markdown>
      </Header>
    )
  }
}

export const query = graphql`
query {
          allFile(filter: {relativePath: {eq: "index.md"}}){
            edges {
        node {
          childMarkdownRemark {
        frontmatter {
          title
        }
        rawMarkdownBody
      } 
    }
  }
}
}`

export default index

