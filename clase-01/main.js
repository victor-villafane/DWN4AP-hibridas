const http = require("http")    //commonjs
//import http from "http"

http.createServer( function(request, response){
    console.log("Me llamaron: ...", request.url)
    // if( request.url == "/" ){
    //     response.end("LLAMARON A HOME")
    // }else{
    //     response.end(`Me llamaron 2.0: ${request.url}`)
    // }
    switch(request.url){
        case "/":
            response.write("<h1>Llamaron a home</h1>")
            response.write("<h1>Llamaron a home</h1>")
            response.end()
            break
        case "/usuarios":
            response.end(`
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
                response.end("No entendi!")
                break
    }
} ).listen(2025)