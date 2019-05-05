import React, { Component } from 'react'
import Header from '../components/Header'
import "katex/dist/katex.min.css";
import { graphql } from 'gatsby'
import NotebookRender from "@nteract/notebook-render";

export default class NotebookTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = { 'class': 'none' }
  }
  componentDidMount() {
    this.setState({ 'class': 'block' })
  }
  render() {
    const {
      data: {
        notebook,
      }
    } = this.props;

    return (
      <div style={{ display: this.state.class }}>
        <Header>
          <NotebookRender notebook={JSON.parse(notebook.internal.content)} />
        </Header >
      </div>
    )
  }
}

//eslint-disable-next-line no-undef
export const NotebookQuery = graphql`
  query NotebookbySlug($slug: String!) {
    notebook: jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      internal {
        content
      }
    }
  }
`
