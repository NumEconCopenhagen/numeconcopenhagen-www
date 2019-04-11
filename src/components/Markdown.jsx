import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { BlockMath, InlineMath } from "react-katex"
import katex from "rehype-katex"
import stringify from "rehype-stringify"
import math from "remark-math"
import remark2rehype from "remark-rehype"
import { Divider, Link, Typography } from '@material-ui/core'

import 'katex/dist/katex.min.css';

export class Markdown extends Component {
    render() {
        const remarkPlugins = [math, remark2rehype, katex, stringify]
        const remarkRenderers = {
            heading: props => <React.Fragment><Typography variant={`h${props.level}`}>{props.children}</Typography><Divider style={{ margin: '8px 0px' }} /></React.Fragment>,
            link: props => <Typography component="span" style={{ display: 'inline', fontWeight: 'inherit' }}><Link {...props}>{props.children}</Link></Typography>,
            paragraph: props => <Typography paragraph style={{ fontWeight: 'inherit' }} {...props}>{props.children}</Typography>,
            listItem: props => <li><Typography>{props.children}</Typography></li>,
            math:
                function blockMath(node) {
                    return <BlockMath>{node.value}</BlockMath>;
                },
            inlineMath: function inlineMath(node) {
                return <InlineMath>{node.value}</InlineMath>;
            }
        }
        const { children } = this.props
        return (
            <ReactMarkdown
                escapeHtml={false}
                source={children}
                plugins={remarkPlugins}
                renderers={remarkRenderers}
            />
        )
    }
}

export default Markdown
