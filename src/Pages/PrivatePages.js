import { useState } from "react"
import { Page, PageNavigator, TheSidebar } from "Components"
import { PrivatePagesEnum, NavigatorsEnum } from "Enums"
import { ProfilePage, ShopPage, FormationPage, MatchMakerPage } from "Pages"

function PrivatePages() {
  const [pageID, setPageID] = useState(PrivatePagesEnum.Profile)

  return (
    <>
      <TheSidebar activePageID={pageID} />
      <PageNavigator
        ID={NavigatorsEnum.PrivatePages}
        pageID={pageID}
        onChangePageID={setPageID}
      >
        <Page name={PrivatePagesEnum.Profile} component={ProfilePage} />
        <Page name={PrivatePagesEnum.Shop} component={ShopPage} />
        <Page name={PrivatePagesEnum.Formation} component={FormationPage} />
        <Page name={PrivatePagesEnum.MatchMaker} component={MatchMakerPage} />
      </PageNavigator>
    </>
  )
}

export default PrivatePages
