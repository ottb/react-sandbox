import React, { Component } from 'react';
var BarChart =  require('zingchart-react').bar;  

class AlgoliaSearch extends Component {
  // list total searches over last 30 days and will display a bar chart of daily search operations
  render() {
    if (this.props.searches) {
      let searchTotal = 0;
      let length = this.props.searches.length;
      while (length--) searchTotal += this.props.searches[length].v;

      const searchDays = this.props.searches.map((day) => day.v);

      console.log(searchDays);

      let searchData = [
        {text: "Operations", values: searchDays}
      ]

      return (
        <div>
          <p>{this.props.message}</p>
          <p>Total Search Operations (last 30 days): {searchTotal}</p>
          <BarChart id="chart2" height="300" width="600" series={searchData} legend="false" theme="light" title="Algolia Searches By Day" />
        </div>
      )
    } else {    
      return (
          <div>
            <p>{this.props.message}</p>
          </div>
      );
    }
  }
}

export default AlgoliaSearch;