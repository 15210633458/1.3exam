function require() {
    console.log(111)
    return define()
}

function define() {
    function aa() {
        console.log("aaaa")
    }
    return aa()
}

require()