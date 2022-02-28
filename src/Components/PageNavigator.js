import { useEffect, Children } from "react"
import $ from "jquery"

function PageNavigator({ ID, pageID, children, onChangePageID }) {
  const NAVIGATION_LISTENER_KEY = ID + ":Navigation"
  const childrenArray = Children.toArray(children)

  function handleNavigation(_, pageID) {
    if (childrenArray.some((page) => page.props.name === pageID)) {
      onChangePageID(pageID)
    }
  }

  useEffect(() => {
    $(window).on(NAVIGATION_LISTENER_KEY, handleNavigation)
    return () => $(window).off(NAVIGATION_LISTENER_KEY, handleNavigation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return childrenArray.find((page) => page.props.name === pageID)
}

export default PageNavigator
