const test = require('tape')
const EmojiSet = require('../src/EmojiSet')

/** Test number of total emojis */
test('Total emojis', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.getAll()).length, correct.num_emojis, 'Correct number of total emojis.')
  t.equal(typeof EmojiSet.getAll(true)[0], typeof '', 'Specifying `onlyEmoji` as true results in only emojis.')
  t.end()
})

/** Test emojis in each group */
test('Emojis by group', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.getGrouped()).length, correct.num_groups, 'Correct number of emoji groups.')
  t.equal(typeof EmojiSet.getGrouped(true)['Smileys & Emotion'][0], typeof '', 'Specifying `onlyEmoji` as true results in only emojis for each group.')
  t.end()
})

/** Test emojis for each keyword */
test('Emojis by keyword', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.getKeywords()).length, correct.num_keywords, 'Correct number of emoji keywords.')
  t.equal(typeof EmojiSet.getKeywords(true).playful[0], typeof '', 'Specifying `onlyEmoji` as true results in only emojis for each keyword.')
  t.end()
})

/** Test if group search by partial or full group results in same emojis */
test('Searching by group', function (t) {
  const groupPartial = 'ags'
  const groupFull = 'Flags'

  t.plan(2)
  t.equal(Object.keys(EmojiSet.searchByGroup(groupPartial)).length, Object.keys(EmojiSet.searchByGroup(groupFull)).length, 'Same emojis returned for searching by partial or full group.')
  t.equal(EmojiSet.searchByGroup(groupPartial, true).length, EmojiSet.searchByGroup(groupFull, true).length, 'Same number of only emojis returned for searching by partial or full group.')
  t.end()
})

/** Test if keyword search by partial or full keyword results in same emojis */
test('Searching by keyword', function (t) {
  const keywordPartial = 'sc'
  const keywordFull = 'scepticism'

  t.plan(3)
  t.equal(Object.keys(EmojiSet.searchByKeyword(keywordPartial)).length, Object.keys(EmojiSet.searchByKeyword(keywordFull)).length, 'Same emojis returned for searching by partial or full keyword.')
  t.equal(EmojiSet.searchByKeyword(keywordPartial, true, true).length, EmojiSet.searchByKeyword(keywordFull, true, true).length, 'Same number of only emojis returned for searching by partial or full keyword.')
  t.notEqual(EmojiSet.searchByKeyword(keywordPartial, false, true).length, EmojiSet.searchByKeyword(keywordPartial, true, true).length, 'Different number of emojis returned when specifying only first match and specifying all matches.')
  t.end()
})
