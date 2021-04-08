export default function genericsAdvancedSample() {
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

    const mapStringsToNumbers: Map<string, number> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++){
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }
    const numbers = mapStringsToNumbers(["123", "456", "789"], (item) => Number(item))

    console.log("Generics advanced 1 : ", numbers)

    const mapNumberToString: Map<number, string> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }
    const numbers2 = mapNumberToString([987,654,321], (item) => String(item))
    console.log("Generics advanced 2: ", numbers2)
}

genericsAdvancedSample()
