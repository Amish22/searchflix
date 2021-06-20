import React, { Component } from "react";
import { Navbar, Form } from "react-bootstrap";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { connect } from "react-redux";
import { storeData } from "../redux";
import YearRange from "./YearRange";


class MyNavbar extends Component {
  constructor(storeData) {
    super();
    this.state = {
      ismounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      ismounted: true,
    });
  };
  handleSearch = () => {
    this.props.storeData({ varName: "title", data: this.state.title });
  };
  render() {
    return (
      <div>
        {this.state.ismounted ? (
          <Navbar style = {{justifyContent:"center",letterSpacing:"0.5rem"}}>
            <Navbar.Brand href="../redux/DefaultPage.js" style = {{color: "whitesmoke"}} className = "navbar" >
              <h1>SEARCHFLIX</h1>
            </Navbar.Brand>
            
            

          </Navbar>
          
        ) : (
          ""
        )}
        <div inline style = {{display: "flex",justifyContent: "center",backgroundColor: "#001a33"}} >
            <Form style = {{paddingLeft : "1%",paddingRight : "1%",display: "flex",justifyContent: "center"}}>
                <InputText
                  value={this.state.title}
                  placeholder="Lookup a movie..."
                  onChange={(e) => {
                  this.setState({ title: e.target.value });
                  }}
                />
            </Form>
            <YearRange/>
            <Button  className="p-button-raised p-button-rounded" style={{marginRight: "1%",marginLeft: "1%",fontSize: "80%", justifyContent:"center",border:"transparent",outline: "none"}} label="Search" onClick={this.handleSearch} onKeyDown={this.handleSearch}  />
            </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
