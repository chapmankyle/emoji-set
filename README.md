# emoji-set

<p>
    <img src="https://github.com/chapmankyle/emoji-set/actions/workflows/test.yml/badge.svg?branch=master" alt="Test Status">
    <img src="https://img.shields.io/npm/v/emoji-set" alt="Version">
    <img src="https://img.shields.io/bundlephobia/min/emoji-set" alt="Size">
    <a href="https://standardjs.com">
        <img src="https://img.shields.io/badge/code%20style-standard-%23f3df49" alt="Standard Code Style">
    </a>
</p>

Emoji library with functions to allow for searching by emoji, group or keyword :mag:

Based off emojis from [emojilib](https://github.com/muan/emojilib) and keywords from [unicode-emoji-json](https://github.com/muan/unicode-emoji-json).

## Install :hammer:

```bash
npm install emoji-set --save
```

## Usage :cd:

To get started, you can import the package using two methods:
```js
// ES6 import
import EmojiSet from 'emoji-set'

// or CommonJS import
const EmojiSet = require('emoji-set')
```

## Methods :card_file_box:

### `getAll(onlyEmoji?: boolean | undefined)`
Returns the full set of emojis available.

- `onlyEmoji` : Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.

*Examples:*
```js
console.log(EmojiSet.getAll())
/* Returns */
{
  '😀': {
    name: 'grinning face',
    code: 'grinning_face',
    group: 'Smileys & Emotion',
    keywords: [ 'grin', 'face', 'smile', 'happy', 'joy', ':D' ]
  },
  '😃': {
    name: 'grinning face with big eyes',
    code: 'grinning_face_with_big_eyes',
    group: 'Smileys & Emotion',
    keywords: [ 'grin', 'face', 'happy', 'joy', 'haha', ':D', ':)', 'smile', 'funny' ]
  },
  '😄': {
    name: 'grinning face with smiling eyes',
    code: 'grinning_face_with_smiling_eyes',
    group: 'Smileys & Emotion',
    keywords: [ 'grin', 'face', 'happy', 'joy', 'funny', 'haha', 'laugh', 'like', ':D', ':)' ]
  },
  ...
}
```
```js
console.log(EmojiSet.getAll(true))
/* Returns */
[ '😀', '😃', '😄', ... ]
```

### `getGrouped(onlyEmoji?: boolean | undefined)`
Returns all emojis in their respective groups.

- `onlyEmoji` : Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.

*Examples:*
```js
console.log(EmojiSet.getGrouped())
/* Returns */
{
  'Smileys & Emotion': [
    {
      emoji: '😀',
      name: 'grinning face',
      code: 'grinning_face',
      keywords: [ 'face', 'smile', 'happy', 'joy', ':D', 'grin' ]
    },
    {
      emoji: '😃',
      name: 'grinning face with big eyes',
      code: 'grinning_face_with_big_eyes',
      keywords: [ 'face', 'happy', 'joy', 'haha', ':D', ':)', 'smile', 'funny' ]
    },
    ...
  ],
  'People & Body': [
    {
      emoji: '👋',
      name: 'waving hand',
      code: 'waving_hand',
      keywords: [ 'hands', 'gesture', 'goodbye', 'solong', 'farewell', 'hello', 'hi', 'palm' ]
    },
    {
      emoji: '🤚',
      name: 'raised back of hand',
      code: 'raised_back_of_hand',
      keywords: [ 'fingers', 'raised', 'backhand' ]
    },
    ...
  ],
  ...
}
```
```js
console.log(EmojiSet.getGrouped(true))
/* Returns */
{
  'Smileys & Emotion': [ '😀', '😃', ... ],
  'People & Body': [ '👋', '🤚', ... ],
  ...
}
```

### `getKeywords(onlyEmoji?: boolean | undefined)`
Returns all emojis associated with each keyword.

- `onlyEmoji` : Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.

*Examples:*
```js
console.log(EmojiSet.getKeywords())
/* Returns */
{
  ...
  'playful': {
    '😛': {
      name: 'face with tongue',
      code: 'face_with_tongue',
      group: 'Smileys & Emotion'
    },
    '😜': {
      name: 'winking face with tongue',
      code: 'winking_face_with_tongue',
      group: 'Smileys & Emotion'
    },
    '😝': {
      name: 'squinting face with tongue',
      code: 'squinting_face_with_tongue',
      group: 'Smileys & Emotion'
    },
    '👅': {
      name: 'tongue',
      code: 'tongue',
      group: 'People & Body'
    }
  },
  'quiet': {
    '🤫': {
      name: 'shushing face',
      code: 'shushing_face',
      group: 'Smileys & Emotion'
    },
    '🔇': {
      name: 'muted speaker',
      code: 'muted_speaker',
      group: 'Objects'
    },
    '🔕': {
      name: 'bell with slash',
      code: 'bell_with_slash',
      group: 'Objects'
    },
    '📴': {
      name: 'mobile phone off',
      code: 'mobile_phone_off',
      group: 'Symbols'
    }
  },
  ...
}
```
```js
console.log(EmojiSet.getKeywords(true))
/* Returns */
{
  ...
  'playful': [ '😛', '😜', '😝', '👅' ],
  'quiet': [ '🤫', '🔇', '🔕', '📴' ],
  ...
}
```

### `searchByGroup(group: string, onlyEmoji?: boolean | undefined)`
Returns all emojis in the given group.

- `group` : Can either be a partial group name (`"smi"` for `"Smileys & Emoticon"`) or a full group name (`"smileys & emoticon"` for `"Smileys & Emoticon"`) and is ***NOT*** case-sensitive.
- `onlyEmoji` : Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.

*Examples:*
```js
console.log(EmojiSet.searchByGroup('flags', false))
/* Returns */
[
  {
    emoji: '🏁',
    code: 'chequered_flag',
    keywords: [ 'chequered', 'flag', 'contest', 'finishline', 'race', 'gokart' ]
  },
  {
    emoji: '🚩',
    code: 'triangular_flag',
    keywords: [ 'mark', 'milestone', 'place' ]
  },
  {
    emoji: '🎌',
    code: 'crossed_flags',
    keywords: [ 'cross', 'flag', 'japanese', 'nation', 'country', 'border' ]
  },
  {
    emoji: '🏴',
    code: 'black_flag',
    keywords: [ 'black', 'flag', 'pirate' ]
  },
  {
    emoji: '🏳️' ,
    code: 'white_flag',
    keywords: [ 'white', 'flag', 'losing', 'loser', 'lost', 'surrender', 'give up', 'fail' ]
  },
  {
    emoji: '🏳️‍🌈' ,
    code: 'rainbow_flag',
    keywords: [ 'rainbow', 'flag', 'pride', 'gay', 'lgbt', 'glbt', 'queer', 'homosexual', 'lesbian', 'bisexual', 'transgender' ]
  },
  {
    emoji: '🏴‍☠️',
    code: 'pirate_flag',
    keywords: [ 'pirate', 'flag', 'skull', 'crossbones', 'banner' ]
  }
]
```
```js
console.log(EmojiSet.searchByGroup('flags', true))
/* Returns */
[ '🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️' ]
```

### `searchByKeyword(keyword: string, first?: boolean | undefined, onlyEmoji?: boolean | undefined)`
Returns all emojis relating to the given keyword.

- `keyword` : Can either be a partial keyword (`"perf"` for `"perfect"`) or a full keyword (`"perfect"`) and is ***NOT*** case sensitive.
- `first` : Optional. `true` to return the first match, `false` to return all matches. Default is `true`.
- `onlyEmoji` : Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.

*Examples:*
```js
console.log(EmojiSet.searchByKeyword('perf', true, false))
/* Returns */
{
  '💯': {
    name: 'hundred points',
    code: 'hundred_points',
    group: 'Smileys & Emotion'
  },
  '👌': {
    name: 'OK hand',
    code: 'ok_hand',
    group: 'People & Body'
  }
}
```
```js
console.log(EmojiSet.searchByKeyword('perf', false, false))
/* Returns */
{
  '💯': {
    name: 'hundred points',
    code: 'hundred_points',
    group: 'Smileys & Emotion'
  },
  '👌': {
    name: 'OK hand',
    code: 'ok_hand',
    group: 'People & Body'
  },
  '👯': {
    name: 'people with bunny ears',
    code: 'people_with_bunny_ears',
    group: 'People & Body'
  },
  '🤹': {
    name: 'person juggling',
    code: 'person_juggling',
    group: 'People & Body'
  }
}
```
```js
console.log(EmojiSet.searchByKeyword('perf', true, true))
/* Returns */
[ '💯', '👌' ]
```
```js
console.log(EmojiSet.searchByKeyword('perf', false, true))
/* Returns */
[ '💯', '👌', '👯', '🤹' ]
```
