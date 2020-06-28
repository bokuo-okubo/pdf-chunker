FROM node:12

WORKDIR /works
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn

ENTRYPOINT [ "./pdf-chunker" ]