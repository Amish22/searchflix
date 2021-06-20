import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "primereact/button";
import Form from "react-bootstrap/Form";
export default class MovieModal extends Component {
  constructor() {
    super();
    this.state = {
      didMount: false,
    };
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedFilmId !== this.props.selectedFilmId) {
      fetch(
        `https://www.omdbapi.com/?i=${this.props.selectedFilmId}&apikey=7de47267`
      )
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          this.setState({
            selectedFilm: response,
            didMount: true,
          });
        });
    }
  };
  render() {
    return (
      <>
        {this.state.didMount ? (
          <Modal isOpen={this.props.MovieModalIsOpen}>
            <ModalHeader className = "modalHeader"> {this.state.selectedFilm.Title} </ModalHeader>
            <ModalBody className = "popup">
              <Form.Group controlId="exampleForm.ControlInput1">
                <div
                  className="movie-item-content"
                  style={{
                    marginLeft:
                      this.state.selectedFilm.Poster === "N/A" ? "-5%" : "17%",
                  }}
                >
                  <img
                    src={
                      this.state.selectedFilm.Poster === "N/A"
                        ? require("../images/none.jpg")
                        : this.state.selectedFilm.Poster
                    }
                    alt={this.state.selectedFilm.Title}
                  />
                </div>npm 
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Plot : {this.state.selectedFilm.Plot}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Genre: {this.state.selectedFilm.Genre}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Release Date : {this.state.selectedFilm.Released}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Director : {this.state.selectedFilm.Director}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Runtime : {this.state.selectedFilm.Runtime}
                </Form.Label>
              </Form.Group>
            </ModalBody>
            <ModalFooter className = "modalFooter">
              <Button icon="pi pi-times" onClick={this.props.close_details}></Button>
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}
      </>
    );
  }
}
