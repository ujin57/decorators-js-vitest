import {expect, test} from 'vitest'

function decoratorExample() {
  console.log('hi')
}

@decoratorExample
class MyClass {
  #prop = 'hello'

  get prop() {
    return this.#prop
  }
}

test('hello test', () => {
  const myClass = new MyClass()

  expect(myClass.prop).toEqual('hello')
})
