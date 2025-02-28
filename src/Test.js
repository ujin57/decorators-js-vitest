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