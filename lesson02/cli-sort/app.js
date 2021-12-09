import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { Command } from 'commander'
import SortFiles from './sort.js'

const program = new Command()

program
  .requiredOption('-s, --source <type>', 'source folder')
  .option('-o, --output <type>', 'output folder', './dist')

program.parse(process.argv)

const { source, output } = program.opts()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

try {
  const sorting = new SortFiles(join(__dirname, output))
  await sorting.readFolder(source)
} catch (error) {
  console.error(error)
  process.exit(1)
}

console.log('Completed')
