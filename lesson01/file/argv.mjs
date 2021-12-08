import fs from 'fs/promises'

const argv = process.argv

let data
try {
  data = await fs.readFile('data.json', 'utf8')
} catch {
  data = '[]'
}
const content = JSON.parse(data)
if (argv[2] === '--list') {
  console.table(content)
} else if (argv[2] === void 0) {
  console.log('Unknown command')
} else {
  const name = argv[2]
  const age = argv[3]
  content.push({ name, age })
  await fs.writeFile('data.json', JSON.stringify(content, null, 4))
}
