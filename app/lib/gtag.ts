export const GA_TRACKING_ID = 'G-YBRT483V18'

// Typings for gtag
declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params: { [key: string]: any }
    ) => void
  }
}

// Log the page view
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Log specific events
export const event = ({ action, params }: { action: string; params: any }) => {
  window.gtag('event', action, params)
} 