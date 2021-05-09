const Benchmark = require('benchmark')
const testSpec = require('./src/test-spec')

const suite = new Benchmark.Suite()

testSpec.tests.forEach(
    ({ name, fn }) => suite.add(name, () => fn(testSpec.seed))
)

suite
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });