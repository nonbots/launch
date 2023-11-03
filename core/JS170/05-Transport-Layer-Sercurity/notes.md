# Introduction 

1. A HTTP Request or Response is interception allows for the message to be read and thus difficult to know if the source of an HTTP response is trustworthy or if it has been tampered with in transit. 

# What to Focus On

1. Understand that TLS provides for secure message exchange over an unsecure channel.
2. There are multiple aspects of security.

# Transport Layer Security Protocol

1. Originally Secure Sockets Layer, a proprietary protocol by Netscape. Most recent TLS version is 1.3.

2. Three services provided by TLS:
    - Encryption: a process of encoding a message so that it can only be read by those with an authorized means of decoding the message 
        - Symmetric Key: key system whereby sender and receiver share a share
            - the key is encrypted itself so that it can not be used if intercepted.
            - Question: How do sender receiver exchange encrytion keys in the first place? We need a mechanism whereby we can encrypt the encryption key itself.
        - Asymmetric Key: use a pair of public and private keys. The keys in the pair are not identical. Public is for encryption and private is for decryption.
        - TLS Handshake : uses a combination of symmetric and asymmetric crytography. 
            - initial symmetric key exchnage is conducted using asymmetric key encryption. (TLS handshake)
            - the message exchange is conducted via symmetric key encrytion
            - TLS takes place after the TCP handshake, which creates a connection to the server.
            - TLS Process: 
                - ClientHello message sent by client to after the TCP ACK, which contains the maz version of the TLS protocol that the client can support and a list of Cipher Suites that the client is able to use.
                - Server recieves ClientHello message and responds with a ServerHello message with the set protocol version and cipher suite, its certificate, which contains the public key, a serverHelloDone marker indicating to the client complete of the current step and other related information. 
                - The client recieves the ServerHelloDone markder which initiate the key exchanage process that enables both the client and server to securely obtain a copy of the symmetric encryption key. The generation of symmetric keys vary depending on which key excahnge alogrithm was selected as part of the Cipher Suite.
                    - RSA
                        - clients gernerates a pre-master secrets encrypts it using the servers'private key and sends it to the server 
                        - server recieves the pre-master secret and decrypts it using its private key
                        - Client and sever us the pre-master secret along eith other pre-agreed parametes to generate the same symmetric kye. 
                        - Clietns sends a ChangeCipherSpec flag that tells the server that encrypted communications should now start using symmetric keys. The finished flag indicates that the client is now done with the TLS Handshake.
                - server sends a message with ChangeCipherSpec and finshed flags and symmetric communication starts
            - TLS key points:
                - agree which version of TLS to use in establishing a secure connection 
                - aggree on the various algorithms to be included in the cipher suite
                - enable the exchange of symmetric keys used for message encryption 
            - TLS can add up to two round-trips of latency depending on the verion to the esblishment of a connection between client and server prior to the point where any apllication data can be sent in addition to the TCP Handshake
    - Authentication: a process to verify the identity of a particular party in the message exchange.
    - Integrity: a process to detect whether a message has been intefered with or faked.
3. In general all three serviced are used together to provide the most secure connection.

## Cipher Suites

1. cipher: a crytogrphic algorithm; a set of steps for performing encryption, decryption, and other related tasks. a suite is a set of ciphers

2. TLS use different ciphers for diffrerent aspects fo establishing and maintaining a secure connection such as 
    - key exchange
    - authentication
    - symmetric key encrytion
    - message integrity
3. The client sends a list of algorithms it supports for each required task in the clientHello message and the sever chooses which to use based on which it supports 

# TLS Authentication

1. During the TLS Handshake, as part of the response to teh ClientHello message, the server provides its certificate as a way to identify the party providing it.

2. The way the public key is used during the authentication process:
    - server sends its certificat with the public key 
    - server creates a signature in the form of some data encrypted with the server's private key
    
    - The signature is transmitted in a message along with data from which teh signature was created
    - the slient decrypts the signature using the server's public key and compares the decrypted data to the original version
    - if match then the encrypted version was created by a party in possession of the private key. 
       
## Cerfificate Authorities and the Chain of Trust

3. What if a party create a fake certificate?

1. Certificate Authorities(CAs) - digital certificates from a trustworthy source.
    - verifies that party as who they say they are
    - digitally signs the certificate being issued by encrypting some data with the CA's own private key and adding to the certificate. The signature can be decrypted using the CA's public key and checked for a match against the unencrypted version.
 
 2. Client software store a list of authorities along with their root certificates include their public key. When receiving a certificate for checking the browser can go up the chain to the root stored in its list   
 
 3. The root CAs are keep behind layers of security for when the private key of an intermediate CA is compromised, teh root CA can revoke the cerificate for Intermediate, therefore invalidating the certificate down the chain and issuing new ones.

 4. Root CAs are small group of organizations approved by browser and operationg system vendors.

# TLS Integrity 

1. TLS provides functionality to check the integrity of data transported via the protocol

## TLS Encapsulation

1. OSI defines TLS as a session layer protocol and in transport layer for TCP/IP model. 

## Message Authentication Code (MAC)

1. Message Authentication Code is meta data on a TLS protocol that add a layer of security by providing a means of cheking that the message hasn't been altered or tampered with in transit through the use of a hashing algorithm:
    - Sender creates a digest of the data payload which is a small anount of data derived from the actual data that will be sent in the MAC field created using a hasing algo and hash value agreed as part of the TLS handshake when deciding the cipher suite
    - dender encrypt the  the data pyload uisng he symmertic key, encapsulates it in a TLS record and passes this record down the Transport layer to the send to the reciever.
    - reciever decrypts teh payload using the symmetric key and create digest of the payload using the same algo and hash value if the digest created by the reciever matches the digiest in the MAC field, this confrims the integrity of the message.