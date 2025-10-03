## multer
# why we need it?
- when we upload files using form, the data is sent in multipart/form-data format
- express does not have inbuilt functionality to handle multipart/form-data
- multer is a middleware to handle multipart/form-data
- multer makes the uploaded files available in req.file or req.files
- multer saves the uploaded files to the server's filesystem or memory

# installation
- npm install multer


# usage
- require multer
- configure multer storage
- use multer as middleware in the route handling file upload
- access the uploaded file in req.file or req.files
- save the file information to database if needed
- serve the uploaded files using express.static middleware



## Cloudinary
- cloudinary is a cloud service that provides an API for image and video management












## WEB - Sockects
# why web sockets?
- HTTP is a stateless protocol
- for every request, a new connection is established and closed after the response is sent
- this is inefficient for real-time applications like chat apps, online gaming, etc.
- web sockets provide a full-duplex communication channel over a single TCP connection
- web sockets allow real-time data transfer between client and server
- web sockets are supported by most modern browsers
# installation socket.io
- npm install socket.io
- npm install socket.io-client
# usage
- require socket.io on server side
- initialize socket.io with the HTTP server
- listen for connection event
- emit and listen for custom events
- on client side, require socket.io-client
