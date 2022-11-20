//const fs = require("fs");
//const url = require('url');
import * as fs from 'fs'
import * as url from 'url'
import * as http from 'http';

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



server.listen(process.env.PORT || 8080, () => {
    console.log("server is running");
});