const flatArray = []
const flattenArray = array => {
    for (let element of array) {
        if (Array.isArray(element)) {
            flattenArray(element)
        } else {
            flatArray.push(element)
        }
    }
    return flatArray
}