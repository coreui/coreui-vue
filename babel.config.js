module.exports = {
      presets: [
        ['@vue/app', {
          "modules": false,
          polyfills: [
            'es6.promise', // already default included now
            'es6.array.iterator', // already default included now
            'es6.symbol',
            'es6.object.assign'
          ]
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
