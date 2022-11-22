import express from 'express';
import fs from 'fs/promises';
import * as url from 'url';
import * as http from 'http';


const app = express();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  let imena = [];
  try {
    imena = (await fs.readFile('imena.txt')).toString().trim().split('\n');
  } catch (e) {}

  res.render('index', { imena });
});



const server = http.Server((req, res) => {
  let path = url.parse(req.url)["pathname"]
  if (path.substring(0,3) == "/id") {
      path = "/meme.html"
  }
  if (path == "/") path = "/index.html"
  const rs = fs.createReadStream("./files" + path);
  rs.pipe(res);
  rs.on('error', (err) => {
      res.statusCode = 404
      const error_page = fs.createReadStream("./files/error.html")
      error_page.pipe(res);
  });
})


app.get('/pozdrav', async (req, res) => {
  const ime = req.query.ime;
  console.log('Pozdravljen', ime);

  await fs.appendFile('imena.txt', ime + '\n');

  res.render('pozdrav', { ime });
});

app.listen(5500);
