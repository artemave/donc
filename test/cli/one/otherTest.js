const {execSync} = require('child_process')
const {test} = require('../../..')

test('also works', () => {
  execSync(`touch ${process.cwd()}/test/results/otherTest`)
})

test('really "really" works', () => {
  execSync(`touch ${process.cwd()}/test/results/otherTest2`)
})
