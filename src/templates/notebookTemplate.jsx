import React from 'react';
import PropTypes from "prop-types";
import Header from '../components/Header'
import "katex/dist/katex.min.css";
import { graphql } from 'gatsby'
import NotebookRender from "@nteract/notebook-render";

const NotebookTemplate = props => {
  const {
    data: {
      notebook,
    }
  } = props;

  return (
    <Header>
      <NotebookRender notebook={JSON.parse(notebook.internal.content)} />
    </Header >
  )
};

NotebookTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default NotebookTemplate;

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
