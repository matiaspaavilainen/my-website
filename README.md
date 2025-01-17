# Personal website with a photo gallery

My personal website, visitors can view photos I've taken.

## Technologies used

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- **Frontend**
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
- **Backend**
  
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
- **Build tool**
  
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
- **Hosting**
  
  [![Nginx](https://img.shields.io/badge/Nginx-269539?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/en/)
  [![matiaspaavilainen.com](https://img.shields.io/badge/matiaspaavilainen.com-darkslategray?style=for-the-badge&logoColor=white)](https://matiaspaavilainen.com)


## Features

Simple UI and navigation with [React Router](https://reactrouter.com/), focusing on minimal design and responsiveness. Information about photos, such as title, categories, and filename are stored in a MySQL database. [ExifReader](https://github.com/mattiasw/ExifReader) is used to extract the image's creation time to also store in the DB. When the images are added to the database, they also get a new unique filename based on the title. A thumbnail is also created with [image-thumbnail](https://github.com/onildoaguiar/image-thumbnail#readme) for each image and stored separately. The image files are served statically from the server. In the gallery view thumbnails are used, and clicking on an image opens the full resolution version.

- **Missing features / problems**
  - Filtering and sorting system for photos
  - Authorisation to enable adding photos from anywhere for authenticated users
  - Additional controls, e.g. keyboard for closing the sidebar and scrolling images in large view
  - Enhance mobile user experience, currently just okay
