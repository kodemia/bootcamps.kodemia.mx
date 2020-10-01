import TagManager from 'react-gtm-module'

export function initGTM() {
  TagManager.initialize({
    gtmId: process.env.GTM_CONTAINER_ID
  })
}
