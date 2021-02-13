
const triangle = {
  isIsosceles(a,b,c){
    if(a===b || b===c || a===c) return true
    return false
  },
  area(base, height){
    return (base * height) / 2
  }
}

export { triangle };
