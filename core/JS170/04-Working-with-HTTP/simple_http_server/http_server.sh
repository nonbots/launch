#!/bin/bash

# SENDS A RESPONSE FOR EVERY MESSAGE RECEIVED
# function server () {
#     # a for loop that runs indefintely 
#     while true
#     do
#         # assign any input receved to a variable named message with read 
#         read message
#         # echo outputs the string 
#         echo "You said: $message"
#     done

# }

# ADD STRUCTURE TO THE MESSAGES SENT BACK TO CLIENT 

# function server () {
#     while true 
#     do 
#         read method path version 
#         if [[ $method = 'GET' ]]
#         then 
#             echo "HTTP/1.1 200 OK"
#         else
#             echo "HTTP/1.1 400 Bad Request"
#         fi
#     done
# }

# ADD A BODY TO THE RESPONSE FROM THE SERVER. THE BODY WILL BE TAKEN FROM THE HTML FILE THAT THE REQUEST IS FOR

# The cat command's standard output is the monitor screen but it can be redirected form the screen to another file to be written to that file or to another command to use as the input for that command. Standard input is the keyboard if no file is specified 

# cat file1 > file2  

# The output redirection operator, >, redirects the output from cat, file1, to file2 instead of displaying file1 on the monitor.


# cat concats output text that is stringed together the contents of one file to another with a standard output to the screen. However the new output can be redirected to a new file. 

# cat file1 file2 file3 > file4 

# the '|' operator pipes or redirects to a filter which transforms data  

# file creation 
# cat > filename 
# append to a file 
# cat >> filename 

# to create a new file with content from another file and then adding input from the keyboard use: cat file - > file1 

# to create a new file with input from keyboard then content from another file use cat - file > file2.

# function server () {
#     subdomain="./www"
#     while true 
#     do 
#         read method path version 
#         if [[ $method = 'GET' ]]
#         then 
#             domain=$subdomain$path
#             if [[ $path = '/leopard.html' || $path = '/lion.html' ||  $path = '/tiger.html' ]]
#             then
#                 echo -e "HTTP/1.1 200 OK\n"; cat $domain; echo -e "\r\n"
#             else 
#                 echo -e "404 Not Found\r\n" 
#            fi
#         else
#             echo -e "HTTP/1.1 400 Bad Request\r\n"
#         fi
#     done
# }


# Working with the Browser to disply HTML file
# we currently are sending request from the terminal using netcat, how should we go about it using the browser

# update the request line needs to deal with multi-line requests.
# the browser would process the response instead of outputting it to our terminal. We need to supply the browser with all the info it needs to process the response
# the browser might terminate the connection after receiving a response which would end our server netcat process.

# function server () {
#   while true
#   do
#     message_arr=() # assigns message_arr to an emtpy array
#     check=true # assigns check to true
#     while $check # while check evaluates to true
#     do
#       read line # read the line ( line meaning where there is a space)
#       message_arr+=($line) # add the line to the message_arr
#       if [[ "${#line}" == 1 ]] # if the line length is one assign check to false which stops the loop
#       then
#         check=false
#       fi
#     done
#     method=${message_arr[0]}
#     path=${message_arr[1]}
#     if [[ $method = 'GET' ]]
#     then
#       if [[ -f "./www/$path" ]]
#       then
#         echo -ne 'HTTP/1.1 200 OK\r\n\r\n'; cat "./www/$path"
#         echo -e 'Content-type: text/html; charset=utf-8'
#       else
#         echo -ne 'HTTP/1.1 404 Not Found\r\n\r\n'
#       fi
#     else
#       echo -ne 'HTTP/1.1 400 Bad Request\r\n\r\n'
#     fi
#   done
# }

function server () {
  while true
  do
    message_arr=()
    check=true
    while $check
    do
      read line
      message_arr+=($line)
      if [[ "${#line}" -eq 1 ]]
      then
        check=false
      fi
    done
    method=${message_arr[0]}
    path=${message_arr[1]}
    if [[ $method = 'GET' ]]
    then
      if [[ -f "./www/$path" ]]
      then
        echo -ne "HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\nContent-Length: $(wc -c <'./www/'$path)\r\n\r\n"; cat "./www/$path"
      else
        echo -ne 'HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n\r\n'
      fi
    else
      echo -ne 'HTTP/1.1 400 Bad Request\r\nContent-Length: 0\r\n\r\n'
    fi
  done
}

coproc SERVER_PROCESS { server; }

netcat -lkv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}

#coproc command is used to set up a coprocess which allows you to run the server function asynchronously alongside netcat command.
coproc SERVER_PROCESS { server; }

#redirection of STDOUT, output, and STDIN, input. It takes the input from netcat process and redirects it to server_process, which passes it to the input of the server function as part of the functionality of the coprocess. The output of the server function, passed to server_process as part of the functionality of the coprocess, is redirected to the output of netcat. ANY INPUT THAT NECAT RECEIVES CAN BE ACCESSED WITHIN THE SERVER FUNCTION USING THE READ COMMAND AND ANYTHING THAT THE SERVER FUNCTION OUTPUTS USING ECHO WILL BE OUTPUT BY NETCAT 
netcat -lv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}