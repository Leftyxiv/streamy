import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getOneStream, editStream } from "../../../actions";
import StreamForm from "../StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
    console.log("STREAM EDIT COMPONENT MOUNTED");
  }

  componentWillUnmount() {
    console.log("STREAM EDIT COMPONENT ******DISMOUNTED***********");
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, "title", "description")} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getOneStream, editStream })(StreamEdit);

//live_29718313_kKARfP0bOhhAV18TONRb51KtV0e0QM
