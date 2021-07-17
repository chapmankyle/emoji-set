function allToKeywords() {
  const allEmojis = require('../src/all.json')
  const keywords = {}

  for (const emoji in allEmojis) {
    const info = allEmojis[emoji]

    for (const keyword of info.keywords) {
      if (!(keyword in keywords)) {
        keywords[keyword] = {}
      }

      keywords[keyword][emoji] = {
        name: info.name,
        code: info.code,
        group: info.group
      }
    }
  }

  return JSON.stringify(keywords)
}

console.log(allToKeywords())
