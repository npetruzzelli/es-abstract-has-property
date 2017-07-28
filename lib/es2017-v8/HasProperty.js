/**
 * ECMAScript 2017 (8th Edition): `HasProperty` Abstract Operation.
 *
 * The abstract operation HasProperty is used to determine whether an object has
 * a property with the specified property key. The property may be either an own
 * or inherited. A Boolean value is returned. The operation is called with
 * arguments O and P where O is the object and P is the property key. This
 * abstract operation performs the following steps:
 *
 * (Abridged Steps:)
 *
 * 1.  Let hasOwn be ? O.[[GetOwnProperty]](P).
 * 2.  If hasOwn is not undefined, return true.
 * 3.  Let parent be ? O.[[GetPrototypeOf]]().
 * 4.  If parent is not null, then
 *     a.  Return ? parent.[[HasProperty]](P).
 * 5.  Return false.
 *
 * **NOTE:** This module substitutes:
 *
 * -   `O` coerced to an object for `O`
 * -   `Object.prototype.hasOwnProperty ( V )` for `O.[[GetOwnProperty]](P)`
 * -   `Object.getPrototypeOf ( O )` for `O.[[GetPrototypeOf]]()`
 * -   itself for `[[HasProperty]](P)`
 */
function HasProperty(obj, P) {
  var parent
  var O = Object(obj)
  var hasOwn = O.hasOwnProperty(P)
  if (hasOwn !== true) {
    parent = Object.getPrototypeOf(O)
    if (parent != null) {
      return HasProperty(parent, P)
    } else {
      return false
    }
  }
  return true
}

module.exports = HasProperty
