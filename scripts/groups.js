function allToGroups () {
  const allEmojis = require('../src/all.json')
  const groups = {}

  for (const emoji in allEmojis) {
    const info = allEmojis[emoji]

    if (!(info.group in groups)) {
      groups[info.group] = []
    }

    groups[info.group].push({
      emoji: emoji,
      name: info.name,
      code: info.code,
      keywords: [...info.keywords]
    })
  }

  return JSON.stringify(groups)
}

console.log(allToGroups())
