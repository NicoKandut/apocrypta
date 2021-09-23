function* idGenerator(startId: number) {
  let id = startId
  while (true) yield id++
}

// generator will never reach return
// therefore, return type number is okay to use here
const generator = idGenerator(0) as unknown as Generator<number, number>

export const generateId = () => generator.next().value
