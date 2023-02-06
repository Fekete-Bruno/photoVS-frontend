import { Page } from "../layouts/Page";
import { StyledContainer } from "../layouts/StyledContainer";


export default function AuthLayout({ children }) {
  return (
    <Page>
      <StyledContainer width="400px" height="600px">
        {children}
      </StyledContainer>
    </Page>
  );
}
