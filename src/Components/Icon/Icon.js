import { IconMap } from "./IconMap"
import "./Icon.scss"

function Icon({ name, alt }) {
  const c = "icon-component"
  const icon = IconMap[name]
  return <img className={c} src={icon} alt={alt} />
}

export default Icon
