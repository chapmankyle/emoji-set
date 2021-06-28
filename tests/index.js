const test = require('tape')
const EmojiSet = require('../src/EmojiSet')

/** Test number of total emojis */
test('Total emojis', function (t) {
  const correct = require('./correct.json')
  t.equal(Object.keys(EmojiSet.getAll()).length, correct.num_emojis, 'Correct number of total emojis.')
  t.end()
})

/** Test number of emoji groups */
test('Emoji groups', function (t) {
  const correct = require('./correct.json')
  t.equal(Object.keys(EmojiSet.getGrouped()).length, correct.num_groups, 'Correct number of emoji groups.')
  t.end()
})
