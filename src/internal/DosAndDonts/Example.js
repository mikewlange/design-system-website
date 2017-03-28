import React, { Component, PropTypes } from 'react';
import Icon from '@console/bluemix-components-react/dist/components/Icon';

class Example extends Component {
  static propTypes = {
    correct: PropTypes.bool,
    caption: PropTypes.string,
    text: PropTypes.string,
  }

  render() {
    const greenCheck = <Icon name="checkmark" description="checkmark" height="16px" width="16px" fill="#8CD211" />;
    const redX = <Icon name="close" description="close" height="12px" width="12px" fill="#FF5050" />;

    const icon = this.props.correct ? greenCheck : redX;
    const fill = this.props.correct ? '#8CD211' : '#ff5050';
    const divStyle = {
      borderLeft: `10px solid ${fill}`,
    };

    return (
      <div className="example">
        <p className="example-caption">
          {icon}
          {this.props.caption}
        </p>
        <div className="example-text" style={divStyle}>
          <p>"{this.props.text}"</p>
        </div>
      </div>
    );
  }
}

export default Example;