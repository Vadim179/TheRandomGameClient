import { useState } from "react"
import { Page, PageNavigator } from "Components"
import { PublicPagesEnum, NavigatorsEnum } from "Enums"
import { WelcomePage, JoinPage, PrivatePages } from "Pages"

function PublicPages() {
  const [pageID, setPageID] = useState(PublicPagesEnum.PrivatePages)

  return (
    <PageNavigator
      ID={NavigatorsEnum.PublicPages}
      pageID={pageID}
      onChangePageID={setPageID}
    >
      <Page name={PublicPagesEnum.Welcome} component={WelcomePage} />
      <Page name={PublicPagesEnum.Join} component={JoinPage} />
      <Page name={PublicPagesEnum.PrivatePages} component={PrivatePages} />
    </PageNavigator>
  )
}

export default PublicPages
