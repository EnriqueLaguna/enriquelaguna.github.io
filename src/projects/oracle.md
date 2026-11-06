---
title: "Refactorización de un microservicio para guardias en Oracle"
organization: "Oracle"
summary: "Actualicé un microservicio interno y su interfaz para facilitar la investigación de errores durante las guardias."
technologies:
  - Java
  - Dropwizard
  - OpenAPI
---

## El contexto

El microservicio daba soporte al equipo de guardia (*on-call*). Al investigar un error, el equipo necesitaba encontrar en los logs qué había pasado, en qué recurso y en qué momento.

## Mi contribución

Estuve a cargo de actualizar y refactorizar el servicio, construido con Java y Dropwizard. Cambié cómo se registraban el mensaje de error, el recurso que lo generaba y la marca de tiempo. El objetivo era facilitar la identificación del recurso asociado al error durante una guardia.

## La interfaz

Desarrollé una nueva interfaz que consumía los endpoints del microservicio mediante un cliente generado a partir de la especificación OpenAPI.
