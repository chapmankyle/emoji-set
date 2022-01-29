const test = require('tape')
const EmojiSet = require('../src/EmojiSet')

/** Test number of total emojis */
test('Total emojis', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.get()).length, correct.num_emojis, 'Correct number of total emojis.')
  t.equal(typeof EmojiSet.get({ only_emoji: true })[0], typeof '', 'Specifying `only_emoji` as true results in only emojis.')
  t.end()
})

/** Test emojis in each section */
test('Emojis by section', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.get({ by_section: true })).length, correct.num_groups, 'Correct number of emoji groups.')
  t.equal(typeof EmojiSet.get({ by_section: true, only_emoji: true })['Smileys & Emotion'][0], typeof '', 'Specifying `only_emoji` as true results in only emojis for each group.')
  t.end()
})

/** Test emojis for each keyword */
test('Emojis by keyword', function (t) {
  const correct = require('./correct.json')

  t.plan(2)
  t.equal(Object.keys(EmojiSet.get({ by_keyword: true })).length, correct.num_keywords, 'Correct number of emoji keywords.')
  t.equal(typeof EmojiSet.get({ by_keyword: true, only_emoji: true }).playful[0], typeof '', 'Specifying `only_emoji` as true results in only emojis for each keyword.')
  t.end()
})

/** Test if section search by partial or full section results in same emojis */
test('Searching by section', function (t) {
  const groupPartial = 'ags'
  const groupFull = 'Flags'

  t.plan(2)
  t.equal(Object.keys(EmojiSet.search({ by_section: groupPartial })).length, Object.keys(EmojiSet.search({ by_section: groupFull })).length, 'Same emojis returned for searching by partial or full group.')
  t.equal(EmojiSet.search({ by_section: groupPartial, only_emoji: true }).length, EmojiSet.search({ by_section: groupFull, only_emoji: true }).length, 'Same number of only emojis returned for searching by partial or full group.')
  t.end()
})

/** Test if keyword search by partial or full keyword results in same emojis */
test('Searching by keyword', function (t) {
  const keywordPartial = 'sc'
  const keywordFull = 'scepticism'

  t.plan(3)
  t.equal(Object.keys(EmojiSet.search({ by_keyword: keywordPartial, first_match: true })).length, Object.keys(EmojiSet.search({ by_keyword: keywordFull, first_match: true })).length, 'Same emojis returned for searching by partial or full keyword.')
  t.equal(EmojiSet.search({ by_keyword: keywordPartial, first_match: true, only_emoji: true }).length, EmojiSet.search({ by_keyword: keywordFull, first_match: true, only_emoji: true }).length, 'Same number of only emojis returned for searching by partial or full keyword.')
  t.notEqual(EmojiSet.search({ by_keyword: keywordPartial, first_match: false, only_emoji: true }).length, EmojiSet.search({ by_keyword: keywordPartial, first_match: true, only_emoji: true }).length, 'Different number of emojis returned when specifying only first match and specifying all matches.')
  t.end()
})
