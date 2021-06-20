import React, { Component } from 'react'

export default class MovieBox extends Component {
    render() {
        return (
            <div className="p-col-12 p-md-3"
            onClick={()=>this.props.openDetails(this.props.data.imdbID)}
            >
            <div className="movie-item card">
              <div className="movie-item-content">
                <img
                  src={
                    this.props.data.Poster === "N/A"
                      ? require("../images/none.jpg")
                      : this.props.data.Poster
                  }
                  alt={this.props.data.Title}
                />
                <div className="movie-name">{this.props.data.Title}</div>
                <div className="movie-description">{this.props.data.Year}</div>
              </div>
            </div>
          </div>
        )
    }
}
