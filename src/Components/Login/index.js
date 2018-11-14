import React from 'react';
import {getRandomState} from '../../services/calculations.js'

const CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_REDDIT_CLIENT_SECRET;
const USER_AGENT = 'Web:reddit-karma-farm:v0.0.1(by /u/cem4k)'
const REDDIT_STATE = getRandomState();
const REDIRECT = 'https://smiling-plant.surge.sh/'
const REDDIT_SCOPE = ['identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread']
const REDDIT_AUTHORIZE_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${REDDIT_STATE}&redirect_uri=${REDIRECT}&duration=permanent&scope=${REDDIT_SCOPE}`


function Login(props){

  return(
    <a href={REDDIT_AUTHORIZE_URL}>Login with Reddit</a>
  )
}

export default Login;
