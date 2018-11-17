import React from 'react'
import axios from 'axios'
import moment from 'moment'
import {getRandomState, getTimer} from './calculations.js'
import queryString from 'query-string'

const CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_REDDIT_CLIENT_SECRET;
//*******Reddit URLs for auth ********
const USER_AGENT = 'Web:reddit-karma-farm:v0.0.1(by /u/cem4k)'
const REDDIT_STATE = getRandomState();
const REDDIT_SCOPE = ['identity, edit, flair, read, submit']
const BASE_URL = 'https://www.reddit.com/';
const AUTH_URL = 'https://oauth.reddit.com/';
const REDIRECT = 'https://economic-vacation.surge.sh/'
const REDDIT_AUTHORIZE_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${REDDIT_STATE}&redirect_uri=${REDIRECT}&duration=permanent&scope=${REDDIT_SCOPE}`
//************************************
const TOP = 'top.json?limit=100&t=week'

let userAuthToken = '';
let userRefreshToken = '';

//Check to see if user is logged in
export async function loggedIn(){
  const params = queryString.parse(window.location.href)
  if (params.code){
    //logged in
    return params.code;
  }else{
    //not logged in
    return false;
  }
}

//Send user to reddit to enter credentials
export async function login(){
  window.location.href = REDDIT_AUTHORIZE_URL
}

//External link to reddit OAuth, get user permissions, pass access token to state.access_token
export async function authorize(code){

  let data = `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT}`;
  let config = {
    headers:{Authorization:'Basic '+btoa(CLIENT_ID+':'+CLIENT_SECRET)}
  }
  const user = await axios.post(`${BASE_URL}api/v1/access_token`, data, config);
  return user;
}

//Refresh access token, set to happen automatically after 59 minutes
export async function refreshToken(){
  console.log('refresh');
  let data = `grant_type=refresh_token&refresh_token=${userRefreshToken}`;
  let config = {
    headers:{Authorization:'Basic '+btoa(CLIENT_ID+':'+CLIENT_SECRET)}
  }
  const user = await axios.post(`${BASE_URL}api/v1/access_token`, data, config);
  return user;
}

//Get top 100 posts of the week from currentSub, pass them to state.posts
export async function getPosts(currentSub){
  const resp = await axios.get(BASE_URL+`r/${currentSub}/`+TOP);
  const posts = resp.data.data.children;
  return posts;
}

//Get user information, pass name to state.currentUserName, pass user data to stat.currentUser
export async function getUserData(userAuth, refreshToken){
  userAuthToken = userAuth
  userRefreshToken = refreshToken
  const resp = await axios.get(`${AUTH_URL}api/v1/me/`, {headers: {Authorization: 'bearer ' +userAuthToken}});
  return resp;
}

//Post to a subreddit on user's behalf
export async function newPost(data, time){
  const timer = getTimer(time); //returns amount of miliseconds until request should be made
  console.log(timer);
  setTimeout(makePost(data),timer)

}
export async function makePost(data){
  const url = queryString.stringify(data);
  try{
    const post = await axios.post(`${AUTH_URL}api/submit.json`, url, {headers: {Authorization: 'bearer ' +userAuthToken}});
  }catch(error){
    console.log(error);
  }

}
