# Introduction 

The concepts covered aren't just a set of abstract rules and ideaa that exist in a vacum; they are the way they are because they were designed and built that way. The specifics of these concepts at the implementation level are subject to change over time. We'll explore how and why they've changed.

# What to Focus On 

1. Be aware of how and why HTTP is evolving due to it's limitations which can make us better informed us when building networked applications.

2. Be aware of the functionality that browser APIs can provide which HTTP alone cannot can help us  develop applications

3. Be aware that Client-Server isn't the only network paradigm

# Past, Present, and Future

HTTP is an evolving protocol rather than something that is static and fixed.

## HTTP/0.9

1. no version number 
2. request - one line protocol (no headers or request body)
    - only GET method
    - path to the resourde server
3. response - single hypertext document (no headers)
    - end of response is signalled by the server closing the connection.

## HTTP/1.0

Mass adoption of the internet and use of the web lead to:

1. improvement in browser technology paved way for commercial use, Netscape Navigator 1.0

2. Telecommunications companies started providing internet access to the public via dial-up connections.

3. The World Wide Web Constortium and the HTTP Workign Group formed and established a framework for the documnetation and standardization of web technologies and structured approach to continued development.

4. A number of improvements to HTTP due to growing set of practices and usage patterns which included:
    - head and post methods
    - Request_URI portion of the request line could be a path or an absolute URI
    - HTTP version added to request line.
    - response included a status line
        - status code
        - status text 
        - HTTP version used for response
    - meta-data to requests and responses in the form of headers as resquest and responses became more varied and complex
5. The developments were a response to other developments or the changing internet ecosystem.

## HTTP/1.1

The first standard version of HTTP which sought to resolve ambiguities,interoperability, and performance for more demanding content

1. connection re-use, twhere the same TCP connection could be used form making multiple requests, reducing TCP handshake, opened up possibilityh of pipelining request.

2. implementation of cache-control mechanism.

3. addition of HTTP methods: PUT, DELETE, TRACE, and OPTIONS

## HTTP/2

1. Provide multiplexing instead of pipelining where multiple requests can still be sent at the same time, but in parallel instead of having to a reliance on message order.

2. compression of headers 

## HTTP/3

1. A new and alternative protocol QUIC provides the reliability and security features that TCP and TLS together provides with less complexities and inefficiencies.

# Web Performance and HTTP Optimizations

As developer it is important to have an eye for performance and strive to improve the performance of our projects

## The birth of the modern web

Web applications use JS, AJAX, and many other technologies to give users an interactive experience. We have a dependency graph created with each load as the application needs to build the basic structure of the content, render the stylesheets used to define the layout, fetch all the needed resources and run the scripts used to respond to user interaction.

## Brower Optimizations

Types of browser optimizations:

Document-Aware OPtimizations: occurs when browser can identify and priortize fetching resources. Prioritsing resources that take longer first

2. Speculative Optimizations: Occurs when browser learns the navigation patterns of the user over time and sttempts to predict user actions.
    - pre-resolving DNS names
    - pre-rendering pages
    - open TCP connection in anticipation of an HTTP request when a user overs a link.

## Latency as the main limiter

Optimizatsions can range fro eliminating unnecessary roundtrips, minimizing resources to be featched, adding components to our system.

## Further Optimizations

Questions to ask:
1. Do you need all those resoures?
    - limit the number of resources ot be fetched
2. compression Techniques
   - compression: reduces the sizes of the resources
   - minification: removing unecessary or redundant data without affecting how it's processed by the browser.
3. reusing TCP Connections
    - keepalive connections which is standard with HTTP/1.1. Check your application and server configuarations to ensure that they support the feature
4. DNS Optimizations
    - the browser is responsible for perfroming the initial DNS lookup, and those required for various dependencies 
        - reduce the number of hostnames to be resolved
        - download any external resources and host them locally on the server that is hosting the web app.
        - faster DNS provider 
5. caching on the server side 
     - store content that was recently accessed bt a user so that the next time that conntent is requested it can be deliverd more quickly thna requesting it from the application server.
    
# Browser Networking APIs

HTTP request-response model provides limitations in regards to real-time data synchronization. Browser APIs give us a different way to achieve real-time data synchronization: 
- XHR
- SSE
- WebSocket 

## HTTP and Real-Time Data Synchronization 

HTTP falls down in terms of real-time synchronization which is when an event takes place without the user doing anything. A result of something changing on the server triggers a notification on the browser with the use of APIs:

1. XHR (XMLHttpRequest): enables clients to manage requests and responses programmatically and asynchronously. It is a key component for AJAX.
    - XML :  a markup language that defines a set of rules for encoding documents
    - with XHR, web pages could send a request to the server an then use the response to alter just a small part of the page in the browser thorugh DOM manipulation
    - polling where an application in the background issues a request to the server periodically to check for updates.
    - long polling: the client makes a request, but rather than returning an empty or negative response, the server keep the connection idle until an update is avaiable and the is available and then issues a responses

2. SSE : server-sent events; a networking API that enables effcient server to client streaming of text-based event data without the client needing to send a request for the updates by keep the TCP connection open. Disadvantages:
    - API only works with a client-server model
    - do not allow resquest from streaming 
    - streaming support is designed for transfer UFT-8 data not binary data

3. WebSocket: enable us to layer and deliver arbitrary application protocols between the client and server such that either side can send data to the other at any time known as bidirectional communication which is a perfect for delivering custom applciation protocols in the browser. Disadvantages:    
    - no state management
    - no compression
    - no caching
    - other browser services
    
# Peer to Peer Networking

A P2P network doesn not have clear separations of client and server roles. Each device acts as a note capable of performing the functions of both a client and server

## Use Cases

There is no need to set up and maintain a server to provide the system with functionality. Since all nodes perform the same function, the network is more resilent. Since communication does not need to be routed through a central point latency can be reduced. It is useful fro voice or video calling (real-time communicaton)

## Complexities of P2P

1. discovery of nodes on the network
    - flooding: messages are sent out to the network and each node forwards it until a specified number of network hops 
    - distributed hash table: a table of key-value pairs where the key is a filename and the value id of the network node. The table is split into parts to map the structure of nodes  within the network each with different responsiilities of maintaining different parts of the table.
    - hybrid model: once a node is connected to a server it can communicate with other nodes peer to peer that is also connected to the server

## WebRTC

a collection of standards, protocols, APIs available in most modern web browsers
- uses UDP combined with other protocols for session establishment and maintenance(STUN, TURN, ICE, DTLS(sercurity), SRTP,SCTP(congestion and flow control))

Provides real-time communication functionality within the browser which allows the browser to act as a node within a P2P communication network.

# Summary 

1. Why did HTTP's implementation change over time? 

    HTTP's evolution is due to increasing user demands for more resources and interactions on the Web which could not be handle by the first vesion of HTTP/0.9. These demands resulted in the release of many HTTP versions. Each successor added in features that resolved the problems presented by the current demands that the preceding version did not fullfill. 

2.  For each HTTP version, what were user demands for the Web and the problems that arise from those demands and the solution to that problem?

    - HTTP/0.9 (one-line protocol)
        - Demand: To easily access information accross computers at CERN (European Organization for Nuclear Research)
        - Problem: Information was difficult to access across different computers
            - incompatibilities of the platforms and tools (no common interface)
                - log on a specific computer 
                - use varying programs or commmands to locate and access the information using the IP address 
            - information was accessed through a hierarchical tree 
        - Solution: Combined internet connectivity and emerging tech, hypertext.
            - information exist as structured resources and are linked to each other through hyperlinks to create a web. 
        - implementation:
            - request line 
                - method (only GET)
                - path (to the resource in the host server)
            - response 
                - hypertext documument 
                - end of response signalled by server closing connection

    - HTTP/1.0 (more structured request and response )
        - Demand: a growing set practices and usage patterns by the masses
        - Problem: Users wanted to do more that simply read documents on the web.
        - Solution:
            - request line became more flexible and varied 
                - added HEAD and POST methods
                - the path can now be a absolute path or absolute URI
                - HTTP version 
            - responses 
                - status line
                    - status code
                    - status text 
                    - HTTP version used for the response
            - Headers for request and responses

    - HTTP/1.1 (standardization and preformance)
         - Demand: want to create more complex webpages
         - Problems: 
             - build-in inefficiencies 
                - performance
             - no standardization
                - ambiguities
             - interoperablity 
         - Solution: 
             - standardization of features implemented in the previous version 
             - connection re-use allowed for pipelining requests
             - cache-control mechanisms 
             - addition of PUT, DELETE, TRACE, OPTIONS method 
    - HTTP/2
        - Demand: the use of AJAX for intractivity 
        - Problem: required more HTTP request to be made on each load webpage. The server must respond to the request in the order they are sent. If a request takes to long to process this can create a head of line blocking
        - Solution: multiplexing instead of pipelining where requests are sent in pararllel at the same time.
        - compression of headers which are a large portion of the request or response
    - HTTP/3
        - Demand: better reliable transfer and secure transfer in one protocol at the transport layer
        - Problem: have to inheret the complexities and inefficiencies of both protocols
        - Solution: Quick UDP Internet Connections (QUIC)
            - Built on top of UDP 
            - reduction in establisbment time 
            - improved congestion control
            - multiplexing without head of line blocking
            - forward error correction
            - connection migration
            - reduced the timeout for connectin go a host if a TCP handshake alone can't be completed within 5 seconds.


3. What is the browser and does it help in optimization? 
    a native application program running on the client machine provides access to the web through hypertext and hyperlinks. 
    Today the they also optimize for performance for the web. 
        - Document-Aware: fetches resources that takes longer first 
        - speculative: browser learns the navigation patter of the user over time to predict users next move.
            - pre-solving DNS names
            - pre-rendering pages 
            - open a TCP connection when user hovers over a link.

4. What are the things you can do as a developer to optimize for performance?
    1. Fetching less resources
    2. Compressing the data before transporting
    3. Resusing TCP Connections 
    4. reduce request to a DNS 
        - reduce the numeber of hostnames
        - download all the resources onto a local computer.  
    5. catching on the server-side.

4. What are hyperText, hyperLinks, and the web?

    Text, node, referring to other text that the reader can immediately access. Technically, they are references, hyperlinks, to a address of the host computer that stores that information.
    A network of hyperlinks form a web.

5. What is a URI? 

    Uniform Resource Identifier a sequence of characters that identifies an abstract or physical resource. It can be further classified as an URL, Uniform Resource Locator, a URN, uniform Resource Name, or both. They are a subset of URIs. URN has been used to refer to URIs under the URN scheme and are designed to provide a persistent and location-independent identifier for resources.

    - URI
      - URL: it also provide a means of location the resource by desribing it primary access mechanism (network location)
        - scheme
        - domain
        - path
      - URN
        - namespave identifier
        - specific identifier

6. What is a Request-URI?

    identifies the resource upon which to apply the request.
    - absoluteURI: when a request is being made to a proxy (involves the scheme, etc)
        -  GET http://www.w3.org/pub/WWW/TheProject.html HTTP/1.0
    - absolute path: the path to a resoure once on an origin server or gateway.
        - GET /pub/WWW/TheProject.html HTTP/1.0
