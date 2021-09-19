FROM node:16-alpine

LABEL maintainer="Leonardo Caycho"

WORKDIR /app
#tiempo del servidor igual al del sistema
ENV TZ=UTC
#para que los archivos puedan actualizarse en tiempo real al modificarlos en el entorno de docker
ENV CHOKIDAR_USEPOLLING=true

#colocando el tiempo del servidor
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000