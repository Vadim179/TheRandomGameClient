import { Page, PageNavigator } from "Components"
import { PublicPagesEnum } from "Enums"

import WelcomePage from "./Welcome/Welcome"
import JoinPage from "./Join/Join"
import PrivatePages from "./PrivatePages"

function PublicPages() {
  return (
    <PageNavigator page={PublicPagesEnum.Welcome}>
      <Page name={PublicPagesEnum.Welcome} component={WelcomePage} />
      <Page name={PublicPagesEnum.Join} component={JoinPage} />
      <Page name={PublicPagesEnum.PrivatePages} component={PrivatePages} />
    </PageNavigator>
  )
}

export default PublicPages
