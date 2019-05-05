import React, { Component } from 'react'
import NotebookRender from '@nteract/notebook-render'

export class Notebook extends Component {
    render() {
        const children = this.props
        return (
            <NotebookRender notebook={children} />
        )
    }
}

export default Notebook
