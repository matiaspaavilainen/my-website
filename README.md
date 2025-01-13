# Personal website with a photo gallery

My personal website, visitors can view photos I've taken.

## Technologies used

- **Frontend**
  - [React](https://react.dev/), [React Router](https://reactrouter.com/), [React Select](https://react-select.com, [Axios](https://axios-http.com/), vanilla CSS for styling
- **Backend**
  - [Node.js](https://nodejs.org/en), [Express](https://expressjs.com/), [MySQL](https://www.mysql.com/), [mysql2](https://github.com/sidorares/node-mysql2)
- **Build tool**
  - [Vite](https://vite.dev/)
- **Hosting**
  - Self-hosted with [nginx](https://nginx.org/en/) as a reverse proxy for Node, running on an Ubuntu server
  - [matiaspaavilainen.com](matiaspaavilainen.com)

## Features

Simple UI and navigation with React Router, focusing on minimal design and responsiveness. Information about photos, such as title, categories, and filename are stored in a MySQL database. [ExifReader](https://github.com/mattiasw/ExifReader) is used to extract the image's creation time to also store in the DB. When the images are added to the database, they also get a new unique filename based on the title. A thumbnail is also created with [image-thumbnail](https://github.com/onildoaguiar/image-thumbnail#readme) for each image and stored separately. The image files are served statically from the server. In the gallery view thumbnails are used, and clicking on an image opens the full resolution version.

- **Missing features / problems**
  - Filtering and sorting system for photos
  - Authorisation to enable adding photos from anywhere for authenticated users
  - Additional controls, e.g. keyboard for closing the sidebar and scrolling images in large view
  - Enhance mobile user experience, currently just okay
