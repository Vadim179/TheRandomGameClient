import validate from "aproba"
import $ from "jquery"

/**
 * @param {String} pageID
 * @returns {Void}
 */
export function doNavigate(pageID) {
  validate("S", arguments)
  $(window).trigger("navigation", pageID)
}
