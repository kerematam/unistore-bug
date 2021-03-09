import { Component } from "preact";
import { connect } from "unistore/preact";
import { todoActions } from "./actions.js";

class Child extends Component {
  async componentDidMount() {
    const { childAction } = this.props;
    await childAction();
  }

  render({ child }) {
    return <h1>child : {child}</h1>;
  }
}

export default connect(["todos", "child"], todoActions)(Child);
