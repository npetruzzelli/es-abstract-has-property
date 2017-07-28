# HasProperty

Per the ECMAScript 2017 (8th Edition) specification

## [5.2 Algorithm Conventions](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-algorithm-conventions)

> Calls to abstract operations return Completion Records. Abstract operations
> referenced using the functional application style and the method 
> application style that are prefixed by **?** indicate that ReturnIfAbrupt 
> should be applied to the resulting Completion Record. For example, 
> ? operationName() is equivalent to ReturnIfAbrupt(operationName()). 
> Similarly, ? someValue.operationName() is equivalent to 
> ReturnIfAbrupt(someValue.operationName()).

> A step that begins with _"Assert:"_ asserts an invariant condition of its
> algorithm. Such assertions are used to make explicit algorithmic invariants
> that would otherwise be implicit. Such assertions add no additional
> semantic requirements and hence need not be checked by an implementation.
> They are used simply to clarify algorithms.

## Abstract Operation: [7.3.10 `HasProperty`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-hasproperty)

> The abstract operation HasProperty is used to determine whether an object
> has a property with the specified property key. The property may be either 
> an own or inherited. A Boolean value is returned. The operation is called
> with arguments O and P where O is the object and P is the property key. 
> This abstract operation performs the following steps:
> 
> 1.  Assert: Type(O) is Object.
> 2.  Assert: IsPropertyKey(P) is true.
> 3.  Return ? O.\[[HasProperty]\](P).

## Internal Method: [9.1.7 `[[HasProperty]](P)`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-ordinary-object-internal-methods-and-internal-slots-hasproperty-p)

> When the [[HasProperty]] internal method of O is called with property key P,
> the following steps are taken:
> 
> 1.  Return ? OrdinaryHasProperty(O, P).

### Internal Method: [9.1.7.1 `OrdinaryHasProperty ( O, P )`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-ordinaryhasproperty)

> When the abstract operation OrdinaryHasProperty is called with Object O and
> with property key P, the following steps are taken:
> 
> 1.  Assert: IsPropertyKey(P) is true.
> 2.  Let hasOwn be ? O.\[[GetOwnProperty]\](P).
> 3.  If hasOwn is not undefined, return true.
> 4.  Let parent be ? O.\[[GetPrototypeOf]\]().
> 5.  If parent is not null, then
>     1.  Return ? parent.\[[HasProperty]\](P).
> 7.  Return false.

**NOTE:** This module substitutes:

-   [`O` coerced to an object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) for `O`
-   [`Object.prototype.hasOwnProperty ( V )`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) for `O.[[GetOwnProperty]](P)`
-   [`Object.getPrototypeOf ( O )`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) for `O.[[GetPrototypeOf]]()`
-   itself for `[[HasProperty]](P)`
