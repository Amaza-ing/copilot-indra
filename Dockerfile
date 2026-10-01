FROM nginx:alpine

COPY index.html style.css script.js app-logic.js /usr/share/nginx/html/