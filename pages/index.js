import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div>{this.props.i18n['hello']}</div>
    );
  }
}

export default Index;
