import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import PrototypeBar from './prototype-bar/PrototypeBar'
import InspectLayer from './inspect/InspectLayer'
import CommentLayer from './comments/CommentLayer'
import OAuthConsentScreen from './components/OAuthConsentScreen'
import OAuthConsentScreenV2 from './components/OAuthConsentScreenV2'
import './App.css'

const VERSIONS = [
  { id: 'v1', label: 'V1', description: 'Current' },
  { id: 'v2', label: 'V2', description: 'Redesign' },
]

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`

const WorkArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

function App() {
  const [version, setVersion] = useState('v2')
  const [inspectSlot, setInspectSlot] = useState(null)
  const [inspectActive, setInspectActive] = useState(false)
  const [commentSlot, setCommentSlot] = useState(null)

  return (
    <ThemeProvider>
      <Shell>
        <PrototypeBar
          title="OAuth Consent Screen"
          meta="Started Sept 2026"
          versions={VERSIONS}
          versionId={version}
          onVersionChange={setVersion}
          inspectSlotRef={setInspectSlot}
          commentSlotRef={setCommentSlot}
          inspectActive={inspectActive}
        />
        <WorkArea data-comment-root="true" data-inspect-root="true">
          {version === 'v2' ? <OAuthConsentScreenV2 /> : <OAuthConsentScreen />}
        </WorkArea>
        <InspectLayer
          toggleContainer={inspectSlot}
          onActiveChange={setInspectActive}
        />
        <CommentLayer
          toggleContainer={commentSlot}
          context={{ version }}
          onRestoreContext={(saved) => {
            if (saved.version) setVersion(saved.version)
          }}
        />
      </Shell>
    </ThemeProvider>
  )
}

export default App
