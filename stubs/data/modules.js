const {faker} = require('@faker-js/faker');

function createModules() {
    return {
        
            "id": 1,
            "name": "Appbitos",
            "edition": "Primera Edición",
            "description": "Aplicacion TrainIT",
            "image": "bamboo-watch.jpg",
            "icon": "pi pi-tag",
            "lider": "Mariano Alcaraz",
            "cells": [
              {
                  "id": 1,
                  "name": "Frontend",
                  "lider": "Leonardo",
                  "description": "desarrollo frontend"
              },
              {
                  "id": 2,
                  "name": "Backend",
                  "lider": "Leonardo",
                  "description": "desarrollo backend"
              },
              {
                  "id": 3,
                  "name": "QA",
                  "lider": "Leonardo",
                  "description": "pruebas con QA"
              },
              {
                  "id": 4,
                  "name": "Bussines",
                  "lider": "Leonardo",
                  "description": "desarrollo front end"
              }
            ]
        
    };
}

module.exports = faker.helpers.multiple(createModules, {
    count: 1,
})

