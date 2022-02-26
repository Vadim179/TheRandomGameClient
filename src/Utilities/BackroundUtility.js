import validate from "aproba"
import $ from "jquery"

/**
 * @param {Number} value
 */
export function setBackgroundPositionY(value) {
  validate("N", arguments)
  value = Math.min(Math.max(value, 0), 100)
  $(".background-component").css({ "background-position-y": `${value}%` })
}

/**
 * @param {Number} value
 */
export function setBackgroundOpacity(value) {
  validate("N", arguments)
  value = Math.min(Math.max(value, 0), 100) / 100
  $(".background-component").css({ opacity: value })
}
