import { createRoot } from 'react-dom/client'
import PlateEditor from './lib/plate'

const rootEl = document.body.appendChild(document.createElement('div'))

createRoot(rootEl, {}).render(<PlateEditor />)
