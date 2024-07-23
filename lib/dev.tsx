import { createRoot } from 'react-dom/client'
import { PlateEditor } from './plate'

const rootEl = document.body.appendChild(document.createElement('div'))

createRoot(rootEl, {}).render(
  <div
    style={{
      marginInline: 'auto',
      //maxWidth: '1200px',
      //width: '100%',
      margin: '100px',

      border: '1px solid #cdd1d8',
      borderRadius: '8px',
      padding: '20px',
    }}
  >
    <PlateEditor />
  </div>
)
