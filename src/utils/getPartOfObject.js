export default function getPartOfObject (originalObject, keys, reduce = false) {
  const keysArray = Array.isArray(keys) ? keys : Object.keys(keys)
  return Object.keys(originalObject).reduce((generatedObject, key) => {
    if (reduce !== keysArray.includes(key)) {
      generatedObject[key] = originalObject[key]
    }
    return generatedObject
  }, {})
}
