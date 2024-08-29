import { createRoot } from 'react-dom/client'
import PlateEditor from './lib/plate'

const rootEl = document.body.appendChild(document.createElement('div'))

createRoot(rootEl, {}).render(
  <div
    style={{
      marginBlock: '60px',
      marginInline: '60px',
    }}
  >
    <PlateEditor />
  </div>
)
