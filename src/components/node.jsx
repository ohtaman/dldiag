import React from 'react';
import * as d3 from 'd3';

import './node.css';
import * as Utils from '../utils';

class Node extends React.Component {
    componentDidMount() {
        let thisNode = this;
        
        let elem = this.refs['elem'];
        d3.select(elem).call(d3.drag().on('drag', () => {
            this.props.onDrag(d3.event);
        }).on('end', () => {
            this.props.onDragEnd(d3.event);
        }));
        d3.select(elem).selectAll('.output').call(d3.drag().on('drag', function() {
            let n = Number(this.getAttribute('name'));
            thisNode.props.onDragOutputConnector(d3.event, n);
        }));
    }

    render() {
        let inputConnectors = Utils.times(this.props.inputs).map((n) => {
            let cx = this.props.width*(n + 1)/(this.props.inputs + 1);
            let cy = 0;
            return (
                <circle 
                    key={`input.${n}`}
                    className="input"
                    cx={cx}
                    cy={cy}
                    r={this.props.connectorSize}
                    fill={this.props.inputConnectorColor}
                />
            );
        });
        let outputConnectors = Utils.times(this.props.outputs).map((n) => {
            let cx = this.props.width*(n + 1)/(this.props.outputs + 1);
            let cy = this.props.height;
            return (
                <circle 
                    key={`output.${n}`}
                    name={n}
                    className="output"
                    cx={cx}
                    cy={cy}
                    r={this.props.connectorSize}
                    fill={this.props.outputConnectorColor}
                    strokeWidth={this.props.connectorPeripheralSize}
                    stroke="rgba(0, 0, 0, 0)"
                />
            );
        });

        return (
            <g className="node" transform={`translate(${this.props.x},${this.props.y})`} ref="elem">
                <rect
                    x={0}
                    y={0}
                    height={this.props.height}
                    width={this.props.width}
                    fill={this.props.fill}
                    stroke={this.props.stroke}
                    strokeWidth={this.props.strokeWidth}
                    rx={this.props.rx}
                    ry={this.props.ry}
                />
                <text
                    x={this.props.width/2}
                    y={this.props.height/2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {this.props.text}
                </text>
                {inputConnectors}
                {outputConnectors}
            </g>
        );
    }
};

Node.defaultProps = {
    x: 0,
    y: 0,
    height: 50,
    width: 120,
    fill: 'white',
    stroke: '#935F69',
    strokeWidth: 2,
    rx: 10,
    ry: 10,
    inputs: 1,
    outputs: 1,
    connectorSize: 3,
    connectorPeripheralSize: 10,
    inputConnectorColor: 'red',
    outputConnectorColor: 'green',
    onDrag: () => {},
    onDragEnd: () => {}
}

export default Node;