# DSpace BIBBOX application

This container can be installed as [BIBBOX APP](http://silicolabv4.bibbox.org/applications "BIBBOX App Store") or standalone

* initial E-Mail/password: **test@test.edu / admin**
* after the docker installation goto http://silicolabv4.bibbox.org/instances

## Standalone Installation 

To install the app locally execute the commands:

`git clone https://github.com/bibbox/app-dspace`

`cd app-dspace`

`docker-compose up -d --build`

After the Installation open "http://localhost:5000" in your browser

The dafault port of the app SeedDMS is 8065.

If necessary change the ports in the environment file .env and the volume mounts in `docker-compose.yml`.


## Docker Images in the Aoo
  
  None Container under developement therfore no finished images -- Container Builds on docker starup 

## Install Environment Variables
  None
  
The default values for the standalone installation are:
  No settings required
