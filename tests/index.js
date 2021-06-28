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

/** Test if group search by partial or full group results in same emojis */
test('Searching by group', function (t) {
  const groupPartial = 'ags'
  const groupFull = 'Flags'
  t.equal(Object.keys(EmojiSet.searchByGroup(groupPartial)).length, Object.keys(EmojiSet.searchByGroup(groupFull)).length, 'Same emojis returned for searching by partial or full group.')
  t.end()
})

/** Test if keyword search by partial or full keyword results in same emojis */
test('Searching by keyword', function (t) {
  const keywordPartial = 'sco'
  const keywordFull = 'score'
  t.equal(Object.keys(EmojiSet.searchByKeyword(keywordPartial)).length, Object.keys(EmojiSet.searchByKeyword(keywordFull)).length, 'Same emojis returned for searching by partial or full keyword.')
  t.end()
})
