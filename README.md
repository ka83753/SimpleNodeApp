SimpleNodeApp
=============

This is a simple NodeJS application and a distelli manifest file that can be used to deploy your application to any server using the <a href="http://www.distelli.com" target="_blank">Distelli Deployment Platform</a>

PreRequisites:
---------------

* <a href="http://www.distelli.com/docs/setup.html" target="_blank">Install the DistelliCLI</a>
* <a href="http://www.distelli.com/docs/server-setup.html" target="_blank">Add your Server</a>. Make sure its an Ubuntu Server.
* <a href="https://github.com/distelli/NodeJS target="_blank">Deploy the NodeJS Runtime on your server</a>

Deploying the SimpleNodeApp
---------------------------

Clone this repo and follow the steps below to deploy the SimpleNodeApp to your server. 

1. Edit the distelli-spec.yml file and replace <username> at the top of the file with your username from your Distelli Account
2. Create the Application: (<a href="http://www.distelli.com/docs/creating-an-application.html" target="_blank"><i>What is this?</i></a>)

    <pre>% distelli create SimpleNodeApp
        Creating App: SimpleNodeApp
        App SimpleNodeApp created successfully
    </pre>

3. Push a new Release: (<a href="http://www.distelli.com/docs/pushing-an-artifact.html" target="_blank"><i>what is a release?</i></a>)

    <pre>% distelli push -m "Initial Release of SimpleNodeApp"
        Pushing App: SimpleNodeApp
        Uploading: [==========] 100%
        Creating Releases... DONE
    </pre>

4. Deploy the release you just pushed using the Distelli Web Interface. (<a href="http://www.distelli.com/docs/starting-a-deployment.html" target="_blank"><i>show me how</i></a>)

Wait for the deployment to complete. Once the deployment is finished the SimpleNode App will be running on your server on port 8080. To test it out make a request and you should see a hello world message:

<pre>
curl -v http://ec2-67-202-47-54.compute-1.amazonaws.com:8080/ ; echo
* About to connect() to ec2-67-202-47-54.compute-1.amazonaws.com port 8080 (#0)
*   Trying 67.202.47.54... connected
> GET / HTTP/1.1
> User-Agent: curl/7.22.0 (x86_64-pc-linux-gnu) libcurl/7.22.0 OpenSSL/1.0.1 zlib/1.2.3.4 libidn/1.23 librtmp/2.3
> Host: ec2-67-202-47-54.compute-1.amazonaws.com:8080
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 37
< Date: Sat, 20 Jul 2013 18:52:37 GMT
< Connection: keep-alive
< 
* Connection #0 to host ec2-67-202-47-54.compute-1.amazonaws.com left intact
* Closing connection #0
Hello World from NodeJS and Distelli!
</pre>
 
