import React from 'react'
import "../styles/SearchResultContainer.css";
import searchData from '../data/searchData.json';
import SearchResult from '../components/SearchResult';

function SearchResultContainer() {
  return (
    <>
      {searchData.map(item => (
        <SearchResult 
          key={item.id}
          img={item.img}
          location={item.location}
          title={item.title}
          description={item.description}
          star={item.star}
          price={item.price}
          total={item.total}
        />
      ))}
    </>
  )
}

export default SearchResultContainer
