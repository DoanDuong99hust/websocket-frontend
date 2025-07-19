## Config JS dependencies
### Install Dependencies for WebSocket
- npm install @stomp/stompjs 
- npm install sockjs-client
- npm i --save-dev @types/sockjs-client
### add to: angular.json -> projects -> architect -> build -> options
    "allowedCommonJsDependencies": [
      "@stomp/stompjs",
      "sockjs-client"
    ],
## Config Global
### Create src/global-shim.js, add to file
- window.global = window;

### add to : angular.json -> projects -> architect -> build -> options
    "scripts": [
      "src/global-shim.js"
    ],

