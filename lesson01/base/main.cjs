const os = require('os')
const path = require('path')

// console.log(os.cpus().length)

// console.log(path.resolve('/foo/bar', './baz'))
// console.log(path.resolve('/foo/bar', '/tmp/file/'))
// console.log(path.sep)
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))

// console.log(__filename)
console.log(__dirname)
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// console.log(path.join(__dirname, 'main.cjs'))

// console.log(process.pid)

process.on('exit', (code) => {
  console.log(`Code: ${code}`)
})

process.exit(1001)

console.log(process.cwd())
