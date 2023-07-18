migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yzcch5wjwfarg6")

  // remove
  collection.schema.removeField("evrnwe9g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxrktf5f",
    "name": "imageUrl",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yzcch5wjwfarg6")

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

  // remove
  collection.schema.removeField("sxrktf5f")

  return dao.saveCollection(collection)
})
