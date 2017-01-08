import React from 'react';

import Node from './node';
import {getConnectorPosition} from './node';
import Edge from './edge';

class Diagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let nodes = Object.keys(this.state.nodes).map((key) => {
            let node = this.state.nodes[key];
            return (
                <Node
                    key={key}
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
                        this.onDragOutputConnector(e, key, n);
                    }}
                />
            );
        });

        let edges = this.props.edges.map((edge) => {
            let fromKey = edge.from[0];
            let toKey = edge.to[0];
            let fromNode = nodes.find(_ => _.key === fromKey);
            let toNode = nodes.find(_ => _.key === toKey);
            let from = getConnectorPosition(fromNode, 'output', edge.from[1]);
            let to = getConnectorPosition(toNode, 'input', edge.to[1]);
            return <Edge key={edge} from={from} to={to} />
        });

        return (
            <div>
                <svg ref="svg" width="100%" height="100%">
                    {nodes}
                    {edges}
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

    onDragOutputConnector (e, key, n) {
        let nodes = Object.assign({}, this.state.nodes);
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
    edges: [{
        from: ['node1', 0],
        to: ['node2', 1]
    }],
    onNodeMoved: () => {}
}

export default Diagram;