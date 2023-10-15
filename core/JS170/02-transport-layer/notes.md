# What to Focus on 

1. Learn how transport layer protocols enable communication between processes
    - mutliplexing and demultiplexing - how ports work along with IP address to provide those functionality.
2. Learn that network reliability is engineered 
    - the internet, web and reliability of the internet are actually the combination of multiple technologies that have been designed and engineered.
3. Understand the trade-offs 
    - TCP and UDP is the result of many different design decisions. They involve some sort of trade-off.

# Communication Between Processes
1. Two things needed for modern networked applications are:
    - direct connection between applications (end-to-end communication between application or processes)
    - reliable network communication
2. An important thing to understand about the Internet Protocol, and its system of addressing, is that it is intended to provide communication between hosts, or devices. These hosts can potentially be on the same local network, or on different local networks halfway around the world from each other. Either way, we can use IP to get a message from one host to the other, but not any more than that. (confirm)
3. If there are many applications running on a single host at the same time, how do we provide communication between an application running on one host and an application running on another host or different applications or processes running on the same host?

## Mutiplexing and Demutiplexing 
1. Different processes or applications as distinct channels for communication on a host machine 
    - multiplexing - transmitting multiple signals over a single channel 
    - demultiplexing - transmitting a single signal over multiple channels

## Ports
1. A port is an identifier for a specific process running on a host. An integer ranging from 0 - 65535
    - 1 - 1023 - well known ports assigned to commonly used processes for newtword sevices
    - 1024 - 49151 - assigned as requested by private entities
    - 49152 - 65535 - dynamic ports 

2. Transport protocols have common fields such as:
    - source port 
    - destination port 
    - rest of header fields 
    - data payload

3. The data payload which encapsulates the application layer's PDU and the source and destination ports number of the transport PDU can be used to direct that data or process to specific channels on a host.

4. The IP address on the packet and the ports number on the transport PDU is what enables end-to-end communications between specific application on different machines. They define a communication end-point known as a socket. For example. 216.3.128.12:8080

5. use netstat -ntup to return the list of actiev network connections that has the local and foreign address as combinations addresses and port numbers

## Sockets
1. Conceptually, a socket is an abstraction for an endpoint used for inter-process communication. 

2. Implementation level, 
    - UNIX socket: a mechanism for communication between local processes running on the same machine.
    - Internet sockets: a mechanism for inter-process communication between networked processes on different machines. 
3. Having a mental model of socket being implemented as objects helps to understand how they can be used to create connections between applications 
    - connection-oriented communication - instantiate multiple object of a certain type to communicate between many applications or process. 
        - the socket object has the ip/port pair of the destination host and the source host. It listens for message where all four fields match, known as a four-tuple.
        - any massages that do not match would be picked by the orginal socket which would instantiate anohter object with the matching four-tuple.
        - advantages of this type of connect is relilability of communication by more easily allowing you to put in place rules for magnaging the commication such as the order of messages, acknowledgements that messages has been received, retransmission of messages that weren't recieved, and so on. 
    - connectionless communication - one socket object defined by the IP address of the host machine and the port assigned to a particular process running on the machine.
        - objects have a listen method that allow it to wait for incoming messages directed to that particular IP/host pair. 
        - the source ?, time, and order is not important because it process any incoming messages as they arrive and send any responses necessary.

# Network Reliability 

1. data at the Ethernet and Internet level is inherently unreliable which is why the frames and packets include checksums to check of they are corrupted and thus dropped. The data is not retransmitted meaning that those levels and above is an unreliable communication channel.

## Building a Reliable Protocol
1. verison 1 
    - Problem:
        - messagegs can become corrupt or lost. How to ensure the the message has been successfully recieved?
    - Solution:
        - receiver sends acknowledgement message 
    - rules:
        - sender sends one message at a time 
        - if message is recieved, receiver sends an acknowledgement 
        - when sender recieves acknowledgemnet, sender sends next message
    - Problem:
        - the reciever never recieves the message and no acknowledgement is sent
        - the acknowledgement sent by the reciever is corrupted or lost 
    - Solustion:
        - resend the message if acknowledgement not recieved within a certain time frame
    - rules: 
        - sender send one message at a time, and sets a timeout
        - it message recieved, reciever sends an acknowledgement
        - sender sends out next message when acknowledgement is recieved
        - if not akcnowledgement not recieved AFTER? timeout expires, sender sends the message again
    - Problem:
        - the message is received but aknowledgement is not recieved in time, resulting in duplicate message
    - Solution:
        - add the sequence numbers to the messages
    - Rules - stop and wait protocol which covers in-order delivery, error detection, handling data loss and duplication: 
        - sender sends a message with a sequence number and sets a timeout
        - if message is received, receiver sends an aknowledgement and uses the sequence number of the message to indicate which message was received. 
        - When acknowledgement id recieved, sender sends next message in the sequence
        - if acknowlegement is not received before the timeout expires, sender assumes either the message or the acknowledgement went missing and sends the same message again with the sequence number 
        - if the message has the same sequence number that the reciever last recieved, the reciever assumes the the sender did not recieve the acknowledgement and sends a the acknowledgment again and discards the message.
    - disadvantage: time spent waiting for an acknowledgement which is also not an efficient use of bandwidth.

## Pipling for Performance

1. send multiple messages one after the other without waiting fro acknowledgements called pipelining 
    - Go-back-N and Selective Repeat: sender implement a window respsenting the max number of messages that can be in the pipeline at any one time, once acknowledgements has been received for the messages it moves the window on.
2. Finding a balance of reliability and peformance is a big part of TCP


# Transmission Control Protocol(TCP)

1. TCP provided data encapsulation, where the the application layer is hidden from the complexit of a realiable network connection service by the transport layer and multiplexing 

## TCP Segment

1. Segment is a PDU that consist of:
    - header 
        - source and destination port: allows multiplexing 
        - sequence and acknowledgment number: prevents duplication and loss of data and out of order delivery
        - checksum: provides the error detection to make sure the data is not corrupted. This it not provided by IPv6. 
        - window size: relate to control flow 
        - flags: on- bit boolean fields, 
            - URG and PSH, are related to how the data contained in th segment should be treated in terms of importance or urgency. 
            - SYN, ACK, FIN, and RST flags are used to estblish and end a TCP connection and manage the state of that connection.

## TCP Connections

1. TCP starts sending data when a connection has been made between application process through the use of a:
    - Three-way handshake with the use of the SYN and ACK flag
        - senders sends SYN segment with SYN flag set to 1
        - receiver receives SYN segment and sends SYN ACK segment to sender with SYN and ACK flags set to 1 
        - the sender recievers the SYN ACK segment and response by sending an ACK segment to the reciever ACK flags set to 1.
        - the reciever recieves the ACK segment and the connection is establish
2. Four-way handshake with the us of the FIN flag is used to terminate the connection.

3. The reason for these flags is to manage the connection state of a connection over its lifetime which includes: 
    - listen 
    - SYN-SENT
    - SYN_RECEIVED
    - established 
    - FIN-WAIT-1
    - FIN-WAIT-2
    - CLOSE-WAIT
    - closing
    - LAST-ACK
    - TIME-WAIT
    - closed (fictional)
4. Focused on the established and listen on the server side

5. There is a entire round-trip of latency before any application data can be exchanged when is when the client sends SYN to when it establishes a connection. This latency occur every time a tcp connection is made and has an impact on any application that uses TCP.

## Flow Control
 
1. In order to help facilitate efficient data transfer once a connect is established, TCP provides mechanisms for flow control and congestion advoidance.
    - flow control is a mechanism to prevent the sender for overwhelming the recievier with too much data at once. Data awaiting processing is stored in a "buffer". Its size id determined by the memory allocated by the OS 
    - congestion avoidance - prevent either the sender or receiver from overwhelmin ght underlying network. 
        - congestion: there is more data transmitted on the network than there is network capacity to process and transmit the data. 
        - if the buffer over flows that the remainding packets are dropped. Lots of retransmission can means more latency. Retransmission should be keep at a minimum.
        - TCP uses data loss as a feedback machanism to detect, avoid, network congestion, if lots of retransmission is occurring. This is a sign that the network is congested and the transmission window is reduces to limit the number of unacknowledged segments. An algorithm id used to determine the transmission window based on the network conditions.

## Disadvantages of TCP

1. latency overhead in establishing a connection 
2.  head-of-line blocking: relates to how issues in delivering or processing one message in a sequence of messages can delay or block the delivery or processing of the subsequenct messages in the sequence. Segments that come after it in the sequence can't be processed and need to be buffered until the retransmission has occurred.


# User Datagram Protocol (UDP)
1. The udp consists of a:
    - source and destination port: allows for multiplexing
    - data payload length
    - checksum 
2. The protocol does not provide:
    - guarantee of message delivery
    - guarantee of message order 
    - built-in congestion avoidance or flow-control mechanisms
    - connection state stracking sinc it is connectionless protocol

 ## Case of UDP
 1. The protocol provides speed and flexibility
 2. connectionless protocol meaning applications can just start sending data without having to wait for a connection to be established 
 3. no acknowledgement and retransmission means faster data delivery; data flows one way from sender to reciever and in no order
 4. Gives developer more flexibility to implement there own services for relaiblity. UDP acts as a base template to build on. 
    - voice or video calling application.
    - online gaming
 5. Good practice to implement some form of congestion aviodance to prevent issues of overwhelming the network


# Summary 



