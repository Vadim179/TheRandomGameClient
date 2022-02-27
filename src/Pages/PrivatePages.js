import { Page, PageNavigator } from "Components"
import { PrivatePagesEnum } from "Enums"

import ProfilePage from "./Profile/Profile"
import ShopPage from "./Shop/Shop"
import FormationPage from "./Formation/Formation"
import BattlePage from "./Battle/Battle"

function PrivatePages() {
  return (
    <PageNavigator page={PrivatePagesEnum.Profile}>
      <Page name={PrivatePagesEnum.Profile} component={ProfilePage} />
      <Page name={PrivatePagesEnum.Shop} component={ShopPage} />
      <Page name={PrivatePagesEnum.Formation} component={FormationPage} />
      <Page name={PrivatePagesEnum.Battle} component={BattlePage} />
    </PageNavigator>
  )
}

export default PrivatePages
