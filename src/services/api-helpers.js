import axios from 'axios'

const BASE_URL = 'https://www.reddit.com/';
const SEARCH = 'search.json?limit=5&restrict_sr=1&t=month&q=';
const TOP = 'top.json?limit=100&t=week'

export async function getPosts(currentSub){
  const resp = await axios.get(BASE_URL+`r/${currentSub}/`+TOP);
  const posts = resp.data.data.children;
  return posts;
}
