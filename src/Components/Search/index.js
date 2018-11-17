import React from 'react';
import './stylesheet.css'

function Search(props){
  const currentSearch = props.state.currentSearch;
  const posts = props.state.posts;
  return(
    <div className='search-view'>
      <div className='search-image-wrapper'>
        <img src={require('../../images/snoo_head.png')} alt={'Snoo Head'} />
      </div>
      <div className='search-field'>
        {props.state.loggedIn ? <button onClick={()=>props.setView('posts')}>My Karma Farm</button>
                              : <button onClick={()=>props.setView('welcome')}>Back</button>
        }
        <h3>r/</h3>
        <div className='search-form'>
          <form onSubmit={props.handleSubmit}>
            <input type='text'
                  name='currentSearch'
                  value={currentSearch}
                  onChange={props.handleChange}
            />
            <input type='submit' value='Search' />
          </form>
       </div>
      </div>
    </div>
  )
}

export default Search;
