const http = require('http');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hola Mundo con Ada School! \n" );
});

const port = 8080;

server.listen(port, ()=>{
    console.log(`Servidor en funcionamiento en el puesto \n http://localhost: ${port} `);
})





