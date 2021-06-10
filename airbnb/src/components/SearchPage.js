import React from 'react'
import "../styles/SearchPage.css";
import { Button } from '@material-ui/core';
import SearchResultContainer from '../containers/SearchResultContainer';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>
          62 stays · August 26 to August 30 · 2 guests
        </p>
        <h1>Stays nearby</h1>
        <Button
          variant="outlined"
        >
          Cancellation Flexibility
        </Button>
        <Button
          variant="outlined"
        >
          Type of place
        </Button>
        <Button
          variant="outlined"
        >
          Price
        </Button>
        <Button
          variant="outlined"
        >
          Rooms and beds
        </Button>
        <Button
          variant="outlined"
        >
          More filters
        </Button>
      </div>
      <SearchResultContainer />
    </div>
  )
}

export default SearchPage
