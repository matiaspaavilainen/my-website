ARG NODE_VERSION=25.2.1

# Build frontend
FROM node:${NODE_VERSION}-alpine AS frontend-build
WORKDIR /frontend
COPY Frontend/package*.json ./
RUN npm install
COPY Frontend/ ./
RUN npm run build

# Backend
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY Backend/package*.json ./
RUN npm install --omit=dev


# Copy backend files
COPY Backend/ .
COPY --from=frontend-build /frontend/dist ./dist

# Run the application as a non-root user.
RUN mkdir -p /usr/src/app/public && chown -R node:node /usr/src/app
USER node


# Expose the port that the application listens on.
EXPOSE 5000

# Run the application.
CMD ["node", "index.js"]
