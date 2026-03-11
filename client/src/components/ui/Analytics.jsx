import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Analytics configuration
// Replace with your own analytics URL or leave empty to disable
const ANALYTICS_URL = '' // e.g., 'https://plausible.io/js/script.js' or '' to disable

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!ANALYTICS_URL) return

    // Track pageview on route change
    const handleRouteChange = () => {
      if (window.plausible) {
        window.plausible('pageview')
      }
    }

    handleRouteChange()
  }, [location])

  if (!ANALYTICS_URL) {
    return null
  }

  return (
    <>
      <script
        async
        defer
        data-domain="hungryghostdev.com"
        src={ANALYTICS_URL}
      />
      <script>
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments)
          }
        `}
      </script>
    </>
  )
}
