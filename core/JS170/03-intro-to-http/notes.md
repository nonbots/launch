# What to Focus On

1. Develop a clear understanding of the role of HTTP in combination og multiple different technologies
2. Break HTTP and URLs into specific components and the purpose of each.

# The Application Layer 
1. Application layer is not the application itself, but rather a set of protocols which provide communication services to the application. The protocols at the application layer are the ones that the application itself most directly interacts with. Some application interact with the transport layer. It is less common to build applications that interact directly with protocols below the transports layer. 

2. The layer is focus on the structure of that message and the dat the it should contain.

3. ISO: will not talk about the layers below since they will complicate the mental model
    - session layer
    - presentation layer 
    
4. Application Layer Protocols: different rules for how different applications talk to each other at a syntactical level.
    - rules for email client to email server (SMTP, POP, IMAP)
    - web browser to web server (HTTP)

# HTTP and the Web

1. The Web is a service hosted on a web server that can be accessed via the internet. The servers stores a vast information system comprised of resources which are navigable by means of a URL, which takes you the appropriate web server. It is the primary means by which application interact with the resources which make up sthe web. 

2. a network of sub-networks that transmits bits over different divices with the help of protocols to govern the transmission of data from source to distination device. 

## History 

1. lots of information stored in different countries. Although the commputers were connected over the network, the information sotred on them was difficult to access. 

2. Hypertext created an accesible information system that exist on various computers as structured resources. These resources coule all be connected to each other using hyperlinks in order to create a world-wide web of information.

3. The system required: 
    - uniformity of the structure of the resources to be rendering correctly for viewing (HTML provided uniform structure)
    - uniformity of the address so that resources are located (URI is a string of characters that identifies a resource)

    - uniformity in the way a request for a resource was made and in the way that request was responded to. (HTTP is the set of rules which providr uniformity to the away resources on the web are transferred between appliations.)


# Some Background and Diagrams

1. Establish a mental model of "where" you are when analyzing a piece of code. 
    - client-server paradigm
        - steps:
            - client (browser) issues a request to the server. 
            - server processes the request and sends a response to browser 
        - server 
            - server could be components distributed across many physical machines ans each of them could be comprosed of multiple machines and other intermediary machines, like load balancers, etc; large server infrastructures run into the hundreds or thousands of machines.
            - simple server-side infrastucture: 
                - web server: reponds to requests for static assets: files, images, css, js, etd.
                - application server: application of business logic resides and more complicated requests are handled; where server-side code lives when deployed. Consults with a persistent data store to retrieve or create data. 

                - data store  - a relation database or simple file that saves data in some format for later retrieval and processing. Used to persist our data between stateless request/repsonse cycles.
                
## HTTP over TCP/IP 

1. HTTp on the apllicaito layer is concerned with structuring the messages taht are exchanged between the applications; TCP/IP is ensuring the request response cycle gets completed betweem your browser and the server.

# URLs

## URIs verse URLs 

1. URI is a sequence of characters that identifies an abstract or physical resource

2. URL is the subset of URIs that ins addition to identifying a resource, provide a means of location the resource by describing its primary access mechinaism, its network location

## Schemes and Protocols 

1. the scheme is the compoment of a URL that prepends the :. 

2. In the context of a URL there is a relationship in that  the scheme indentifies which protocol family should be used to access the resource. The protocol in this context refers to the family of protocols not the specific version. 

## URLs and Filepaths

1. In the early day of the Web, the URL repersented a physical file location on the Web server

2. content now is dynamically generated which takes place on the server, where server-side freamworks or applicatio combinw templates with stored data to produce HTML pages which then form the body of a HTTP response. 

3. Today there is a rise in popularity with client-side frameworks.

4. The URL used is determined by the applicaiton logic not the file structure on the server. The involves URL pattern-matching to match the path to a predefined 'route' which then execute some specific logic. 

# Practice Problems URL Components 

# The Request Response Cycle 

1. What are the required components of an HTTP request? What are the additional optional components?
    - start-line or request line 
        - HTTP method: GET, POST, PUT, etc
        - path (request-URI; the path to the resource and the optional parameters)
        - HTTP version as of HTTP 1.0
2.  What are the required components of an HTTP response? What are the additional optional components? 
    - a status line with a status code.
    - headers and body are option. (Why are headers and body optional)?

3. What determines wheather a request should us GET or POST as its HTTP 
    - GET retrieves data from the server
    - POST changes the data in the server 
# Summary 
