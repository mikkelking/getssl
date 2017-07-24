# GetSSL

This is a quick and dirty web server that can be used to respond to web requests from the letsencrypt server

## Setup - all commands run on the remote server


```
ssh ubuntu@1.2.3.4
git clone https://github.com/mikkelking/getssl.git
cd getssl
npm install
sudo ./certbot.install.sh
```

*Start the web server*

```
sudo nodejs index.js
```

*Request the cert*

From another shell 

```
sudo certbot certonly -w ./public

```
