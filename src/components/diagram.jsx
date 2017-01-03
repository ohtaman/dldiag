import React from 'react';
import * as d3 from 'd3';

class Diagram extends React.Component {
    componentDidMount() {
        this.svg = d3.select(this.refs['svg']);

        this.svg.selectAll('g.node').data(
            Object.values(this.props.nodes)
        ).enter().append('g')
            .attr('class', 'node')
            .attr('transform', (d) => {
                return `translate(${d.x},${d.y})`;
            });

        this.svg.selectAll('g.node')
            .append('rect')
            .attr('x', 3)
            .attr('y', 3)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('stroke', '#935F69')
            .attr('stroke-width', 5)
            .attr('height', 60)
            .attr('width', 200)
            .attr('fill', 'none');
    }

    render() {
        return (
            <div>
                <svg ref="svg" width="100%" height="100%" />
            </div>
        );
    }
};

Diagram.defaultProps = {
    nodes: {
        node1: {
            x: 10,
            y: 20
        },
        node2: {
            x: 300,
            y: 60
        }
    },
    edges: [
        ['node1', 'node2']
    ],
}

export default Diagram;