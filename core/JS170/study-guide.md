# The Internet

## Have a broad understanding of what the internet is and how it works

The internet is a network of sub-networks transmitting bits over the pyhsical network infrasture (devices, routers, switches, cabels, radio waves, etc) with the help of protocols that govern the transmission of data in order to allow different devices, os, configurations, and applications of different use cases to meet the intented requirements of communication. 

|ISO Model (scope) | TCP/IP Model (function) | Physical Devices | Protocols | 
|----------|--------------|------------------| ----------|
| Applicaton | [`Application`](#5-application) | computer | HTTP (Browser) |
| Presentation | [`Application`](#5-application) |computer|
| Session | [`Application`](#5-application) | computer |
| Transport | [`Transport`](#4-transport) | computer | TCP, UDP |
| Internet | [`Internet`](#3-internet) | computer, router | IPv6, IPv4 |
| Data/Link | [`Link`](#2-datalink) |computer, switch, router | Ethernet |
|Physical| [`Physical`](#1-physical)| devices, cable, radio wave, etc | bits |

The Internet Protocol Suite divides the layers in terms of the scope of communications such as local, inter-network, etc.

The ISO model divides the layers in terms of functions that each layer provides such as physical addressing, logical addressing and routing, encryption, compression,etc.

Different types of protocol are concerned with different aspect of network communication which can operate at the different layers of the network model or operate at the same layer of the network model use for different use cases.

### Definitions for the Layers in of Network Communication and Protocols

#### 1. Physical
___

Facilitates the transmission of unstructured data in the form of electrical signals, light, radio waves on the physical network.

#### 2. Data/Link
___

 Facilitates communication between devices (computers, switches, and routers) on the local network with the use of MAC addressing to identify and transmit data between devices based on their physical addresses. An interface between the workings of the physical network and the more logical layers above.

- Ethernet Protocol (frame) : rules that enables communication between devices with the use of MAC addressing to identify devices on the local network. 

#### 3. Internet
___

Facilitates communication between computers on different networks with the use of IP addressing to identify and transmit data between devices over the internet based on their logical addresses.

- [`Internet Protocol`](#how-did-ip-addresses-come-about-and-what-are-they) (packet) : rules that enables communication between devices with the use of IP addressing to direct data between one device and another across networks.
    - IPv4
    - IPv6

#### 4. Transport
___

Facilitate communication between processes or applications through the implementation of sockets to transmit multiple signals over a single channel and vice versa.

- TCP (transmission control, [`connection-oriented`](#what-is-a-socket)`) : facilitates reliable transmission of data over an unreliable network. Provides error checking, data loss and duplication handling, and in-order delivery. This results in more propagation and processing latency. Piping is used to send many messages at a given point in time to improve performance. However, this can overload both parties when messages recieved can not be processed in time. Flow control (control of message to reciever) and congestion avoidance (control of message sent out to the physical network) faciliate efficient transmission of data. 
    - Head of line blocking - succeeding message can not be processed until the current one is processed because of in-order delivery.

- UDP (user datagram, [`connectionless`](#what-is-a-socket)) : a very simple protocol with multiplexing but no reliability thus it is more flexible and speedy than TCP however not reliable.

#### 5. Application
___

Provide communication services to the application by focusing on the structure of the message. There are many different protocols at this layer since there many different rules for how different applications need to communicate. The functions are broken up to Application, Presentation and Session layers in the ISO model.
- FTP, POP, MAP, SMTP, etc

- HTTP (Hypertext Transfer Protocol) : facilitates communication on the Web, a service that is accessed via the internet, on a server by providing uniformity to the way resources on the web are transferred between applications. Known as the request and response protocol, where the client makes a request to the web server and waits for a responses from the server. When the browser receives the response it processes and then displays it. 

### Have an understanding of how DNS works

The Domain Name System is a distributed database that stores a mapping of host domain names and their associated IP addresses. The browser making the request can retreive the resolved IP address and use it to make request to the web server.

- When a request is made by a client, the browser, through a click on a hypertext or URL, a request is made to the server at the associated URL. If the client's network interface does not have a mapping of the IP associated with the domain name in it's cache, the broswer will make a request to a Domain Name System server (via UDP and a query). The Domain Name System server will send back a response with the associated IP address. If the particular Domain Name system server does not find the host domain name it will send the request to the next Domain Name System server in the hierarchy and that server will send back the response with the associate IP address.

### How did IP addresses come about and what are they?

Using MAC addresses on routers that can be accessed by other routers on the internet is not scalable because MAC addresses are: 
1. tied to a physical device. If a device once connected to the internet in one location and now is connected to the internet in another far away location, the same MAC address would exist on routers at both location. This would be conflicting. 

2. flat rather than hierarchical meaning they can not be broken down into sub-divisions. This means the routing devices would need an impossibly large record of each single address that existed somewhere in the world.

IP addresses are assigned as required to deivices as they join a network within a certain location which falls in a specific range defined by a network hierarchy of logical subnetworks. The maximum of addresses is around 4.3 billion.

All routers on the network store a local routing table where the IP from the source received by a router is examined and matched against a list of IP addresses on its table to be send to the next router and eventually arrive at the recieving device.

- IPv4 : 32 bits in length are divided into four sections of eight bits each. Each section provide a range 0 and 225 addresses for each device. The first number defines the network and the last number is the broadcast address.

- Due to the popularity of the internet, the released IPv6 to meet demands. IPv6 can have up to approximately 340 undecillion addresses. 
    - uses 128 bits (eight 26-bit blocks)
    - no error checking and is expected to be handle by the protocols above it.

### What is a Port?

An identifier for a specific process or services running on a host ranging from 0 - 65535. 
- well known ports (0 - 1023)
- registered ports (1024 - 49151)
- dynamic ports (49152 - 65535)
    - ephemeral ports

A web server process will likely have port 80 assigned to it. The browser running on your computer will have an ephermeral ot temporary port assigned to it by the operating system.

The source and destination port on transport data payload unit can be used to direct that data to a specific process on a host.

### What is a Socket?

Conceptually, the combination of IP address and port number is a communication end-point which enables end to end communicataion between specific applications on different machines.

1. Connectionless : One socket object defined by the IP address of the host machine and the port assigned to a particular process or application running on that machine. The object listens for incoming messages directed to that particular IP/Port pair and will process them as the arrive and send any responses necessary. 

2. Connection-oriented : One socket object defined by the host IP and process port. The object listens for imcoming messages and channels messages to a socket with matching four-tuple defined by the host and source IP and port number. If the messages information does not match the four-tuple of existing sockets the socket will generate a new socket with the four-tuples.  

## Have a clear understanding of the TCP and UDP protocols, their similarities and differences

TCP introduces header fields such as: 
1. Acknowledgements flags/number :added to message sent from reciever to sender to acknowledged that it successfully recieved the message. 

If the sender does not recieve an ACK message with the set timeout, the sender will send out a message again. This can cause duplication if the reciever already recieved the message but the acknowledgement was lost in transit.

2. Sequence Numbers: added to message sent from the sender to the reciever. If message was recieved, reciever sends out the acknowledgement with the sequence number. If the message was recieved by the acknowledgement was lost in transit, the reciever checks if the sequence number is the same and discards the message and instead send out another acknowledgement for that sequence number again.

3. Window Size: the maximum number of messages that can be in the 'pipeline' at any one time that are sent out and once acknowledged are send back and the next window of messages are sent out. 

|Services | Elements - implementation |TCP  |UDP| 
|------|-----|----|----|
| Reliability | In-order delivery - error, detection, handling of data loss and duplication  | yes |  no |
||Error checking - checksum to check of a packet is corrupted| yes | yes|
| | Handling data loss - Acknowledgement Number, timeouts, retransmission | yes | no |
|| Handling duplication - duplicate data is eliminated with sequence numbers |yes | no |
| Efficient Performance | control flow (piping) -  Window Size & Flags | yes | no |
| | avoidance - detects if retransmission is high and reduces the size accordingly  | yes | no |
| Connection | Connection-oriented - implement that [`Three-way handshake`](#have-a-broad-understanding-of-the-three-way-handshake-and-its-purpose) to connect to the server. Data is sent after ACK is sent to the server| yes | no |
| | Connectionless | no | yes 

## Have a broad understanding of the three-way handshake and its purpose

The purpose of the Three-way handshake is to establish a connection to the server when using TCP. 

|Sender Start State |Sender Action | Sender End State | Receiver Start State| Reciever Action | Receiver End State |
|---|--|-------|-------|--------|--------|
|Closed | sends a SYN message (segment with the SYN flag set to 1)| SYN-SENT | LISTEN | waits for the request | -|
|SYN_SENT | waits to recieve an ACK to the SYN message sent and for the receiver's SYN| SYN-SENT | LISTEN | SYN message is recieved, sends back a SYN ACK message (segment with SYN and ACK flag set to 1)| SYN-RECEIVED | 
| SYN-SENT | received SYN ACK message, sends an ACK message. | ESTABLISHED | SYN-RECIEVED | Waits for the ACK for the SYN just sent | - |
| ESTABLISHED | can immediately start sending application data. | ESTABLISHED |ACK-RECEIVED| recieved the ACK from sender.| ESTABLISHED|

The purpose of the flags is to manage the connection state. The sender can not send out application data until it has made a connection with the reciever which is after it has sent the ACK segment and the reciever cannot send out application data  until it has made a connection with the with the sender which is when it recieves the ACK segment.

# Performance (Latency and Optimatization)

## Understand the characteristics of the physical network, such as latency and bandwidth

1. latency : the amount of time it takes for data to travel from one point to another usually in ms. 
    - There are different types of latency that determine the overall latency. 
        - propagation delay : time it takes for a message to travel from the sender. eg. distance divided by speed. The propagation speed is the speed at which the signal travels through the medium. 
            - The TCP handshake introduces the need for the reciever and sender to send more messages back and forth such as SYN ACK  messages, ACK 
            message, and retransmission messages.
            - The TLS handshake introduces the need for the additional messages to be sent out such as the a message that contains the certificate with the public key thay both parties need to send to securely exchange public keys.
        - transmission delay : the amount of time it takes to push the data onto a link in the network. It is the packet size divided by the transmission rate. The transmission rate is the bandwidth or data rate of the communication channel.  
            - similiar to time navigating an intersection when driving a car.
        - processing delay : the amount of time it takes to process the data at a link. This includes time in buffers and error checking and packet forwarding.
            - TCP involves checking for corrupted messages,duplication of messages, the order of messages. 
            - TLS involves generating of key pairs, decryption, encryption, authentication and data integrity.  
        - queuing delay : the amount of time the data is waiting in a buffer to be processed at a link in the network. Buffers are create to control flow of data that a reciever and sender is sending to each other.
            - Head-of-blocking delivering or processing one message in a sequence of messages can delay or block the delivery or processing of the next messages. This messages need to be buffered until the message has been successfully recieved causing an increase in queuing delay. 

    - other terms regarding latency: 
        - last-mile latency : the amount of time it takes to get the network signal from your ISP's network to your home or office. The last-mile has more and shorter hops as the data is directed down the network hierarchy to the intended sub-network. 
        - round trip : length of time for a signal to be send plus time for an acknowledgment or response to be recieved.  

2. Bandwidth : the lowest amount of data at a particular point in the overall connection that can be transmitted in a set period of time usually a second. You can have an efficient use of bandwith by increasing the window size  to allow for a set number of messages to be sent at any one given time known as piping.
    - a bottleneck : a point at which bandwidth changes form relatively high to low. 


## Have a broad understanding of flow control and congestion avoidance

### Control FLow

The mechanism to prevent the both sender and receiver from overwhelming each other with too much data at once by storing data the reciever can not process in time in a buffer and if buffer is too full by communicating the window size at which messages are being sent that both are willing to tolerate.

### Avoidance

TCP uses data loss as a feedback mechanism to detect and avoid network congestion. If alot of retransmission is occurring, this means that the network is congested. It reduces the size of the transmission window which limits the amount of unacknowledged segments the sender can have at a time. 

The algorithms for the size of the transmission window is based ont he TCP type.

# URLs
## What is a URL
A subset of URI that specifically identifies the location of the resource through its different components. 

## Be able to identify the components of a URL, including query strings

1. Scheme - family of protocols being used send out a request 
2. host - location of the host 
3. port - port on host that the data is proccessed by (default is 80 but is required if using a different port)
3. Path - location of the resource in the host ( optional)
4. query string - made up of parameters used to send data to the server (optional)
    - `?` signifies the start of the query string
    - `&` adding more parameters to the query string
    - `key=value` a parameter name/value pair. It sets a value to a key/property
    - ordinarily only used in HTTP GET
    - Have a maximum length,
    - stings are visiable in the URL thus passing sensitive information is not recommanded. 
    - spaces and special characters cannot be used with query strings and must be encoded
    - the name value pairs are passed onto the server from the URL which has the server narrow down the the information in the session to the parameters. How the server uses these parameters is up to the server side application.

## Have an understanding of what URL encoding is and when it might be used

URLs accept only certain characters in the standard 128-character ASCII character set. Thus, characters must be encoded if: 

 1. Reserved 
 
 2. Unsafe ASCII character that may be misinterpreted or modified by some systems. 
 
 3. no corresponding charater with the standard ASCII character set. 
 
 Characters not being used for it's intended purpose (listed above) need to be encoded so to be properly interpeted by the browser as not reserved or unsafe ASCII.  

Encoding is done by replacing non-conforming character with a `%` followed by two hexadecimal digits representing UTF-8 character.


# Describe the HTTP request/response cycle with session

1. The browser client creates and sends a request to the web server upon some user event such as clicking on a hypertext, entering a URL in the browser, etc. 
    - request line (required)
        - method 
        - path : absolute path (first version), absolute URI (later versions)
        - version (later versions)
        - parameters (optional)
    - headers (version 1.1 of HTTP)
        - info in the request line 
   
    - body (POST)


2. The client recieves the request and will process the request based on what the server application is programmed to do. However, a common workflow would be:
    - inspect to see if the request contains a session id 
    - if so, check if th session id still valid such as rules on how to handle expiration dates 
    - verify the user session by successfully retrieving the session data based on the session id. 
    - recreate the application state such as generating html code based on the request made by the user frome the session data and appends the code to the body 

3. Server sends a response back to the client.
    - response line 
        - status code
        - status text 
    - headers :
        - content-type
        - what the client is
        - how the client is going to interept the response  
    - body 
        - HTML file if a website 

4. Client recieves the response and looks at the meta data, headers, and interpets the data base on the metadata. In the case of a website. It is going get the content, usually HTML code, in the body and render the content on the screen. 

## Be able to explain what HTTP requests and responses are, and identify the components of each

Strings messages that follow a standard format or rule dicated by the type of HTTP protocol that the other machine can understand. Requests are usually structured messages sent from the client to the server that tells the server what it needs. Responses are usually structure messages sent from the server to the client that provides the client with what was requested from client.    

### HTTP Request
- request line
    - required 
        - method 
        - path (absolute path or absolute URI, include parameter (optional))
        - version (versions after .9) 
- optional 
    - header : meta data about how to deal with the request   
        - host : the server that the application is hosted on 
        - accepted - language : list of acceptable languages
        - user-agen : string that identifies the client 
        - connection : the type of connection teh client prefers.

### HTTP Responses
- status line (verion 1.0 and up)
    - required:
        - status code 
    - optional 
        - status text 
        - version ? 
- optional: 
    - header: meta data how to deal with the response
         - content : encoding 
         - server : namd of the server
         - location : notify of new resource location
         - content-type : type of data the response contains



### Be able to explain what status codes are, and provide examples of different status code types

A three-digeit number that the server sends back to the client in a response indicating that status of the request. The status text provides the description of the code. 

| Status Code | Status Text | Meaning |
|---|---|---|
| 200 | OK | resquest handled successfully | 
| 302 | Found | request resource has change. Usually results in a redirect to another URL | 
| 404 | Not Found | The request resource cannot be found | 
| 500 | Internal Server | The server has encounterd a generic error |

### Explain the difference between GET and POST, and know when to choose each

GET request retrieve a resource at that address or path. Default behavior of a link is to issue a Get request to a URL. If that resource is a is an HTML file with other links to other request, the browser will make request to those links. 

POST request sends or submits data from the client to the server to initiate some action on the server. They allow you to send larger and sensitive data to the server. While using GET is possible with the use of query strings, it is not limitations in terms of the query string length and the security where sensitive information is exposed in the URL

## Understand what is meant by 'state' in the context of the web

State is the ability of an application to remember what a user had already done and is able to resume the application at where they had left off previously. 

However, HTTP is a stateless protocol designed in a way that each request/response pair is competely independent of the pevious one, meaning the server does not hang on to information between each request/respnse cycle. Thus, develops have came up with techniques with the help of the browser to simulate/create state. 

### Explain some techniques that are used to simulate state

#### 1. Use of session ID

The server sends a cookie consisting of session information. One of kind of session information is a session identifier (ID), also known as token,  to the client, the browser, which the browser stores in a cookie and the cookie is appendedto the request which allows the server to identify the client and retrieve its session data.

- Every request must be inspected by the server for a session ID. 
- If there is a session ID, the server must ensure it is still valid using rules on how to handle sessions that have expired and how to store the session's data.
- server retrieves the session data based on the session ID and recreates the application state and send it back to the client as a response.

#### 2. Use of Cookies  

A piece of data sent from the server and stored in the client during a request/response cycle. They are small files stored in the browser and contain the session information such as the session ID. The client side cookie is compard with the server-side session data, the session ID, is compared with the server-side session data, the session ID maps to the user session to identify the current session.

#### 3. Use of AJAX 

Without AJAX, the request made by the client, browser, sent to the server has to be proccessed by the server and sent out to the client in order to take user's next request. This blocks the user from interacting with the website which can make for a unpleasant user experience.

AJAX is non-blocking meaning it can keep making requests meaning the user is able to keep interacting with the page without waiting for a response to be processed. 

- Everytime you type a letter in google search you are making a request to the server. The server proccess the requests asynchronously through techniques like concurrent handling, thread pool, or asynchronous I/O. When the response is sent to the client from the server, the response is passed to the callback on client-side code which gets processed immediately after the response is recieved.

- Asynchronous JavaScript and XML allows browsers to issue requests and process responses without a full page refresh. This reduces the amount of time and energy to regenerate a whole page even if there were only a few minor updates. 

- Instead of the browser refreshing and processing the reponse it is the callback function being passed into some function (AJEX Request Function) that is doing the work. This function is some client-side JS code that is proccessing the responses by updating the HTML with new search results. Typically, the callback is udating elements of the DOM which will only render those elements on the page. 

        //example code

        // The callback processes responses by updating the HTML with new search results
        
        function cb (reponse) {
            // logic to be executed after the response is returned which is updating the HTML 
        } 

        Function AJAX request (cb) {
            //call callback 
            cb();
        }

#### 4. Using query parameters

Sending stateful data as query parameters when making a request. This used to be universal, but no longer used in modern web sites.

# Security
## Have an understanding of various security risks that can affect HTTP

1. Session Hijacking 
    -  Packet sniffing: techniques that can be used by bad actors to read the messages being sent back and fourth. This can compromise security if the message is not encrypted and a user's session ID is found.
2. 

3. Cross-Site Scripting (XSS) is an attack that allows users to input code that ends up being executed by the server. If the server does not do any sanitization or input, the user can inject malicious code.

### Outline measures that can be used to mitigate against these risks

1. Countermeasures for session Hijacking:
    - resetting sessions with authentication system that render an old session id invalid when a new one is created upon successful login.
    - setting an expiration date for sessions.
    - using HTTPS across the entire app to encrypt data 
        - The HTTPS protocol uses TLS, Transport Layer Security, a protocol on the application layer that uses certificates to communicate with remote servers and exchange security keys before data encryption happens. 

2. The same-origin policy permits unrestricted interaction between resources originating from the same origin, the combination of scheme, host, and port, but restricts certain interactions between resources originating from different origins.  However, the policy does allow requests such as linking, redirects, or form submission to different origins. It also allows for embedding of resources form other origins such as scripts, css, images and other media, fonts and iframes.
    - specifically, request where resources are being accessed programmtically using APIs, such as XMLHttpRequest of fetch are restricted. 
    - Cross-origin resource, CORS, allows cross-origin programmtic interaction by adding new HTTP headers that allow servers to serve resources cross-origin to certain specified origins. 
        - If a script has is using other script from another orgin, CORS gets involved by having the browser send an origin header with the other script from the other origin to the other origin the the form of a request. If the other origin allows the other origin to have access to it, then it will include an Access-Contrl-Allow-Origin header in its response. 

3. Countermeasures for XSS: 
    - always santize user input by elimating input such as `<script>` tags and JS code. 
    - escape all user input data when displaying it.

## Have a broad understanding of what each TLS services provide

A protocol operating in between the TCP and HTTP layers of network communication, specifically the session layer, that provide for very secure message exchange by providing services for encryption, authentication, and integrity.

### 1. Encrytion 

A process of encoding a message so that it can only be read by those with an authorized means of decoding themessage.
- Symmetic Key Encrytion : a shared key that both sender and reciever agree to use to send secure messages to each other where the key can be used to encrypt messages being send out and to decrypt messages recieved by the reciever. 
- Asymmetric Key Encryption : a pair of keys, public and private, are generated for each party, the sender and reciever. The public key is used to encrypt of a sender or receiver is used to encrypt their messages and the private key is used to decrypt the message of a sender or reciever. 

To securely exchange the symmetric key, asymmetic key encryption is used. The initial secure connection is set up is conducted during the TLS handshake which takes place after the TCP handshake for reliable connection. 

- Client sends a ClientHello message right after ACK message is send out during the TCP handshake indicating when a connection to the server has been made to let the server know what versions of TL and Ciper Suites it can support. 
    - ciper suite : steps for performing encryption, decryption and other related tasks.

- Server recieves ClientHello message, the server responses with a ServerHello message which sets the TLS version and Cipher Suite and other relation information based on the what the client can support. The message also includes a certificiate with a public key and a Server marker that indicates to the clietn it has finished this step.
  

- Client recieves ServerHellDone message marker it initiates the key exchange process that enables both the client and server to securely obtain a copy of the symmetric encrytion key. The generation of symmetric key vary on which key exchange algorithm was selected in the cipher suite. With the RSA algorithm: 
    - Using the key pair asymmetric encryption, the client  encrypts the pre-master secret that it generated with the servers public key and sends it to the server
    - the server then decrypts the pre-master secret using its private key.  
    - client and server use the pre-secret and other argreed parameters to generate the same symmetric key.
    - Client sends the ChangeCipherSpec to ind
    
    - Both the parties use the pre-master along with other agreed parameters to generate the same symmetric key

    - Clients also sends out a changeCipherSpec flag, which tells the server that encrypted communications should now start using the symmetric keys and a finished flag to indicate that client is done with the TLS handshake.

    - server sends out response with changeCipherSpec and and finished flag to indicate that client and server can begin secure communication using the symmetric key. 
    
### 2. Authentication

A process to verify the identity of a particular party in the message exchange. It is concern with validating the source of that encrypted data. 

To validate the data is coming a party in possession of the private key: 
- The response from the server to the ClientHello request is a certificate that stores a public key for the client use and to provides a means of identification of the client. The server also sends a signature and the original data from which the signature was created along with the HelloServer response. The signature is created by the server's private key.

- The client decrypts the data with the the server's public key and compare the decrypted data to the original verson. 

- A match means that the encrypted version could only have been created by the party in possession of the private key.

To validate the data is coming from the intended person or organization: A malicious third-party creates thier own key pair and certificate identifying as a well-known bank. 

- certificate authorties: trustworthy source in the business of issuing certificates. 
    - verifies that the party requesting the ceritificate is who they say they are which could involve the owner proving them own the domain by uploading a file to a server accessible by the domain for which cerificate is being issued. 
    - Digitally signs the certificate being issued meaning the th CA creates a signature using its private key which is sent over to the client to be validate that it the certificate was sent by the CA. Certificates contain:
        - The owner of the certificate
        - The owner's public key 
        - The issuer's name 
        - The issuer's signature 

- Chain of Trust : provides a chain-like structure of security. The client can go up the chain when receiving a certificate to validate that it is issued by a real CA. 
    - Levels: 
        - Root CA : issues root certificates that are self-signed and are the end point of the chain of trust. They do not issue end-user certificates as they are the last in the chain to defend against fake certificates by revoking the certificates of an intermediate and thus those down in the chain as well. They are a small group of organizations approved by browser and operating system vendors. 

        - Intermediate CA: any company or body authorised by a root CA to issue certificates on its behalf
        
        - Site certificate

### 3. Integrity

A process to detect whether a message has been interferred with or faked. 

The Message Authetication Code is a field on the TLS protocol that adds a layer of security by providing a means of checking that the message hasn't been altered with in transit. This is implemented with a hashing algorithm 

- The sender creates a digest, a small sample of the data payload, using a hashing algorithm combined with a pre-agreed hash value. This hashing alogrithm was agreed upon in the TLS Handshake process in the Cipher Suite negotiated. 

- The sender encrypts the data with the symmetric key , encapsulates it into a TLS record and sends it down to the Transport layer. 

- The reciever, decrypts the data payload with the symmetric key, create a digest of the payload using the same algorithm and hash value and compares if there is a match with the digest recieved in the MAC field. 

- This adds to processing time.



let objA = {
  name: 'objA',

  func() { //strips context
    let arrowFunc = () => console.log(this.name);
    return arrowFunc;
  },
};

let objD = {
  name: 'objD',
  func2: objA.func.bind(objA),
}

objD.func2()();

objA.func()(); // logs: objA
console.log(objA.func.hasOwnProperty('prototype'));
// arrow takes on the context of where it is defined 

let objB = {
  name: 'objB',

  func: objA.func(),// func: return =>  arrowFunc
};

objB.func.call(objB); // logs: // arrowFunc()


let objC = {
  name: 'objC',

  func: objA.func, // 
};
/*
func {
    let arrowFunc = () => console.log(this.name);
    return arrowFunc;
  }
  */

objC.func().call(objB); // logs:

//func() 
//Objc.func() 
//mainfn()

//where the the arrow function is defined but also the time of definiton 

Constructors / Object constructors
Constructors with prototypes (Pseudo-classical pattern)


