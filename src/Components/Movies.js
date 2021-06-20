import React, { Component } from "react";
import { DataView } from "primereact/dataview";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import MovieBox from "./MovieBox";
import MovieModal from "./MovieModal";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
      layout: "grid",
      loading: true,
      first: 0,
      totalRecords: 0,
      MovieModalIsOpen: false,
    };
    this.rows = 10;

    this.itemTemplate = this.itemTemplate.bind(this);
    this.onPage = this.onPage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData(1);
    }, 1000);
  }
  componentDidUpdate(prevProps) {
 
    if (
      prevProps.title !== this.props.title ||
      prevProps.year !== this.props.year ||
      prevProps.searchType !== this.props.searchType
    ) {
   
      setTimeout(() => {
        this.fetchData(1);
      }, 1000);
    }
  }
  fetchData = (pageNumber) => {
    return fetch(
      `https://www.omdbapi.com/?s=${this.props.title}&apikey=7de47267&page=${pageNumber}&y=${this.props.year}&type=${"movie"}`
    )
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
     
        if (response.totalRecords < 10) this.rows = response.totalRecordes;
        else this.rows = 10;
        this.datasource = response.Search;
        this.setState({
          totalRecords: Number(response.totalResults),
          products: this.datasource,
          loading: false,
        });
      });
  };

  // movie details
  openDetails = (filmId) => {

    this.setState({
      MovieModalIsOpen: true,
      selectedFilmId: filmId,
    });
  };
  close_details = () => {
    this.setState({
      MovieModalIsOpen: false,
    });
  };
  ///pagination controls
  onPage(event) {
    this.setState({
      first: event.first,
    });
    // use page number to calculate index of first element in page
    // divided by number of elemnt in each page add one (starts from 0)

    this.fetchData(event.first / this.rows + 1);
  }
  
// render as grid
  itemTemplate(product, layout) {
    if (!product) {
      return "";
    }
    return (
      <>
          <MovieBox data={product} openDetails={this.openDetails} />
      </>
    );
  }

  renderHeader() {

  
  }

  render() {
    const header = this.renderHeader();

    return (
      <>
        <div className="movie-grid" >
          <div className="card" style = {{backgroundColor:"#001a33"}} >
            <DataView 
              value={this.state.products}
              layout={this.state.layout}
              header={header}
              itemTemplate={this.itemTemplate}
              lazy
              paginator
              paginatorPosition={"bottom"}
              rows={this.rows}
              totalRecords={this.state.totalRecords}
              first={this.state.first}
              onPage={this.onPage}
              loading={this.state.loading}
            />
          </div>
        </div>

        <MovieModal
          close_details={this.close_details}
          MovieModalIsOpen={this.state.MovieModalIsOpen}
          selectedFilmId={this.state.selectedFilmId}
        />
      </>
    );
  }
}
