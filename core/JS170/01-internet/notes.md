# Introduction

Understand how applications communicate to each other over the network(internet) through different protocols (rules). Starting at the physical level up to the layers of abstraction (software).

# What to Focus On

1. Build a general picture of the network infrastucture
    - Build the general model to understand protocols operating at higher levels of abstraction such as TCP and HTTP. 
2. Beware of the limitations of the physical network 
    - Higher-level protocols, such as TCP and HTTP, rely on the network infrastructure and are bounded to the limitations of the infrastructure's bandwidth and latency. 
3. Understand that protocols are systems of rules
    - Internet Protocol (IP) are rules designed and engineered to be the way they are; viewing them makes them easier to break down and contextualized.
4. Learn that IP enables communication between devices

# AWS CLoud9

Use AWS Cloud9 to implement practical networking concepts since some of the tools and utilities display inconsistencies in how they function across various environments. Different flag might need to be passed to different OS. 

# What is the Internet?

1. The internet is a network of networks. 
    - At the basic level, a network are two devices that can exchange data. The scope of communication is limited to devices that are connected to the central network switch or hub. 
2. Network types: 
    - Local area network (LAN) or wireless (WLAN)
        - Two computers connected with a LAN, local area network, cable and configured to their network settings forms a distinct network.
        - computers connected to a central non-wireless or wireless hub or switch 
3. Inter-network Communication 
    - routers devices can route network traffic to other networks allowing networks to communicate with each other.
    - The internet are networks connected by systems of routers that direct network traffic to other networks.

# Protocols

1. A protocol is a system of rules that govern the exchange of data. These different protocols ensures that different devices, servers running on different configurations, and different softwares works in the same way when requesting for a resource via the internet. 
2. Different protocols address :
    1. different aspects of network communication. Refers to the protocol based on the layer
        - it is the different flow and order of all the messages in the conversation. 
        - ex. TCP, HTTP
    2. same aspect of network communication but different for a specific use case. (different protocols for different for the same aspect of communication but for different conditions )
        - the same flow an order of the message transfer, but use different sets of rules or protocols based on the condition it is used for.
        - ex. TCP - transfer of messages between applications, UDP - HTTP defines the structure of those messages.

# A layered System

|OSI model    | Internet Protoocl Suite (TCP/IP/DoD)|
|-------------|-------------------------------------|
|Application  |  Application                        |
|Presentation |                                     |
|Session      |                                     |
|Transport    |   Transport                         |
|Network      |   Internet                          |
|DataLink     |        Link                         |
|Phsyical     |                                     |

1. The different models are different approaches:
    - the OSI divides the layers in terms of the functions that each layer provides. 
    - the IPS divides layers in terms of the scope of communications within each layer.
2. Data Encapsulation 
    - hiding data from one layer by encapsulating it as the data payload of the layer below.
    - Protocol Data Unit (PDU) - block of data transferred over a network. Called differently at different layers 
        - frame at Link/Data
        - packet at Internet/Network 
        - segment(TCP), datagram (UDP) at Transport 
    - PDU consist of:
        - header - provide protocol-specific metadata about the PDU
           - source and destination IP address to route the package.
        - data payload- data to transport over the network. The PDU at one layer is set as the data payload for a protocol at the layer below.
            - A protocol at one layer doesn't need to know anything about how a protocol at another layer is implemented in order for those protocols to interact. It can conplete its task without information from other layers. lower layer provides the serive of encapsulating some data (pdu?) from the layer above
        - trailer/ footer - provide protocol-specific metadata about the PDU
           
3. Summary
    1. Protocols act as systems of rules for network communication.
    2. Groups of protocols work in a layered system. Protocols at one layer provide services to the layer above.
    3. Data is encapsulated into a Protocol Data Unit, creating separation between protocols operating at different layers.
    4. Become different protocols, protocol Data Unit(information base on the source device), at different layers, Ethernet => IP

# The Physical Network

1. The physical Network is made of devices, cables, wires, and radio waves the transport electrical, light, or radio waves It has physical limitations which determines the phyiscal characteristics of a network which have a impact on how protocols function further up the conceptual level.
2. Latency is a measure of time it takes for data to get from one point in a network to another point in a network. 
    - propagation delay - the time it takes for a message to travel from the sender to the receiver. (ratio between distance and speed)
    - transmission delay - the time it takes for a message to push the data into the inter-connected devices (link)
    - processing delay - the time it takes for data to be proccessed the inter-connected devices.
    - Queuing delay - the time the data is waiting in the queue of an interconnected device to be processed. 
    - last-mile - the time of getting the network signal from your ISP's network to your home or office network. 
    - round-trip time - length of time for a signal to be sent, added to the length of time for an acknowlegement or response to be received. (the time it takes for a signal to travel to the link plus the transmission delay)?  use traceroute (windows: tracert)
3. Bandwidth is the overall smallest amount of data that can be sent in a particular unit of time (a second) in a connectio. Increasing bandwidth does not mean an decrease in latency.
    - Varies across the network (routers speed may be faster than the network tha connect to your home)
    - a bottleneck is a high to low change in bandwidth
    - developers can influence the bandwith by the implementation of hte application in terms of how we use the higher - leve protocols.

# Link/Data Link

1. The protocols at this layer is concern with identification of devices on the physical network and moving data over the physical network between the devices that comprise it. An interface between the workings of the physical network and the more logical layers above.
2. Ethernet protocol - network cables used to connect devices on the network such as computer, switches, and routers.
    - Ethernet Frames - encapsulates data from the Internet/Network layer above along with a heade and footer.
    - metadata which defines which bits are which is determined due to different 'fields1 have specific lenght in bye and appear in a set order
        - preamble and Start of Frame Delimiter are sent prior to the frame to the receiving device to expect fram data which help to identify the start point of that data. 7 bytes long and on byte long.
        - soure and Destination MAC address - the first two fields in the PDU (each 6 bytes long); source being the device sending the frame and destination being the device to reacive the frame at the end of the route. 
        - interframe gap -  brief pause between the transmission of each frame, which permits the reciever to prepare to receive the next frame. It contibutes to th transmission delay element of latency.
        - length - use to indicate the size of the Data Payload - two bytes in length
        - SDAP, SSAP, and control all one btye in length. DSAP and SSAP - identify the Newtork Protocol used for the Data Payload that it services from the layer above. Control filed provides infromation about specific communication mode for the frame to facilitate flow control
        - Data Payload - the data for the entire protocol Data Unit (PDU) from the layer above, which would called an IP packet. (42 to 1497 bytes in length)
        - Frame Check Sequence (FCS) - (4 bytes) generate by the source device using an algoritm and sent to the destination device which uses the same algorithm to generate a FCS and then compares it to the FCS sent to it. It is dropped if it does not match. The Ethernet protocol does not implement retransmission; it is the higher level protocols responsibility if it is needed.
3. Difference between Ethernet Standards
    - ** describes the frame of IEEE 802.3 However important fields are in all protocols: Source and Destination MAC address and the data payload
4. MAC addresses (physical or burned-in address) 
    - formatted as a sequence of six two-digit hexadecimal numbers. 00:40:96:9d:68:0a, the ranges of address are assigned to different network hardware manufacturers.
    - every device has a network interface card (NIC) which is assigned a MAC Address when it is manufactured. 
    - Each recieving device would check its MAC Address against the Destination MAC Address in teh Fraome to check if it eas the intended recipient. It it is not the it is dropped.
    - Switches use the destination address in order to direct a frame only to the desitination device, whereas hubs send every frame to every device on the network.
    - It keeps and update a record of the MAC addresses of the devices connected to it and associates each address with the Ethernet port to which the device is connected on the switch. This a good system for local networks. 
5. Problem of Scale
    - Mac addresses are physical rather than logical 
        - if you move to different locations with the same device there would be two of the same MAC addressed stored in the switch which can cause conflict 
     - flat rather than hierarchical meaning the address is a single sequence of values and can't be broken dowm into sub-divisons.
        - routing devices would have to store large tables.

# The Internet/Network layer

1. to facilitate communication between hosts on different networks using the IP, internet protocol. (IPv4 and IPv6)
2. Data Packets 
    - data payload - the PDU from the layer above (transport layer)
    - header - split into logical fields which provide metadata used in tranporteing the packet. Each fiels is given a size in btyes and in a specific order
        - verson - verson ig the IP
        - ID, flags, fragment Offset - related to fragmentation. PDU is fragmented to multiple packets to be reassembled by the recipient
        - TTL - time to live value. The maxium number of hops a packet can take before being dropped, the router decrements the value by one for each hop
        - protocol - this indicates the protocol used for the data payload TCP, UDP, etc.
        - checksum 
        - source address  and destination address
3. IP address (IPv4) 
    1. logical addresses not tied to a specific device, but can be assigned as required to devices as they join a network. Must be within a range of addresses available to the local network that the device tis connect to. 
    2. 32 bits in length and divided into four sections of eight bits each. When converted from binaray to decimal, each of those sections provides a ranve of numbers between 0 and 255. The start of the range is the address of the network and the address at the end of the range is the broadcast address and those in between can be assigned to devices on the netowork
    3. A router only needs to keep track of the network ip address to which points to the switch or hub of the network. This means that routers only have to store the one address.
    4. sub-netting - the dividing of IP address creates tiers to create subnets.

4. Routing and Routing Tables
    - All routers on the network store a local routing table which stores a list of network addresses which is a range of addresses within a particular subnet. It determines wher ein the network hierarchy to subnet exists in order to select the best route for the IP address.

5. IPv6
    - uses 128 bit addresses (340 undecillion addresses) - had a different header and lack of error checking ( it leaves this to the Link Layer checksum)

6. Networked Applications
    - a single device can have many application running on it, sucn as a wen browser, an email client, etc. 
    - a servier can have may services running on it, such as a web server, a file server, or  mail server. 
    - the transport date from one device to the other needs to specify what application what service it needs on the service to access the correct service. 

# Summary 

1. The internet is a network of sub-networks transmitting bits over different physical devices with the help of protocols to govern how data is transmitted over different physical and software layers and conditions.
    1. Physical devices within local networks are connected to each other through a central switch or hub. Those networks or sub-network are connected via routers making up the internet which allows for a scalable communication system.
    2. Protocols governs the transmission of data over the different physical and software layers and conditions. 
        1. A protocol is constructed in the form of a protocol data unit, PDU, that generally consists of: 
            1. header - fields providing protocol-specific metadata about the protocol data unit iself ( goes before the payload and varies based on the layers and conditions) 
            2. data payload - the encapsulated protocol data unit from the layer above.
            3. trailer/footer- fields providing protocol-specific metadata about the protocol data unit iself ( goes after the payload and varies based on the layers and conditons)
        2. A PDU that governs at the data link layer is the ethernet protocol used by ethernet cables which governs how bits are structured, known as ethernet frames. Ethernet frames are identified by ethernet devices such as switches or hubs since fields' are ordered and each have a pretermined length. 
            1. preamble and SFD
            2. frame (IEEE 802.3)
                1. header 
                    - destination mac address
                    - source mac address
                    - length 
                    - DSAP
                    - SSAF
                    - control 
                2. data payload 
                    - the pdu above the data link layer,packet, which is internet layer
                3. footer/trailer 
                    -  frame check sequence (FCS)
            3. interframe gap
                - a pause between each frame transmission to allow the reciever to prepare to recieve the next frame. Delay contributes to Transmission Delay

        3. A PUD that governs at the internet layer is the internet protocol which is used by the router on the physical layer to route packets to the distination sub-network 
            1. packet (ipv4)
                1. header 
                    - version
                    - ID, flag, fragment offset
                    - TTL
                    - protocol
                    - checksum
                    - source Address
                    - destination address
                2. payload 
                    - the pdu above the internet layer which is the transport layer
            
# Video - How Data moves through the Internet

1. It moves through the network based upon three Tables:
    - mac address - maps switchport to mac addresss
    - arp table/ cache - maps ip address to mac address (devuces have both ip and mac address)
    - routing table - maps ip network to interface or next router 

2. source and destinaton devices and routers have both stores arp table and routing table 
    - routing tables are filled in with the  default gateway that takes them to the internet for those devices before packets are sent else the packets will be dropped by the routers since the table is empty.
    - in additon routers will have ip address to sub network they are connected to

3. Host A sends a pack to the destination ip address 
    - it compares the distination ip address to it's own and subnet mask to determine if it is on a foriegn network or the local network 
    - if on a foreign, the packet needs to be send to default gateway, a router. However since the host does not know the mac address of the router to send the packet to the router in the local network. It is unable to put on the header 2 layer, the datalink layer. 
    - it must go through the arp process to get the mac address of the router. The arp protocol has a layer 2 header of the source mac address sends the pdu to the switch. The switch maps the port that the pdu went through with the pdu's source mac address and send the fram to all the devices on the local network(broadcast). The router recieved that frame and the arp maping of mac to ip address of the sender.
    - the router sends an arp response (unicast) to host a with its mac source addess. The frame will go through the switch which uses the mac table to send it to host a.
    - host a sends the frame with the known mac address of the router distination header, it goes through the router which sends it through the port associated with the router mac distination address. 
    - router one strips the header 2 layer.
    - the router send the packet to a system of routers for the most optimal route to the sub network that has the ip address.
    - the router must send an arp request to find the recievers mac address and broadcast it. Host B recieves the frame and sends an arp response to the router with it's source mac address and distination address on in the header. It adds on a header2 to the packet with now know distination mac address send the frame to host B which it. It strips the header 3 and header 2.

