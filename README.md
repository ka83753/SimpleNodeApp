#SimpleNodeApp
This tutorial will walk you through deploying a simple Hello World Node.js Application to any server with <a href="https://www.distelli.com" target="_blank">Distelli</a>.

<a href="https://www.distelli.com" target="_blank">Distelli</a> makes it fast and easy for developers to deploy code to any server with the push of a button. Our platform empowers developers and their teams to spend less time building and maintaining complex deployment tools and homegrown scripts so they can focus their valuable time and effort on creating the software that powers their business. Distelli is funded by <a href="http://www.a16z.com" target="_blank">Andreessen Horowitz</a>.

##Prerequisites:##
* <a href="https://www.distelli.com/signup" target="_blank">Sign up for a free Distelli account</a>.
* <a href="https://www.distelli.com/docs/setup" target="_blank">Install the Distelli CLI Tool</a>.
* <a href="https://www.distelli.com/docs/agent-setup" target = "_blank">Install the Distelli agent on your server</a>.

##Deploying Your Node.js Application With Distelli##

1. Enter the following commands to clone this repository onto your local machine:
<pre>git clone https://github.com/Distelli/SimpleNodeApp.git</pre>
You should see the following message on successful clone:
Then, use the cd command to enter the directory:
<pre>cd SimpleMeteorApp</pre>

2. Edit the distelli-manifest.yml file and replace &lt;username&gt; at the top of the file with your username from your Distelli Account
    <i>Replace &lt;username&gt; with your username</i>
    <pre>% distelli create &lt;username&gt;/SimpleNodeApp
        Creating App: SimpleNodeApp
        App SimpleNodeApp created successfully
    </pre>
3. Create the Application: (<a href="http://www.distelli.com/docs/creating-an-application.html" target="_blank"><i>What is this?</i></a>)

4. Push a new Release: (<a href="http://www.distelli.com/docs/pushing-an-artifact.html" target="_blank"><i>what is a release?</i></a>)

    <pre>% distelli push -m "Initial Release of SimpleNodeApp"
        Pushing App: SimpleNodeApp
        Uploading: [==========] 100%
        Creating Releases... DONE
    </pre>

5. Deploy the release you just pushed using the Distelli Web Interface. (<a href="https://www.distelli.com/docs/deployment-guides" target="_blank"><i>show me how</i></a>)

Wait for the deployment to complete. Once the deployment is finished the SimpleNode App will be running on your server on port <b>8080</b>. To test it out make a request and you should see a hello world message:

<pre>
curl http://ec2-67-202-47-54.compute-1.amazonaws.com:8080/
Hello World from NodeJS and Distelli!
</pre>

