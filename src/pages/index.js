import React, { Component } from 'react'
import Markdown from "../components/Markdown"
import Header from "../components/Header"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
// import Notebook from "../components/Notebook"

export class index extends Component {
  constructor(props) {
    super(props)
    this.state = { 'class': 'none' }
  }
  componentDidMount() {
    this.setState({ 'class': 'block' })
  }
  render() {
    const { data } = this.props
    // const a = fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     return responseJson;
    //   });
    // console.log(a)
    return (
      <div style={{ display: this.state.class }}>
        <Header>
          <Typography variant="h1">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.title}</Typography>
          <Markdown>{data.allFile.edges[0].node.childMarkdownRemark.rawMarkdownBody}</Markdown>
        </Header>
        {/* <Notebook>
          {
            fetch('https://raw.githubusercontent.com/NumEconCopenhagen/exercises-2019/master/PS1/problem_set_1.ipynb').then(reponse => reponse.json())
          }
        </Notebook> */}
      </div >
    )
  }
}

export const query = graphql`
query {
  allFile(filter: {relativePath: {eq: "index.md"}}) {
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
}
`

export default index

