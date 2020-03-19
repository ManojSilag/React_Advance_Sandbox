export default {
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The Root Schema",
  "description": "The root schema comprises the entire JSON document.",
  "required": [
      "commentList",
      "auth"
  ],
  "properties": {
      "commentList": {
          "$id": "#/properties/commentList",
          "type": "array",
          "title": "The Commentlist Schema",
          "description": "An explanation about the purpose of this instance.",
          "default": [],
          "items": {
              "$id": "#/properties/commentLis/items",
              "type": "string",
              "title": "The Items Schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                  "Comment #1",
                  "Comment #2"
              ]
          }
      },
      "auth": {
          "$id": "#/properties/auth",
          "type": "boolean",
          "title": "The Auth Schema",
          "description": "An explanation about the purpose of this instance.",
          "default": false,
          "examples": [
              true
          ]
      }
  }
}
