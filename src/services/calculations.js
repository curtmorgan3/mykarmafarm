import moment from 'moment'

export function calculateAverage(posts){

  const data = {
    '00': {ctr: 0, karma: 0, average: 0}, '08': {ctr: 0, karma: 0, average: 0}, '16': {ctr: 0, karma: 0, average: 0},
    '01': {ctr: 0, karma: 0, average: 0}, '09': {ctr: 0, karma: 0, average: 0}, '17': {ctr: 0, karma: 0, average: 0},
    '02': {ctr: 0, karma: 0, average: 0}, '10': {ctr: 0, karma: 0, average: 0}, '18': {ctr: 0, karma: 0, average: 0},
    '03': {ctr: 0, karma: 0, average: 0}, '11': {ctr: 0, karma: 0, average: 0}, '19': {ctr: 0, karma: 0, average: 0},
    '04': {ctr: 0, karma: 0, average: 0}, '12': {ctr: 0, karma: 0, average: 0}, '20': {ctr: 0, karma: 0, average: 0},
    '05': {ctr: 0, karma: 0, average: 0}, '13': {ctr: 0, karma: 0, average: 0}, '21': {ctr: 0, karma: 0, average: 0},
    '06': {ctr: 0, karma: 0, average: 0}, '14': {ctr: 0, karma: 0, average: 0}, '22': {ctr: 0, karma: 0, average: 0},
    '07': {ctr: 0, karma: 0, average: 0}, '15': {ctr: 0, karma: 0, average: 0}, '23': {ctr: 0, karma: 0, average: 0},
  }
  for(let i = 0; i<posts.length; i++){
    let post = posts[i];
    const time = moment.unix(post.data.created_utc).format('HH:mm:ss a');
    const hour = time.charAt(0) + time.charAt(1)
    data[hour].ctr++;
    data[hour].karma += post.data.score;
    data[hour].average = Math.ceil(data[hour].karma / data[hour].ctr)
  }
  return Object.entries(data);
}
