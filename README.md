My personal website, made with [React](https://react.dev/) and [Node.js](https://nodejs.org/en). It functions mainly as a personal photo gallery. Frontend is created with [Vite](https://vite.dev/) + React, [React Router](https://reactrouter.com/) used for routing within the frontend. Node.js serving the frontend statically is used as the backend. Backend routing is implemented with [Express](https://expressjs.com/). Information such as title and category for each image are stored in a [MySQL](https://www.mysql.com/) database, and fetched to the website with [mysql2](https://github.com/sidorares/node-mysql2). The creation time is extracted from the images' exif data using [ExifReader](https://github.com/mattiasw/ExifReader) and also added to the database. The photos can be sorted based on the time, and filtered using the different categories. This feature is implemented with [React Select](https://react-select.com/).
