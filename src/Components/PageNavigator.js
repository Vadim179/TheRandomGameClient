import { useState, useEffect, Children } from "react"
import $ from "jquery"

function PageNavigator({ page, children }) {
  const [pageID, setPageID] = useState(page)

  function handleNavigation(_, pageID) {
    setPageID(pageID)
  }

  useEffect(() => {
    $(window).on("navigation", handleNavigation)
    return () => $(window).off("navigation", handleNavigation)
  }, [])

  return (
    Children.toArray(children).find((page) => page.props.name === pageID) || null
  )
}

export default PageNavigator
