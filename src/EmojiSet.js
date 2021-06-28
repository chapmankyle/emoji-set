const allEmojis = require('./all.json')
const groupedEmojis = require('./groups.json')
const keywordEmojis = require('./keywords.json')

/**
 * Class containing methods to work with emojis.
 */
module.exports = class EmojiSet {
  /**
   * @returns All of the emojis with their associated keywords.
   */
  static getAll () {
    return allEmojis
  }

  /**
   * @returns Emojis grouped by their types.
   */
  static getGrouped () {
    return groupedEmojis
  }

  /**
   * @returns Emojis grouped by keywords.
   */
  static getKeywords () {
    return keywordEmojis
  }

  /**
   * Searches for emojis by a group (can be partial or a whole word).
   * @param {string} group Group to search for associated emojis.
   * @returns {object | null} Emojis associated with the given group, or `null` if no emojis match the group.
   */
  static searchByGroup (group) {
    const lcGroup = group.toLowerCase()

    for (const grp in groupedEmojis) {
      if (grp.toLowerCase().includes(lcGroup)) {
        return groupedEmojis[grp]
      }
    }

    return null
  }

  /**
   * Searches for emojis by a keyword (can be partial or a whole word).
   * @param {string} keyword Keyword to use to find emojis.
   * @returns {object | null} Emojis associated with the given keyword, or `null` if no emojis match the keyword.
   */
  static searchByKeyword (keyword) {
    const lcKeyword = keyword.toLowerCase()

    for (const key in keywordEmojis) {
      if (key.startsWith(lcKeyword)) {
        return keywordEmojis[key]
      }
    }

    return null
  }
}
