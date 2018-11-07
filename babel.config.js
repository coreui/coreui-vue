module.exports = { "presets": [
    ["vue-app", {
      "modules": false
    }]
  ],
  "plugins": [
    ["module-resolver", {
      "extensions": [".js", ".vue", ".json"]
    }]
  ],
  "env": {
    "test": {
      "plugins": ["dynamic-import-node"]
    }
  }
}
