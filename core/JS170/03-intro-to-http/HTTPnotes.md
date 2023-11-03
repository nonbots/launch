# Background 
## A brief Overview & History
1. The browser is the interface or window, through which you interact with the world wide web
2. Underneath is a collection of files (CSS, HTML, Javascript, videos, images)
3. This files were sent from a server to your browser, the client, by an application protocol, HTTP
4. HTTP - serves as a link between applications and the transfer of hypertext documents. The rules are: 
    - a client makes a request to a server and waits for a response, known as request response protocol
    - the request and response are strings that follow a standard format that the other machine can understand.
5. HTTP versions:
    - first version returned only HTML pages 
    - HTTP/0.9 - document version 
    - HTTP/1.0 - transmit CSS files, videos, scripts and images.
    - HTTP/1.1 - reuse established connections for subsequent requests

### How the Internet Works
1. DNS (Domain Name System) - serves to map the doman name in the URL to the IP address. 
    - DNS severs exist in a large world-wide network of hierarchically organized DNS servers and nos single DNS server contains the complete database. If a DNS server does not contain a domain name it will route the the request to the next DNS server in the hierarchy.
    - the host device stores a record of the IP address for the domain name in its DNS cache for later use.
  
2. The packet encapsulates some text in its payload from the application layer to be sent over the internet.

3. Since the sender (web browser) and the web server has an agreed upon protocol, the server can take apart the request and send back a response which is also in the from of strings which the web browser will process into the structure and content that you see on the screen.

### Clients and Services

1. a web browser is an application client. 

### Resources 
1. URL are used to interact with resources on the internet.

### Statelessness
1. HTTP is a stateless protocol which means that the server does not need to hang on to information or state between requests. Like a history(memory)

## What is URL?
1. a URL is the address to a resource
    - scheme : tell the client how to access resources, indicates the protocol
    - host: tells the client where the source is hoisted or located
    - port: required if you want to use a port other than the default port 80.
    - path: what local resource is being requested (optional)
    - query string: made up of query parameters used to send data over the server (optional)

### Query Strings/Parameters

1. components:
    - ? is the start of a query string
    - search=ruby:  parameter is a name/value pair
    - & is resevered character used when add ing more parameters to the query string
    -  http://www.phoneshop.com?product=iphone&size=32gb&color=white
        - are we passing arguments to the server 
        - URL issues an HTTP GET request 
    - have a maxium length 
    - visible in the URL
    - space and special characters can not be used.
    
### URL Encoding 

1. Reserved or unsafe ASCII characters which are not being used for their intended purpose and characters not in the ASCII character set have to be encoded by replacing non-conforming characters with a % sign followed by two hexadecimal digits

# HTTP 

## Making Requests

### HTTP Request with a Browser 

### HTTP Request wiith an HTTP Tool

### Using the Inspector

### Request Methods

1. What is this? Do not need the flag to work on my machine
    - -A 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36'

    - $ curl -X GET "https://www.reddit.com/" -m 30 -v

### Get Requests

1. columns: 
    - method: HTTP Request 
    :
        - GET: retrieving information 
            - initiated by clicking a link or via the address bar of a browser
            - the browser also request for referenced resources witn the resource of HTML file. However, the HTTP tool will not
    - Status: reponse status of a request; every request gets a response even if it's an error.

### Post Requests

1. POST: initiate some action on the server or send data to a server.

2. Request have headers and those include response headers. Location is a response header. The browser accesses the Location header and automactically issues a brand new request to the specified URL. The Make a bet form is the response to the second request

### HTTP Headers

1. allow the client and server to send additional information during the HTTP resquest response cycle. 
    - request: give more information about the client and the resource to be fetched
        - host: the domain of the server; ex. www.reddit.com 
        - accept-language: list acceptable languages
        - userAgent: a strign that identifies the client
        - connection - type of connection
    - respond: offers more infornation, meta data, about the resource being sent back.
        - content - encoding: type of encoding used on the data 
        - server - server name 
        - location - notify client of new resource location 
        - content-type: type of data the response contains.

## Processing Responses 
- raw HTTP data sent by the server 
    - Status Code: it signifies the status of the request sent by the server
        - 200 - successful 
        - 302 - the requested recource has changed temporarily. Usually results on a redirect to another URL.
            - when a resource is removed the solution is to re-route the request from the original URL to a new URL in the Location respose header, known as redirect.
            - For example, if you are not signed in, the browser will send you to a sign in page. After signing in you'll be redirected to the original page you were trying to access.
        - 400 - the requested resouce cannot be found 

        - 500 - the server has encountered a generic error
    - status text displays the description of the code; listed under the status column.

### Summary

## Stateful Web Applications

### Introduction 

1. The web server does not hang on to information between each request/ response cycle. HTTP is stateless. This means different requests are not aware of each other.
    - if we clidk around (which generate new requests to the server) we are not logged out, it somehow knows it is still logged in.

- Developers simulate a stateful experience by
    - sessions
    - cookies 
    - asynchronous JS calls or AJAX

### A stateful App

1. The server appears to remember previous information even after sending a new request
    1. URL request to web page 
    2. logining in 
    3. refreshing the page

### Sessions

1. Sessions: server send some form of a unique token as part of the request which allows it to identify clients, known as the session identifier. The passing of a session id back and forth creates a  presistent connetion between request. (is this similiar to a port?)
    - process:
        - every request must be inspected to see if it contains a session identifiier.
        - if the request contain a session id, the server must check to ensure that this session id is still valid
        - server retrieves the session data based on the session id.
        - server recreate the application state from the session data and send it back to the client as the response.
    - disadvantages:
        - server works very hard to simulate a stateful experience 
        - every request still gets its own response, evne if most response is identical to the previous response.

### Cookies 

1. A piece of data, small file, that's sent from the sever and stored in the client, the browser,  that constian the session information during a request/response cycle. 
    - the seriver sends session information and sets it in your browser cookie on your local conputer.
    - the client side cookie is compared with the server-side session data on each request to identify the current session which identifies the browser on your computer
    - the session id is stored on the client and used as a key to the session data stored stored on the server side to retrieve the session.
    - session ids are unique and expired in a realtively short time. This means that login after the session is required

### AJAX

1. Asynchronous JavaScript and XML - allows browsers to issue requests and process responses without a full page resfresh
    - all requests or callback are sent to an api stack pushed to a queue at timeout and push to the JS stack when everything is finished executing on the stack. This gives the user the illusion of the page loading faster while other things in the back finishing executing. 
    - request are just like normal requests: they are sent to the server with all the normal componnets of an HTTP request, and the server handles them like any other request. The only diffference is that instead of the browser processing the response right away before going to the next execution, the response is processed by a callback, client-side code, within which sends the session data to an api stack. 

### Summary

## Security 

1. Someone can steal browser's session id and log in as you.
    - session id uniquely identifies you to the server, if someone else copied thes session id, they could craft a request to server and pos as you without knowing your username and password.
    - HTTPS request/repsonse is encrypted before being transported to the network use a cryptogtaphic protocol called TLS, earlier version were called SSL(Secure Sockets Layer)
        - use certificates to communicate with remote servers and exchange security keys before data encrytion happens. 
        - modern browserd do some high level check on a website's certificate

2. Can someone peek into my session id on the server side?

### Same-origin policy 

1. It permits unrestricted interaction between recources originating from the same origin,the scheme, host and port, but restricts certain interactions between resources originating from different origins where resources are being a accessed programmmcatically using APIs. However, requests such as linking, redirects, or form submissions to different origins are typically allowed. As well as embedding of resources from other origins in scripts, css, images and other media, fonts, iframes. 

2. However, restriction of cross-orgin requests can be an issue with web devekopers who have a legitimate need. 
    - CORS: cross-origin resource sharing; a mechanism that allows interations that would normally be resticted cross-origin to take place by adding new HTTP headers to allow servers to serve resources cross-orgin to certain specified origins. 
        - the browser sends an Origin: example.com header to something.com when it requests the resources. If something.com wants to allow cross domain across to example.com then it must include the appropriate access-control-allow-origin header. if the sending browser sees the header in the response it will accept and process the response if not it will not accept or process the response.

### Session Hijacking 

1. When a sttackers get a hold of the session id, and uses it to pretend to be you, the browser

#### Countermeasure for Session Hijacking 

1. reset sessions - a successful login must render an old session ide invalid and crate a new one.
2. setting an expiration time on sessions.
3. use HTTPS across the entire app to minimize the change that an attacker can get to the session id. 

### Cross-side Scripting (XSS)

1. allow users to input HTML or JavaScript that ends up being ends up being displayed on the site directly. This means users can add raw HTML or JS to the text area and submit it to the server for execution if the sevrver side code doesn't do any sanitization of input.

#### Potential solutions for cross-site scripting 

1. sanitize user input by eliminating tags
2. escape all use input data when displaying it so that the browser does not interpret it as code.

### Summary

