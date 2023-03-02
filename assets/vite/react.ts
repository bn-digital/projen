import { configureReact } from '@bn-digital/vite'
import { defineConfig } from 'vite'

const config = configureReact(
  {},
  {
    lint: { enabled: {{ lintersEnabled }}) },
    react: { graphql: {{ graphqlEnabled }} },
    analytics: { enableDev: false },
    fonts: {
      google: {
        preconnect: true,
        families: [{ name: 'Lato', styles: 'wght@400;500;600;700;800;900' }],
        display: 'auto',
      },
    },
  }
)

export default defineConfig(config)