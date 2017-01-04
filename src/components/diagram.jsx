import React from 'react';

import Node from './node';

class Diagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let nodes = Object.keys(this.state.nodes).map((key) => {
            let node = this.state.nodes[key];
            return (
                <Node key={key}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    inputs={node.inputs}
                    outputs={node.outputs}
                    onDrag={(e) => {
                        this.onDragNode(e, key);
                    }}
                    onDragEnd={(e) => {
                        this.onDragNodeEnd(e, key);
                    }}
                    onDragOutputConnector={(e, n) => {
                        // TODO: implement add line.
                    }}
                />
            );
        });

        return (
            <div>
                <svg ref="svg" width="100%" height="100%">
                    {nodes}
                </svg>
            </div>
        );
    }

    onDragNode (e, key) {
        let nodes = Object.assign({}, this.state.nodes);
        nodes[key].x += e.dx;
        nodes[key].y += e.dy;
        this.setState({
            nodes: nodes
        });
    }

    onDragNodeEnd (e, key) {
        let orig = this.props.nodes[key];
        let moved = this.state.nodes[key];
        this.props.onNodeMoved(orig, moved);
    }
};

Diagram.defaultProps = {
    nodes: {
        node1: {
            x: 10,
            y: 20,
            text: 'Node1',
            inputs: 1,
            outputs: 2
        },
        node2: {
            x: 300,
            y: 60,
            text: 'Node2',
            inputs: 2,
            outputs: 1
        }
    },
    edges: [
        ['node1', 'node2']
    ],
    onNodeMoved: () => {}
}

export default Diagram;