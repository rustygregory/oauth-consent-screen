/* V2 Redesign — Phase 2 layout: large card, two columns, permission list with dividers (no checkboxes). */
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'

/* Titles + help text from current Classic consent screen (no bullets in V2). */
const PERMISSIONS = [
  {
    title: 'Create, update, and delete data across Zendesk',
    description:
      'Can create, change, and delete information through Zendesk APIs. This is broad access and may allow changes across many Zendesk resources.',
  },
  {
    title: 'View data across Zendesk',
    description:
      'Can view information available through Zendesk APIs, including tickets, users, organizations, Help Center content, and account settings. This is broad access and may include related records returned with other data.',
  },
  {
    title: 'Create, edit, and delete tickets',
    description:
      'Includes adding comments, adding and removing tags, merging tickets, marking tickets as spam, attaching uploaded files, managing ticket forms and custom statuses, and permanently deleting tickets.',
  },
  {
    title: 'View account settings',
    description: 'Includes account configuration, ticket and user fields, and workspaces.',
  },
  {
    title: 'View brands',
    description: 'Includes viewing brands and their agent assignments.',
  },
  {
    title: 'View groups',
    description: 'Includes viewing groups and their memberships.',
  },
  {
    title: 'View organizations and their details',
    description: 'Includes organization memberships, subscriptions, and merge history.',
  },
  {
    title: 'View support requests',
    description: 'Includes submitted requests and their comments.',
  },
  {
    title: 'View tickets',
    description:
      'Includes ticket contents, comments and conversation history, tags, forms and fields, audits, events, and metrics.',
  },
  {
    title: 'View users',
    description:
      'Includes their identities, active sessions, group, organization, and brand memberships, roles, and settings.',
  },
]

/* Flora Color docs (token sets not linked in MCP): light-mode hex from grey ramp. */
const FG_DEFAULT = '#2f3130' /* fg/default → grey.900 */
const FG_SUBTLE = '#646864' /* fg/subtle → grey.700 */
const FG_PRIMARY = '#1f73b7' /* links — left as existing primary */
const FG_PRIMARY_HOVER = '#144a75'

/* Official Claude mark from Anthropic branding samples. */
const CLAUDE_LOGO_PATH =
  'M11.376 24L10.776 23.544L10.44 22.8L10.776 21.312L11.16 19.392L11.472 17.856L11.76 15.96L11.928 15.336L11.904 15.288L11.784 15.312L10.344 17.28L8.16 20.232L6.432 22.056L6.024 22.224L5.304 21.864L5.376 21.192L5.784 20.616L8.16 17.568L9.6 15.672L10.536 14.592L10.512 14.448H10.464L4.128 18.576L3 18.72L2.496 18.264L2.568 17.52L2.808 17.28L4.704 15.96L9.432 13.32L9.504 13.08L9.432 12.96H9.192L8.4 12.912L5.712 12.84L3.384 12.744L1.104 12.624L0.528 12.504L0 11.784L0.048 11.424L0.528 11.112L1.224 11.16L2.736 11.28L5.016 11.424L6.672 11.52L9.12 11.784H9.504L9.552 11.616L9.432 11.52L9.336 11.424L6.96 9.84L4.416 8.16L3.072 7.176L2.352 6.672L1.992 6.216L1.848 5.208L2.496 4.488L3.384 4.56L3.6 4.608L4.488 5.304L6.384 6.768L8.88 8.616L9.24 8.904L9.408 8.808V8.736L9.24 8.472L7.896 6.024L6.456 3.528L5.808 2.496L5.64 1.872C5.576 1.656 5.544 1.416 5.544 1.152L6.288 0.144001L6.696 0L7.704 0.144001L8.112 0.504001L8.736 1.92L9.72 4.152L11.28 7.176L11.736 8.088L11.976 8.904L12.072 9.168H12.24V9.024L12.36 7.296L12.6 5.208L12.84 2.52L12.912 1.752L13.296 0.840001L14.04 0.360001L14.616 0.624001L15.096 1.32L15.024 1.752L14.76 3.6L14.184 6.504L13.824 8.472H14.04L14.28 8.208L15.264 6.912L16.92 4.848L17.64 4.032L18.504 3.12L19.056 2.688H20.088L20.832 3.816L20.496 4.992L19.44 6.336L18.552 7.464L17.28 9.168L16.512 10.536L16.584 10.632H16.752L19.608 10.008L21.168 9.744L22.992 9.432L23.832 9.816L23.928 10.2L23.592 11.016L21.624 11.496L19.32 11.952L15.888 12.768L15.84 12.792L15.888 12.864L17.424 13.008L18.096 13.056H19.728L22.752 13.272L23.544 13.8L24 14.424L23.928 14.928L22.704 15.528L21.072 15.144L17.232 14.232L15.936 13.92H15.744V14.016L16.848 15.096L18.84 16.896L21.36 19.224L21.48 19.8L21.168 20.28L20.832 20.232L18.624 18.552L17.76 17.808L15.84 16.2H15.72V16.368L16.152 17.016L18.504 20.544L18.624 21.624L18.456 21.96L17.832 22.176L17.184 22.056L15.792 20.136L14.376 17.952L13.224 16.008L13.104 16.104L12.408 23.352L12.096 23.712L11.376 24Z'

const Page = styled.div`
  flex: 1;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 48px 32px;
  background: #f8f9f9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  color: ${FG_DEFAULT};
`

const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin-top: 8px;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(47, 57, 65, 0.06);
`

const TopBar = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 48px;
  border-bottom: 1px solid #d8dcde;
`

const Brand = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${FG_DEFAULT};
  text-transform: lowercase;
`

const TopDivider = styled.span`
  width: 1px;
  height: 16px;
  background: #d8dcde;
  flex-shrink: 0;
`

const TopTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${FG_DEFAULT};
`

const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(360px, 1.2fr);
  align-items: start;
  column-gap: 64px;
  padding: 40px 48px 40px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    padding: 28px 24px 28px;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  min-width: 0;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 0;
`

const ClaudeMark = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  line-height: 0;

  svg {
    display: block;
    width: 32px;
    height: 32px;
  }
`

const ClaudeLogo = () => (
  <ClaudeMark aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <path fill="#D97757" d={CLAUDE_LOGO_PATH} />
    </svg>
  </ClaudeMark>
)

const Headline = styled.h1`
  margin: 0;
  max-width: 16ch;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${FG_DEFAULT};

  @media (max-width: 860px) {
    max-width: none;
    font-size: 22px;
  }
`

const AccountRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin-top: 8px;
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1f73b7;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const Email = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${FG_DEFAULT};
`

const NotYou = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${FG_PRIMARY};
  text-decoration: none;

  &:hover {
    color: ${FG_PRIMARY_HOVER};
    text-decoration: underline;
  }
`

const SectionHeading = styled.h2`
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${FG_DEFAULT};
`

const PermissionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const PermissionItem = styled.li`
  padding: 14px 0;
  border-bottom: 1px solid #d8dcde;
`

const PermissionTitle = styled.div`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${FG_DEFAULT};
  line-height: 1.4;
`

const PermissionDescription = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.45;
  color: ${FG_SUBTLE};
`

const TrustBlock = styled.div`
  margin-top: 28px;
`

const TrustHeading = styled.h3`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${FG_DEFAULT};
  line-height: 1.4;
`

const TrustText = styled.p`
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: ${FG_SUBTLE};

  a {
    color: ${FG_PRIMARY};
    text-decoration: underline;

    &:hover {
      color: ${FG_PRIMARY_HOVER};
    }
  }
`

const Disclaimer = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${FG_SUBTLE};
`

/* Flora Outline + Primary, left-aligned with body content, 12px gap, pill. */
const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
`

/* Flora Outline — bordered secondary, transparent fill (not basic wash / not text-only). */
const CancelButton = styled(Button).attrs({
  isPill: true,
  size: 'medium',
})`
  &&& {
    border: 1px solid #68737d;
    box-shadow: none;
    background-color: transparent;
    color: ${FG_DEFAULT};

    &:hover {
      border: 1px solid #49545c;
      box-shadow: none;
      background-color: rgba(100, 104, 100, 0.08);
      color: ${FG_DEFAULT};
    }

    &:active {
      border: 1px solid #2f3941;
      background-color: rgba(100, 104, 100, 0.16);
      color: ${FG_DEFAULT};
    }
  }
`

/* Flora Primary — emphasis fill (grey.900), onEmphasis text. */
const AllowButton = styled(Button).attrs({
  isPrimary: true,
  isPill: true,
  size: 'medium',
})`
  &&& {
    background-color: #2f3941;
    border-color: #2f3941;
    color: #ffffff;

    &:hover {
      background-color: #49545c;
      border-color: #49545c;
      color: #ffffff;
    }
  }
`

export default function OAuthConsentScreenV2() {
  return (
    <Page>
      <Container>
        <TopBar>
          <Brand>zendesk</Brand>
          <TopDivider aria-hidden="true" />
          <TopTitle>Sign in with Zendesk</TopTitle>
        </TopBar>

        <Body>
          <LeftCol>
            <ClaudeLogo />
            <Headline>Claude wants to access your Zendesk account</Headline>
            <AccountRow>
              <Avatar aria-hidden="true">JR</Avatar>
              <Email>jordan.reyes@example.com</Email>
              <NotYou href="#not-you">Not you?</NotYou>
            </AccountRow>
          </LeftCol>

          <RightCol>
            <SectionHeading>Select what Claude can access</SectionHeading>
            <PermissionList>
              {PERMISSIONS.map((item) => (
                <PermissionItem key={item.title}>
                  <PermissionTitle>{item.title}</PermissionTitle>
                  <PermissionDescription>{item.description}</PermissionDescription>
                </PermissionItem>
              ))}
            </PermissionList>

            <TrustBlock>
              <TrustHeading>Make sure you trust Claude</TrustHeading>
              <TrustText>
                Review Claude&apos;s <a href="#privacy">Privacy Policy</a> and{' '}
                <a href="#terms">Terms of Service</a> to understand how Anthropic will process and
                protect your data. You can manage or revoke access anytime in{' '}
                <a href="#admin-center">Admin Center</a>.
              </TrustText>
              <Disclaimer>
                By allowing access, you agree to share selected data with Anthropic. Zendesk isn&apos;t
                responsible for third-party app use of your data. After you respond, you&apos;ll be
                redirected to claude.ai.
              </Disclaimer>
            </TrustBlock>

            <Actions>
              <CancelButton type="button">Cancel</CancelButton>
              <AllowButton type="button">Allow access</AllowButton>
            </Actions>
          </RightCol>
        </Body>
      </Container>
    </Page>
  )
}
