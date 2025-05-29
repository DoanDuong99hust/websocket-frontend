## Config JS dependencies
### Install Dependencies for WebSocket
- npm install @stomp/stompjs 
- npm i --save-dev @types/sockjs-client
### add to: angular.json -> projects -> architect
    "allowedCommonJsDependencies": [
      "@stomp/stompjs",
      "sockjs-client"
    ],
## Config Global
### Create src/global-shim.js, add to file
- window.global = window;

### add to : angular.json -> projects -> architect -> script: []
    "scripts": [
      "src/global-shim.js"
    ],

