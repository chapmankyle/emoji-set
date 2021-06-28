const allEmojis = require('./all.json')
const groupedEmojis = require('./groups.json')

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
}
