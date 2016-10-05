const PORT = 9001;
const http = require('http');
const querystring = require('querystring');
const md5 = require('md5');
const moment = require('moment');


const server = http.createServer((req, res) => {

  let {url, method} = req;
  // console.log(md5('migsub77@gmail.com'));
  console.log(`${method} ${url}`);


  let result;
  let resultTwo;
  let results;

  switch (method) {
    case 'GET':
      let splitter = url.split('/');

      let [, path] = splitter;



      switch (splitter[1]) {
        case 'math':
          let [, ,operator, x ,y] = splitter;
   console.log('splitter:' , operator, x, y);
        switch (operator) {

          case 'add':

            result = parseFloat(x) + parseFloat(y);
            res.end(`${result}`);
            break;
          case 'divide':
            result = parseFloat(x) - parseFloat(y);
          res.end(`${result}`);
          break;
          case 'subtract':
            result = parseFloat(x) / parseFloat(y);
          res.end(`${result}`);
          break;
          case 'multiply':
          result = parseFloat(x) * parseFloat(y);
          res.end(`${result}`);
          break;
          default:
            res.statuscode = 404;
            res.end('NOT FOUND MATH');
            break;
          }

          break;

            case 'gravatar':
            let [, , email] = splitter;
            console.log('email', email);
            result = md5(email)

              res.end(`http://www.gravatar.com/avatar/${result}`);
              break;


            case 'sentence':
            let [, , sentence ] = splitter;
            console.log('sentence', sentence);
            // result = encodeURI(sentence);
            sentence = decodeURI(sentence);



            var charCount = sentence.length;
            var wordCount = sentence.split(" ").length;
            var whiteSpace = wordCount - 1;
            var wordArray = [sentence.split(" ")];
            var wordAvg = 0;
            for (var i = 0; i < wordCount.length; i++){
              wordAvg += wordArray[i];
            }
            var avgLen = wordAvg / wordCount;


            result = {
              words: wordCount,
              letters: charCount,
              avg: avgLen

            }
            res.end(`${(result)}`)
            console.log(result);
            break;

            case 'age':
            let [, , age] = splitter;
            // age = moment().format('YYYY');
            console.log('age', age)
            let day = 2016;

             result = day - age;



            res.end(`${(result)}`)
            console.log('year', result);
            break;

            case '8ball':
            let [, , ball] = splitter;
            let rando = ['an', 'array', 'of' , 'shit', 'things']

            let ok = rando.indexOf(Math.floor(Math.random(10) * (1 - 10 + 1)) + 1);
            console.log('ball', ok)

















            default:
      res.statuscode = 404;
  return res.end('Missing Stuff');

  }
}
});

server.listen(PORT, err => {
console.log(err || `Server listening on port ${PORT}`);

});
