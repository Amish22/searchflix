import React, { Component } from "react";
import { InputNumber } from "primereact/inputnumber";
import { connect } from "react-redux";
import { storeData } from "../redux";
import { Form } from "react-bootstrap";


class YearRange extends Component {
  constructor(storeData) {
    super();
    this.state = {
      ismounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      value: this.props.year,
      ismounted: true,
    });
  };
  tempValue = null;
  render() {
    return (
      <div>
      <div inline style = {{display: "flex",justifyContent: "center"}} >
      <Form style = {{display: "flex",justifyContent: "center"}}>
        {this.state.ismounted ? (
          <InputNumber 
            useGrouping={false}
            value={this.state.value}
            placeholder="Enter Year (ex. 2019)"
            onValueChange={(e) => {
              e.value == null
                ? (this.tempValue = null)
                : (this.tempValue = Number(e.value));
              this.props.storeData({ varName: "year", data: this.tempValue });
              this.setState({ value: this.tempValue });
            }}
            min={0}
            max={new Date().getFullYear()}
            
          />
          
        ) : (
          ""
        )}
        </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    year: state.filmStore.year,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YearRange);
