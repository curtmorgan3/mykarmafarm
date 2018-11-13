import axios from 'axios'

const BASE_URL = 'https://www.reddit.com/';
const SEARCH = 'search.json?limit=5&restrict_sr=1&t=month&q='

export async function getPosts(currentSub){
  const resp = await axios.get(BASE_URL+`r/${currentSub}/`+SEARCH+currentSub);
  const posts = resp.data.data.children;
  return posts;
}
