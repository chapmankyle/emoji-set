# emoji-set

<p>
    <img src="https://github.com/chapmankyle/emoji-set/actions/workflows/test.yml/badge.svg?branch=master" alt="Test Status">
    <img src="https://img.shields.io/npm/v/emoji-set" alt="Version">
    <img src="https://img.shields.io/bundlephobia/min/emoji-set" alt="Size">
    <a href="https://standardjs.com">
        <img src="https://img.shields.io/badge/code%20style-standard-%23f3df49" alt="Standard Code Style">
    </a>
</p>

Emoji library that contains only the emojis that work on most of the browsers
and operating systems currently available :rocket: :earth_africa:

Finally no more � symbols when rendering the emojis :partying_face:

Based off emojis from [emojilib](https://github.com/muan/emojilib) and keywords from [unicode-emoji-json](https://github.com/muan/unicode-emoji-json)

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

### `get(filter = {})`

Returns the emojis that match the given filter. Leave the `filter` parameter blank
to return all available emojis.

Available fields for the `filter` parameter include:
| Field | Default | Description |
| ----- | ------- | ----------- |
| `only_emoji` | `false` | `true` to only return the emojis, `false` to return the emojis and their information |
| `by_section` | `false` | `true` to return the emojis grouped by their section, `false` to return the emojis without any grouping |
| `by_keyword` | `false` | `true` to return the emojis grouped by their keywords, `false` to return the emojis without any grouping |

Some examples can be seen below.

#### :page_with_curl: Get all available emojis
```js
console.log(EmojiSet.get())
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

#### :page_with_curl: Get all available emojis without additional information
```js
console.log(EmojiSet.get({ only_emoji: true }))
/* Returns */
[ '😀', '😃', '😄', ... ]
```

#### :page_with_curl: Get emojis grouped by their section name
```js
console.log(EmojiSet.get({ by_section: true }))
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

#### :page_with_curl: Get emojis grouped by their section name, without additional information
```js
console.log(EmojiSet.get({ by_section: true, only_emoji: true }))
/* Returns */
{
  'Smileys & Emotion': [ '😀', '😃', ... ],
  'People & Body': [ '👋', '🤚', ... ],
  ...
}
```

#### :page_with_curl: Get emojis grouped by their keywords
```js
console.log(EmojiSet.get({ by_keywords: true }))
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

#### :page_with_curl: Get emojis grouped by their keywords, without additional information
```js
console.log(EmojiSet.get({ by_keywords: true, only_emoji: true }))
/* Returns */
{
  ...
  'playful': [ '😛', '😜', '😝', '👅' ],
  'quiet': [ '🤫', '🔇', '🔕', '📴' ],
  ...
}
```

### `search(filter = {})`

Searches for emojis using the given filter.

Available fields for the `filter` parameter include:
| Field | Default | Description |
| ----- | ------- | ----------- |
| `only_emoji` | `false` | `true` to only return the emojis, `false` to return the emojis and their information |
| `by_section` | `''` | Section to return the emojis from. Some examples are: `'Objects'`, `'Animals & Nature'` etc. Value is case-insensitive |
| `by_keyword` | `''` | Keyword to use in the emoji search. Some examples are: `'smile'`, `'tada'` etc. Value is case-insensitive |
| `first_match` | `false` | `true` to only return the first match (when using `by_keyword`), `false` to return all matches |

Some examples can be seen below.

#### :page_with_curl: Search for emojis that match the given section name
```js
console.log(EmojiSet.search({ by_section: 'flags' }))
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

#### :page_with_curl: Search for emojis that match the given section name, without additional information
```js
console.log(EmojiSet.search({ by_section: 'flags', only_emoji: true }))
/* Returns */
[ '🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️' ]
```

#### :page_with_curl: Search for emojis that match the given keyword
```js
console.log(EmojiSet.search({ by_keyword: 'perf' }))
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

#### :page_with_curl: Search for emojis that match the given keyword, returning the first match only
```js
console.log(EmojiSet.search({ by_keyword: 'perf', first_match: true }))
/* Returns */
{
  '💯': {
    name: 'hundred points',
    code: 'hundred_points',
    group: 'Smileys & Emotion'
  }
}
```

#### :page_with_curl: Search for emojis that match the given keyword, returning the first match only and without any additional information
```js
console.log(EmojiSet.search({ by_keyword: 'perf', first_match: true, only_emoji: true }))
/* Returns */
[ '💯' ]
```
