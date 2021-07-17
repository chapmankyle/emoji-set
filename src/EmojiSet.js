const allEmojis = require('./all.json')
const groupedEmojis = require('./groups.json')
const keywordEmojis = require('./keywords.json')

/**
 * Class containing methods to work with emojis.
 */
module.exports = class EmojiSet {
  /**
   * @param {boolean=} onlyEmoji Optional. `true` to only return the emojis, `false` to return the emojis and their information. Default is `false`.
   * @returns All of the emojis with their associated keywords.
   */
  static getAll (onlyEmoji = false) {
    return onlyEmoji ? Object.keys(allEmojis) : allEmojis
  }

  /**
   * @param {boolean=} onlyEmoji Optional. `true` to only return the emojis, `false` to return the emojis and their information. Default is `false`.
   * @returns {object} Emojis grouped by their types.
   */
  static getGrouped (onlyEmoji = false) {
    if (!onlyEmoji) {
      return groupedEmojis
    }

    const result = {}
    for (const group in groupedEmojis) {
      result[group] = groupedEmojis[group].map(info => info.emoji)
    }
    return result
  }

  /**
   * @param {boolean=} onlyEmoji Optional. `true` to only return the emojis, `false` to return the emojis and their information. Default is `false`.
   * @returns Emojis grouped by keywords.
   */
  static getKeywords (onlyEmoji = false) {
    if (!onlyEmoji) {
      return keywordEmojis
    }

    const result = {}
    for (const keyword in keywordEmojis) {
      result[keyword] = Object.keys(keywordEmojis[keyword])
    }
    return result
  }

  /**
   * Searches for emojis by a group (can be partial or a whole word).
   * @param {string} group Group to search for associated emojis.
   * @param {boolean=} onlyEmoji Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.
   * @returns {object | null} Emojis associated with the given group, or `null` if no emojis match the group.
   */
  static searchByGroup (group, onlyEmoji = false) {
    const lcGroup = group.toLowerCase()

    for (const grp in groupedEmojis) {
      if (grp.toLowerCase().includes(lcGroup)) {
        return onlyEmoji ? groupedEmojis[grp].map(info => info.emoji) : groupedEmojis[grp]
      }
    }

    return null
  }

  /**
   * Searches for emojis by a keyword (can be partial or a whole word).
   * @param {string} keyword Keyword to use to find emojis.
   * @param {boolean=} first Optional. `true` to return the first match, `false` to return all matches. Default is `true`.
   * @param {boolean=} onlyEmoji Optional. `true` to only return the emoji, `false` to return all information as well as the emoji. Default is `false`.
   * @returns {object | null} Emojis associated with the given keyword, or `null` if no emojis match the keyword.
   */
  static searchByKeyword (keyword, first = true, onlyEmoji = false) {
    const lcKeyword = keyword.toLowerCase()
    let results = null

    for (const key in keywordEmojis) {
      const ret = onlyEmoji ? Object.keys(keywordEmojis[key]) : keywordEmojis[key]

      if (key.toLowerCase().startsWith(lcKeyword)) {
        // Return the first match
        if (first) {
          return ret
        }

        // Convert to object if no matches have been found yet
        if (results == null) {
          results = onlyEmoji ? [] : {}
        }

        // Check if we only want emojis or all data
        if (onlyEmoji) {
          results = [...results, ret].flat(1)
        } else {
          results = Object.assign(results, keywordEmojis[key])
        }
      }
    }

    return results
  }
}
