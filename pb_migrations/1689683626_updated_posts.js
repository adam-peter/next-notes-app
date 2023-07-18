migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yzcch5wjwfarg6")

  // remove
  collection.schema.removeField("vs07dgey")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evrnwe9g",
    "name": "imageUrl",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yzcch5wjwfarg6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vs07dgey",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("evrnwe9g")

  return dao.saveCollection(collection)
})
