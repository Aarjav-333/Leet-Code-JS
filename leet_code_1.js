// leet code return hello World

function Hello() {
    return function() {
        return "Hello World"
    }
}
console.log(Hello()())
