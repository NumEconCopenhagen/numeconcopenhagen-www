import React, { Component } from 'react'
import Markdown from "../components/Markdown"
import Header from "../components/Header"
import { graphql } from "gatsby"


export class index extends Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <Header><Markdown>{data.allFile.edges[0].node.childMarkdownRemark.rawMarkdownBody}</Markdown></Header>
      </React.Fragment>
    )
  }
}

export const query = graphql`
query {
          allFile(filter: {sourceInstanceName: {eq: "content-root"}, relativePath: {eq: "index.md"}}){
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

