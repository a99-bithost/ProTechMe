# ProTechMe

Online protection client app for TechMe Gawler "ProTechMe" subscribers.
Clicking connect will connect the customer's computer to our secure openvpn server.
DNS is handled by a pihole instance, publically updated adlists and upstream DNS is quad-1

Clicking Request Help will create a custom event that will be detected by Ninja agent software, sending an alert to our Technicians for remote access

Installation:

Customers will generally be given the link [tba] to download the latest release.
Win32 and Darwin releases will be available from this link.

Building the application from source:

To compile from source, first ensure you have node.js installed:

```sudo apt install npm```

Then, update node.js to version 14:

```npm cache clear --force && npm install -g n && n -stable```

Install Electron and Electron-Forge:

```npm install electron create-electron-app --save-dev```

Ensure all other deps are installed (node-modules)

```npm install```

Check to see that the app runs in Electron:

```npm start```

Build the application excecutables/installers save to ./out

Windows: ```npm run make```
MacOS: ```npm run make-mac```


