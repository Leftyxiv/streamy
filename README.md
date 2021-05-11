## Streamy : Twitch clone

Video Streaming Platform

# Built with : 

  - React
  - Redux
  - React Forms
  - OBS (https://obsproject.com/)
  - Flv.js
  - React Redux Router


# Getting Started with the platform:

  1- Clone the the project

  2- On the the project's 3 Directories (api - rtmpserver - client) run `npm start`
  
    - api folder : is a json database using 'db.json' file which already has some examples of the recoreds
    
    - rtmpserver : holds the streaming server
    
    - client : where you have the channels and users that you want to see and manage your streams/channels

  3- Using your google account login to the platform using the top corner right hand side (sign in with google)

  4- Start viewing other streamers.
  
  
# Getting started with streaming:

  1- Install OBS using the instrucations on the website

  2- Open OBS 

  3- Configure A new scene

  4- Add an audio capture device

  5- Add a screen capture configuration

  6- From OBS open settings and select `Stream` from the right menu choose 
  
    server : `custom` 
    
    url : `rtmp://localhost/live`
    
    Stream Key : `1` (Represents the stream id from the application URL ex: http://localhost:3000/streams/1) 1 is the stream id
    
  7- Using your google account login to the platform using the top corner right hand side (sign in with google)
  
  8- Create stream.
    
  9- Start streaming.
