const express = require('express');
const hbs = require('hbs')
// We create our own server named app
// Express server handling requests and responses
const app = express();
// Make everything inside of public/ available
app.use(express.static('public'));


hbs.registerPartials(__dirname + '/views/partials');

//Sets the HBS views folder 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');



/**INBETWEEN HERE */


const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()
const randomBeer = punkAPI.getRandom()

randomBeer.then(beer => {
  console.log(beer[0].name)
})


/**INBETWEEN HERE ^*/















// our first Route
// app.get('/', (request, response, next) => {
//     console.log(request);
//     response.send('<h1>Welcome Ironhacker!!!!. :)</h1>');
// });







app.get('/players', (req, res, next) => {

  let data = { players: ['ronaldo', 'messi', 'beckham'] }

  res.render('players', data);
});

app.get('/team', (req, res, next) => {

  const players = [
    {
      'name': 'Rusell', 
      'lastName': 'Westbrook', 
      'team': 'OKC', 
      'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
      },
    {
      'name': 'Kevin', 
      'lastName': 'Durant', 
      'team': 'GSW', 
      'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
    },
    {
      'name': 'Lebron', 
      'lastName': 'James', 
      'team': 'CLE', 
      'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
    },
    {
      'name': 'Emanuel', 
      'lastName': 'Ginóbilli', 
      'team': 'SAS', 
      'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
    },
    {
      'name': 'Kyrie', 
      'lastName': 'Irving', 
      'team': 'BOS', 
      'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
    },
    {
      'name': 'Kobe', 
      'lastName': 'Bryant', 
      'team': 'LAK', 
      'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg'
    },
  ]
  res.render('team', { players });

});















app.get('/', (req, res, next) => { // this is the newer way by rendering hbs 
  // send views/index.hbs for displaying in the browser
  //go intu db and you'll come by data 

  let data = { 
    name: "Ironhacker",
    bootcamp: "IronHack WebDev",
    wicked:'wicked',
    makeItHtml: "<h1>PISSA`</h1>",
    team: [
      'kobe', 'lebron', 'jordan'
    ],
    gameOn: true
  };

  res.render('index', data);
});










//This is the older way of doing it with just sending html 
app.get('/cat', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat heyyyyy wahat up</h1>
          <p>This is my second route</p>
          <img src="./images/cool-cat.jpg" />
        </body>
      </html>
    `);
  });









  

  // Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});