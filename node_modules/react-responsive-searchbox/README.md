# React Responsive Search Box

A search box component library built using React Js

### Important note- 
Please include a font-awesome CDN in your app for the search icon to display.

### How to install
`npm install --save react-responsive-searchbox`

### How to import into your component
```javascript
import SearchBox from 'react-responsive-searchbox/lib/SearchBox';
```

### Usage Example

```javascript
import React, { Component } from 'react';
import SearchBox from 'react-responsive-searchbox/lib/SearchBox';

class App extends Component {

  state = {searchBoxVal:""}

  handleSearchBoxValChange = (e)=>{
    this.setState({
      searchBoxVal:e.target.value
    })
  }

  handleSearchBoxSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.searchBoxVal);
  }

  render() {
    return (
      <div>
        <SearchBox placeholder="Enter search term" value={this.state.searchBoxVal} onchange={this.handleSearchBoxValChange}
        searchBoxStyles={{color:"dodgerBlue", height:"24px", border:"1px solid blue"}}
        searchButtonStyles={{background:"dodgerBlue", border:"1px solid blue"}}
        searchIconStyles={{color:"#fff", height:"24px", lineHeight:"24px"}}
        OnSubmit={this.handleSearchBoxSubmit}
        />
      </div>
    );
  }
}
```

### API info (props passed)

| Prop        | Value           | Description  |
| ------------- |:-------------:| -----|
| placeholder      | " " | The placeholder for the search box |
| value      | state = {searchBoxVal:""}      | A state variable holding the intial value for the search box |
| searchBoxStyles | { }      | A plain Javascript object holding style values for the searchBox. Ex- {border:"none"} |
| searchButtonStyles | { }      | A plain Javascript object holding style values for the searchButton. Ex- {color:"red"} |
| searchIconStyles | { } | A plain Javascript object holding style values for the search icon embedded inside the search button. Ex- {color:"red"} |
| searchFormStyles | { } | A plain Javascript object holding style values for the search form, which is the parent for the search box and the search button.
Ex- {justifyContent:"center"} |
| onchange | A function (definition in the example above)  | A Javascript function that is invoked on the onChange event of the search box. |
| OnSubmit | A function (definition in the example above)  | A Javascript function that is invoked on search submission. |