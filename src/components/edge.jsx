import React from 'react';


class Edge extends React.Component {
    render() {
        let p = this.props;
        let d = [
            'M',
            `${p.from.join(',')}`,
            'C',
            `${p.from[0]},${p.from[1] + p.hardness}`,
            `${p.to[0]},${p.to[1] - p.hardness}`,
            `${p.to.join(',')}`
        ].join(' ');

        return (
            <path
                stroke={this.props.stroke}
                strokeWidth={this.props.strokeWidth}
                fill="none"
                d={d}
            />
        );
    }
};

Edge.defaultProps = {
    from: [0, 0],
    to: [0, 0],
    stroke: 'black',
    strokeWidth: 2,
    hardness: 100
};

export default Edge;