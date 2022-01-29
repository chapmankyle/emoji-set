const allEmojis = require('./all.json')
const groupedEmojis = require('./groups.json')
const keywordEmojis = require('./keywords.json')

/**
 * Class containing methods to work with emojis.
 */
module.exports = class EmojiSet {
  /**
   * Gets emojis that match the given filter.
   * @param {object} filter Filter to apply to the emojis. Leave blank to get all emojis and their information.
   * @param {boolean} filter.only_emoji `true` to only return the emojis, `false` to return the emojis and their information. Default is `false`.
   * @param {boolean} filter.by_section `true` to return the emojis grouped by their section, `false` to return the emojis without any grouping. Default is `false`.
   * @param {boolean} filter.by_keyword `true` to return the emojis grouped by their keywords, `false` to return the emojis without any grouping. Default is `false`.
   * @returns {object[]} Array of emojis that match the given filter.
   */
  static get (filter = {}) {
    filter.all = filter.all ?? true
    filter.only_emoji = filter.only_emoji ?? false
    filter.by_section = filter.by_section ?? false
    filter.by_keyword = filter.by_keyword ?? false

    // Return emojis grouped by their section
    if (filter.by_section) {
      if (!filter.only_emoji) {
        return groupedEmojis
      }

      const result = {}
      for (const group in groupedEmojis) {
        result[group] = groupedEmojis[group].map(info => info.emoji)
      }
      return result
    }

    // Return emojis grouped by their keyword
    if (filter.by_keyword) {
      if (!filter.only_emoji) {
        return keywordEmojis
      }

      const result = {}
      for (const keyword in keywordEmojis) {
        result[keyword] = Object.keys(keywordEmojis[keyword])
      }
      return result
    }

    // Return all available emojis
    if (filter.all) {
      return filter.only_emoji ? Object.keys(allEmojis) : allEmojis
    }

    // Default to return empty array
    return []
  }

  /**
   * Searches for emojis using the given filter.
   * @param {object} filter Filter to apply to the emoji search.
   * @param {boolean} filter.only_emoji `true` to only return the emojis, `false` to return the emojis and their information. Default is `false`.
   * @param {string} filter.by_section Section to return the emojis from. Some examples are: `'Objects'`, `'Animals & Nature'` etc.
   * @param {string} filter.by_keyword Keyword to use in the emoji search. Some examples are: `'smile'`, `'tada'` etc.
   * @param {boolean} filter.first_match `true` to only return the first match (when using `by_keyword`), `false` to return all matches. Default is `false`.
   * @returns {object[]} Array of emojis that match the given filter.
   */
  static search (filter = {}) {
    filter.only_emoji = filter.only_emoji ?? false
    filter.by_section = filter.by_section || ''
    filter.by_keyword = filter.by_keyword || ''
    filter.first_match = filter.first_match ?? false

    // Returns emojis that match the section name
    if (filter.by_section) {
      const lcGroup = filter.by_section.toLowerCase()

      for (const grp in groupedEmojis) {
        if (grp.toLowerCase().includes(lcGroup)) {
          return filter.only_emoji ? groupedEmojis[grp].map(info => info.emoji) : groupedEmojis[grp]
        }
      }

      return null
    }

    // Returns emojis that match the given keyword
    if (filter.by_keyword) {
      const lcKeyword = filter.by_keyword.toLowerCase()
      let results = null

      for (const key in keywordEmojis) {
        const ret = filter.only_emoji ? Object.keys(keywordEmojis[key]) : keywordEmojis[key]

        if (key.toLowerCase().startsWith(lcKeyword)) {
          // Return the first match
          if (filter.first_match) {
            return ret
          }

          // Convert to object if no matches have been found yet
          if (results == null) {
            results = filter.only_emoji ? [] : {}
          }

          // Check if we only want emojis or all data
          if (filter.only_emoji) {
            results = [...results, ret].flat(1)
          } else {
            results = Object.assign(results, keywordEmojis[key])
          }
        }
      }

      return results
    }

    // Default to return empty array
    return []
  }
}
