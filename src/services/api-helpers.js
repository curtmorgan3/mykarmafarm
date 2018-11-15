import axios from 'axios'
import {getRandomState} from './calculations.js'
import queryString from 'query-string'

const CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_REDDIT_CLIENT_SECRET;
const BASE_URL = 'https://www.reddit.com/';
const REDIRECT = 'https://economic-vacation.surge.sh/'
// const SEARCH = 'search.json?limit=5&restrict_sr=1&t=month&q=';
const TOP = 'top.json?limit=100&t=week'

export async function getPosts(currentSub){
  const resp = await axios.get(BASE_URL+`r/${currentSub}/`+TOP);
  const posts = resp.data.data.children;
  return posts;
}

export async function login(){

  const params = queryString.parse(window.location.href)
  console.log(params.code);
  if (params.code){
    //logged in
    console.log('logged in');
  }else{
    //not logged in
    console.log('not logged in');
  }
  let code =  params.code
  let data = `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT}`;
  let config = {
    headers:{Authorization:'Basic '+btoa(CLIENT_ID+':'+CLIENT_SECRET)}
  }

// TODO: Oauth is working here, I THINK. access_token is being returned, need to wired up button to do /me/prefs get requests to test access
  const user = await axios.post(`${BASE_URL}api/v1/access_token`, data, config);
  console.log(user);
  // const resp = await axios.get(`https://www.reddit.com/api/v1/me/prefs`);
  // console.log(resp);


}
