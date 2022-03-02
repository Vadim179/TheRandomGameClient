import validate from "aproba"
import classnames from "classnames"

import { SidebarRoutes } from "./SidebarRoutes"
import { Icon } from "Components"
import { NavigationUtility } from "Utilities"
import { NavigatorsEnum } from "Enums"
import "./TheSidebar.scss"

function TheSidebar({ activePageID }) {
  const c = "sidebar-component"

  /**
   * @param {String} pageID
   */
  function doNavigateToPage(pageID) {
    validate("S", arguments)
    NavigationUtility.doNavigate(NavigatorsEnum.PrivatePages, pageID)
  }

  return (
    <div className={c}>
      {SidebarRoutes.map(({ name, icon, pageID }) => {
        const _c = `${c}__route`

        const classes = classnames(_c, {
          [`${_c}--active`]: pageID === activePageID,
        })

        return (
          <div
            key={name}
            className={classes}
            onClick={() => doNavigateToPage(pageID)}
          >
            <Icon name={icon} alt={name} />
          </div>
        )
      })}
    </div>
  )
}

export default TheSidebar
