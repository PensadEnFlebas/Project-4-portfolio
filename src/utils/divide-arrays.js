export function divideArray(array, size) {
  const dividedArray = []
  for (let i = 0; i < array.length; i += size) {
    dividedArray.push(array.slice(i, i + size))
  }
  return dividedArray
}
