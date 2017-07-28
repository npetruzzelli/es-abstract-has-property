# HasProperty

A method to determine whether an object has a property with the specified
property key. The property may be either an own or inherited. This method
follows ECMAScript's specification for the 'HasProperty' abstract operation.

Currently, this module only supports the ES2017 (ES8) specification.

## Why?

While working on a module, I found myself with a need to reproduce ECMAScript
internal methods and abstract operations. I wanted smaller, modular code instead
of a larger library.

## Installation Using [npm](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```
npm install es-abstract-has-property
```

## Example Usage

```javascript
var hasProperty = require('es-abstract-has-property');

function Animal(obj){
  this.animalInstanceMethod_A = function alfa(a) {}
  this.init.apply(this, arguments)
}
Animal.prototype.init = function animalInit() {
  this.animalInstanceMethod_B = function bravo(b) {}
}
Animal.animalStaticMethod = function charlie(c) {}
Animal.prototype.animalPrototypeMethod = function delta(d) {}

function Cat(){
  this.init.apply(this, arguments)
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.init = function catInit() {
  Animal.prototype.init.call(this)
  this.catInstanceMethod = function echo(e) {}
}

var c = new Cat()
console.log(c.hasOwnProperty("animalPrototypeMethod")) // => false
console.log(hasProperty(c, "animalPrototypeMethod"))   // => true
console.log(hasProperty(c, "animalInstanceMethod_A"))  // => false
console.log(hasProperty(c, "animalInstanceMethod_B"))  // => true
console.log(hasProperty(c, "animalStaticMethod"))      // => false
```

## Documentation

-   [API](#api)
-   [ECMAScript Specification References](./docs/HasProperty-es2017.markdown)

## API

### HasProperty(O, P)

Determine whether an object has a property with the specified property key. The
property may be either an own or inherited.

A Boolean value is returned.

#### O

Type: `Object`

The object being checked. Values will be coerced using [`Object(O)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), allowing for the checking of properties such as "length" on a string primitive.

#### P

Type: `String`

The property key to look for on the object.

## Related Projects

-   **[es-abstract](https://github.com/ljharb/es-abstract)**: a single library
    for multiple ECMAScript abstract operations.
