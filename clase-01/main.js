const http = require("http")    //commonjs
//import http from "http"

http.createServer( function(request, response){
    console.log("Me llamaron: ...", request.url)
    // if( request.url == "/" ){
    //     response.end("LLAMARON A HOME")
    // }else{
    //     response.end(`Me llamaron 2.0: ${request.url}`)
    // }
    response.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>`)
    switch(request.url){
        case "/":
            response.write("<h1>Llamaron a home</h1>")
            response.write("<h1>Llamaron a home</h1>")
            
            break
        case "/usuarios":
            response.write(`
                <table>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>nombre</td>
                    </tr>
                </table>`)
                break
            default:
                response.write("No entendi!")
                break
    }
    response.write(`</body></html>`)
    response.end()
} ).listen(2025)