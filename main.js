import {triangle} from "./triangle.js"
import {square} from "./square.js"
import {circle} from "./circle.js"

console.log(triangle.isIsosceles(3,7,7) === true)
console.log(triangle.area(4,7) === 14)
console.log(square.area(2,2) === 4)
console.log(circle.area(4.7) === 69.39778171779854 )
console.log(circle.diameter(4.7) === 9.4)