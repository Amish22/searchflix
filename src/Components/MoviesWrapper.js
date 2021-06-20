import React, { Component } from "react";
import { connect } from "react-redux";
import { storeData } from "../redux";
import Movies from './Movies'
class MoviesWrapper extends Component {
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
    render() {
       
        return (
            <div style = {{backgroundColor:"#001a33"}} >
                {this.state.ismounted?
                <Movies  
                year= {this.props.year}
                title= {this.props.title}
                searchType= {this.props.searchType}
                
                />:""}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    year: state.filmStore.year,
    title:state.filmStore.title,
    searchType:state.filmStore.searchType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesWrapper);
