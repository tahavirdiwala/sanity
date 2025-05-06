import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '64e4fktw',
    dataset: 'production',
    cors: {
      origins: ['http://localhost:3000'],
    },
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
