// Add links for url and connect 

const url = require('url');

const connect = require('connect');

// create func
// pass request and response

function calculate(req, res) {

    // parse the request
    const parsedUrl = url.parse(req.url, true);

    // method, first number, and second number -> parse
    const { method, x, y } = parsedUrl.query;


    // if method, first number, and second number -> present - continue
    if (method && x && y) {
    
        //make x and y ints 
        const numX = parseInt(x);
        const numY = parseInt(y);
  
        let result;

        // determine what method 
        // switch statements 
        switch (method) {

            // addition 
            case 'add':
                result = numX + numY;
                break;
            
            // subtraction
            case 'subtract':
                result = numX - numY;
                break;
            
            // multiply
            case 'multiply':
                result = numX * numY;
                break;
            
            // divide
            case 'divide':
                result = numX / numY;
                break
        
            // if method cases are executed -> default  
            default:
                res.end('Error: Invalid method parameter.');
                return;
        }
  
        // if method case executed 
        // response back to client 
        res.end(`${numX} ${method} ${numY} = ${result}`);
        } else {
      res.end('Error: Missing parameters.');
    }
}
  
// connect server
const app = connect();

// handel incoming requests 
// request - response

app.use((req, res) => {

    // check to see if url starts with lab 3 
    // if it does -> use calc method 
    if (req.url.startsWith('/lab3')) {

        calculate(req, res);

    } else {
        // if doesnt have lab 3 
        res.end('Invalid URL.');
    }
});

// start the server 

// use port 3000
app.listen(3000, () => {

  console.log('Server is running on port 3000');

});

// localhost:3000/lab3?method='method'&x='numX'&y='numY'
