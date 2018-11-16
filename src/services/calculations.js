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

export function findBestTime(average){
  let best=['best', {ctr: 0, karma: 0, average: 0}];
  average.map(hour => {
    if(hour[1].average > best[1].average){
      best = hour;
    }
  })
  return best;
}

export function randMinutes(){
  const minutes = Math.floor(Math.random() * Math.floor(59) );
  return minutes;
}

export function getRandomState(){
  let text = '';
  let possibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < 10; i++){
    text += possibilities.charAt(Math.floor(Math.random()*possibilities.length));
  }
  return text;
}

export function getTimer(bestTime){

  const s = moment().valueOf();
  const now = moment(s).format('HH:mm'); //'15:23'
  let nowSplit = now.split(':') //['15', '23']
  let nowHour = parseInt(now); //15
  let nowMinute = parseInt(nowSplit[1]); //23

  const timeSplit = bestTime.split(' ') //['10:45', 'pm']
  let time = timeSplit[0] //'10:45'
  let minSplit = time.split(':'); //['10', '45']
  let bestHour = parseInt(time); //10
  let bestMinute = parseInt(minSplit[1]) //45

  if(timeSplit[1]==='pm'){
    bestHour += 12;  //convert to 24 hour time
  }

  let postHourTimer = bestHour - nowHour;
  if(postHourTimer < 0){
    postHourTimer += 24;
  }

  let postMinuteTimer = bestMinute - nowMinute;
  if(postMinuteTimer < 0){
    postMinuteTimer += 60;
    postHourTimer --;
  }

  console.log('post in '+postHourTimer+' hours and '+postMinuteTimer+' minutes');

  let timer = 0;
  timer += (36000000 * postHourTimer);
  timer += (60000 * postMinuteTimer);

  return timer;

}
