var temp = 0 // init
var start = function start(arg) {
  if(arg == null) {
    var result = temp
    return result
  } else {
    temp += arg
    return start //returning itself (recursive)
  }
}

module.exports = start
