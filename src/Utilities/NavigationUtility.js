import validate from "aproba"
import $ from "jquery"

/**
 * @param {String} navigatorID
 * @param {String} pageID
 */
export function doNavigate(navigatorID, pageID) {
  validate("SS", arguments)
  const EVENT_LISTENER_KEY = navigatorID + ":Navigation"
  $(window).trigger(EVENT_LISTENER_KEY, pageID)
}
