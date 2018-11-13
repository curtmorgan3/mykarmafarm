import React from 'react';

function Search(props){
  const currentSearch = props.state.currentSearch;
  const posts = props.state.posts;
  return(
    <div>
      <h1>Search</h1>
      <form onSubmit={props.handleSubmit}>
        <input type='text'
               name='currentSearch'
               value={currentSearch}
               onChange={props.handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Search;