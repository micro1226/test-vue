const data = {};
var mockName = 'zhangsan';
Object.defineProperty(data, "name", {
    get: function () {
        console.log('get');
        return mockName;
    },
    set: function (newVal) {
        console.log('set');
        mockName = newVal;
    }
});

console.log(data.name);
data.name = 'lisi'
console.log(data.name);

// output
// get
// zhangsan
// set
// get
// lisi