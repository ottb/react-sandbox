import React from 'react';
import PropTypes from 'prop-types';
import { bar as BarChart } from 'zingchart-react';

const AlgoliaSearch = (props) => {
  // list total searches over last 30 days and will display a bar chart of daily search operations
  if (props.searches && props.searches.length) {
    let searchTotal = 0;
    let length = props.searches.length;
    while (length--) searchTotal += props.searches[length].v;

    const searchDays = props.searches.map((day) => day.v);

    let searchData = [
      {text: "Operations", values: searchDays}
    ]

    return (
      <div>
        <p>{props.message}</p>
        <p>Total Search Operations (last 30 days): {searchTotal}</p>
        <BarChart id="chart2" height="300" width="600" series={searchData} legend="false" theme="light" title="Algolia Searches By Day" />
      </div>
    )
  } else {    
    return (
        <div>
          <p>{props.message}</p>
        </div>
    );
  }
}

AlgoliaSearch.propTypes = {
  searches: PropTypes.array,
  message: PropTypes.string
}

export default AlgoliaSearch;