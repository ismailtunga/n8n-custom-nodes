# Custom Nodes

This project is intended to hold all custom nodes for n8n and deploy them with a single command.

# I need to access some files ( except typescript files ) from my node script. What should I do ?

Put your files in the node directory. Then add files/folders names to copy.txt line by line, for instance:

```
incident.xml
service_names.txt
```

# Adding external libraries for development

Let's go through an example that uses `soap` library in `softexpert node`.
First navigate to the node directory then 

```
npm init
npm install soap
```
this will help you build. But to access the library files in runtime. You need to also install dependencies in `~/.n8n/custom`. So

```
cd ~/.n8n/custom
npm install soap
```

Then you are ready to hack around!

# Adding external libraries for production
Let's go through an example that uses `soap` library in `softexpert node`.
First navigate to the node directory then 

```
npm init
npm install soap
```

Then navigate back to root directory where all nodes are hold. And again

```
npm install soap
```

Then to build

```
sh setup.sh
```


