var scheme = {
  "openapi" : "3.0.4",
  "info" : {
    "title" : "Task Manager"
  },
  "servers" : [ {
    "url" : "https://tm.volnenko.ru/api/"
  } ],
  "components" : {
    "schemas" : {
      "ErrorDto" : {
        "type" : "object",
        "title" : "Ошибка",
        "description" : "Ошибка",
        "required" : [ "success" ],
        "properties" : {
          "success" : {
            "type" : "boolean",
            "title" : "Результат выполнения",
            "description" : "Результат выполнения"
          },
          "message" : {
            "type" : "string",
            "title" : "Сообщение об ошибке",
            "description" : "Сообщение об ошибке"
          },
          "errorCode" : {
            "type" : "string",
            "title" : "Код ошибки",
            "description" : "Код ошибки"
          }
        }
      },
      "ProjectDto" : {
        "type" : "object",
        "description" : "Проект",
        "required" : [ "id", "name", "description", "statusType", "created", "updated" ],
        "properties" : {
          "id" : {
            "type" : "string",
            "format" : "uuid",
            "title" : "Идентификатор",
            "description" : "Идентификатор"
          },
          "name" : {
            "type" : "string",
            "title" : "Название",
            "description" : "Название"
          },
          "description" : {
            "type" : "string",
            "title" : "Описание",
            "description" : "Описание"
          },
          "statusType" : {
            "type" : "string",
            "title" : "Статус",
            "description" : "Статус",
            "enum" : [ "NOT_STARTED", "IN_PROGRESS", "COMPLETE" ]
          },
          "created" : {
            "type" : "string",
            "format" : "iso8601",
            "title" : "Дата создания",
            "description" : "Дата создания"
          },
          "updated" : {
            "type" : "string",
            "format" : "iso8601",
            "title" : "Дата создания",
            "description" : "Дата создания"
          }
        }
      },
      "TaskDto" : {
        "type" : "object",
        "description" : "Задача",
        "required" : [ "id", "name", "description", "statusType", "created", "updated" ],
        "properties" : {
          "id" : {
            "type" : "string",
            "format" : "uuid",
            "title" : "Идентификатор",
            "description" : "Идентификатор"
          },
          "name" : {
            "type" : "string",
            "title" : "Название",
            "description" : "Название"
          },
          "description" : {
            "type" : "string",
            "title" : "Описание",
            "description" : "Описание"
          },
          "statusType" : {
            "type" : "string",
            "title" : "Статус",
            "description" : "Статус",
            "enum" : [ "NOT_STARTED", "IN_PROGRESS", "COMPLETE" ]
          },
          "created" : {
            "type" : "string",
            "format" : "iso8601",
            "title" : "Дата создания",
            "description" : "Дата создания"
          },
          "updated" : {
            "type" : "string",
            "format" : "iso8601",
            "title" : "Дата создания",
            "description" : "Дата создания"
          }
        }
      }
    }
  },
  "paths" : {
    "/api/v1/project/all/" : {
      "get" : {
        "tags" : [ "project" ],
        "summary" : "Выборка всех проектов.",
        "description" : "Выборка всех проектов.",
        "operationId" : "selectAllProject",
        "responses" : {
          "200" : {
            "description" : "Успешный ответ",
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/components/schemas/ProjectDto"
                  }
                }
              },
              "application/xml" : {
                "schema" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/components/schemas/ProjectDto"
                  }
                }
              }
            }
          },
          "default" : {
            "description" : "Неизветсная ошибока",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ErrorDto"
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/project/one/{projectId}/" : {
      "get" : {
        "tags" : [ "project" ],
        "summary" : "Выборка проекта.",
        "description" : "Выборка одного проекта по Id.",
        "operationId" : "selectOneProject",
        "parameters" : [ {
          "name" : "projectId",
          "in" : "path",
          "description" : "Код проекта",
          "required" : true,
          "schema" : {
            "type" : "string",
            "format" : "uuid"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Успешный ответ",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ProjectDto"
                }
              },
              "application/xml" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ProjectDto"
                }
              }
            }
          },
          "404" : {
            "description" : "Проект не найден"
          },
          "default" : {
            "description" : "Неизветсная ошибока",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ErrorDto"
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/task/all/" : {
      "get" : {
        "tags" : [ "task" ],
        "summary" : "Выборка всех задач.",
        "description" : "Выборка всех задач.",
        "operationId" : "selectAllTask",
        "responses" : {
          "200" : {
            "description" : "Успешный ответ",
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/components/schemas/TaskDto"
                  }
                }
              },
              "application/xml" : {
                "schema" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/components/schemas/TaskDto"
                  }
                }
              }
            }
          },
          "default" : {
            "description" : "Неизветсная ошибока",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ErrorDto"
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/task/one/{taskId}/" : {
      "get" : {
        "tags" : [ "task" ],
        "summary" : "Выборка задачи.",
        "description" : "Выборка одной задачи по Id.",
        "operationId" : "selectOneTask",
        "parameters" : [ {
          "name" : "taskId",
          "in" : "path",
          "description" : "Код задачи",
          "required" : true,
          "schema" : {
            "type" : "string",
            "format" : "uuid"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Успешный ответ",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/TaskDto"
                }
              },
              "application/xml" : {
                "schema" : {
                  "$ref" : "#/components/schemas/TaskDto"
                }
              }
            }
          },
          "404" : {
            "description" : "Проект не найден"
          },
          "default" : {
            "description" : "Неизветсная ошибока",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/ErrorDto"
                }
              }
            }
          }
        }
      }
    }
  }
}