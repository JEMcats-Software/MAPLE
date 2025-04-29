FROM node:latest

COPY ./data/ /app/data/
COPY ./main_scripts/ /app/main_scripts/

RUN cd /app/main_scripts && npm install

CMD [ "node", "/app/main_scripts/index.js" ]