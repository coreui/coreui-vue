export const arrayIncludes = (array, value) => array.indexOf(value) !== -1
export function concat () {
  return Array.prototype.concat.apply([], arguments)
}
export const isArray = Array.isArray
