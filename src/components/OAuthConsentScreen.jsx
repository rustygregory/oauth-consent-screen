import styled from 'styled-components'

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  color: #2f3941;
`

const BrandBar = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 24px 16px;
`

const Brand = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #03363d;
  text-transform: lowercase;
`

const BrandRule = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d8dcde;
  margin: 0;
`

const Main = styled.main`
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`

const Card = styled.section`
  width: 100%;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 32px 32px 0;
  text-align: left;
`

const AppRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const LogoMark = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AcmeLogo = () => (
  <LogoMark aria-hidden="true">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#0F766E" />
      <path
        d="M24 10L34.5 36H29.2L26.8 29.2H21.2L18.8 36H13.5L24 10ZM22.5 25.2H25.5L24 20.8L22.5 25.2Z"
        fill="#FFFFFF"
      />
      <circle cx="36.5" cy="13.5" r="4.5" fill="#F59E0B" />
    </svg>
  </LogoMark>
)

const AppMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const AppName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #2f3941;
  line-height: 1.4;
`

const AppCompany = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #2f3941;
  line-height: 1.4;
`

const CardRule = styled.hr`
  border: none;
  border-top: 1px solid #d8dcde;
  margin: 20px 0 24px;
`

const Heading = styled.h1`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #2f3941;
`

const Description = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #2f3941;
`

const PermissionsLabel = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #2f3941;
`

const PermissionsList = styled.ul`
  margin: 0 0 48px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #2f3941;

  li {
    margin: 0;
  }
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`

const Button = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 10px 20px;
  border-radius: 4px;
  min-width: 88px;

  &:focus-visible {
    outline: 2px solid #1f73b7;
    outline-offset: 2px;
  }
`

const DenyButton = styled(Button)`
  background: #e9ebed;
  color: #2f3941;

  &:hover {
    background: #d8dcde;
  }
`

const AllowButton = styled(Button)`
  background: #1f73b7;
  color: #ffffff;

  &:hover {
    background: #144a75;
  }
`

const Footer = styled.div`
  margin: 24px 0 0;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: #2f3941;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`

const FooterLine = styled.p`
  margin: 0;
`

const EmailText = styled.span`
  font-weight: 600;
  color: #2f3941;
`

const SignInLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #1f73b7;
  text-decoration: underline;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  &:hover {
    color: #144a75;
  }
`

const ExternalIcon = ({ size = 12 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M10.5 1.5v3.25a.5.5 0 0 1-1 0V2.707L5.354 6.854a.5.5 0 1 1-.708-.708L8.793 2H7.25a.5.5 0 0 1 0-1h3.25a.5.5 0 0 1 .5.5ZM2.5 2.5A1 1 0 0 0 1.5 3.5v6A1 1 0 0 0 2.5 10.5h6a1 1 0 0 0 1-1V7.25a.5.5 0 0 1 1 0V9.5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.25a.5.5 0 0 1 0 1H2.5Z"
    />
  </svg>
)

export default function OAuthConsentScreen() {
  return (
    <Page>
      <BrandBar>
        <Brand>zendesk</Brand>
      </BrandBar>
      <BrandRule />

      <Main>
        <Card>
          <AppRow>
            <AcmeLogo />
            <AppMeta>
              <AppName>Acme Helpdesk Sync</AppName>
              <AppCompany>by Acme Inc.</AppCompany>
            </AppMeta>
          </AppRow>

          <CardRule />

          <Heading>Allow Acme Helpdesk Sync to access your Zendesk account?</Heading>

          <Description>
            Keeps tickets, users and organizations in sync between Acme Helpdesk and
            your Zendesk account.
          </Description>

          <PermissionsLabel>This application would be able to</PermissionsLabel>
          <PermissionsList>
            <li>Read all data.</li>
          </PermissionsList>

          <ButtonRow>
            <DenyButton type="button">Deny</DenyButton>
            <AllowButton type="button">Allow</AllowButton>
          </ButtonRow>
        </Card>

        <Footer>
          <FooterLine>
            Not <EmailText>jane.doe@example.com</EmailText>?
          </FooterLine>
          <SignInLink href="#sign-in">
            Return to sign in
            <ExternalIcon />
          </SignInLink>
        </Footer>
      </Main>
    </Page>
  )
}
