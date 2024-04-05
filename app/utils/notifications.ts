import { message } from 'antd'

type MessageTypes = 'success' | 'error' | 'warning'

type OpenMessageType = {
  type: MessageTypes
  content: React.ReactNode
  duration?: number
}

const withDefaultStyle = (WrappedMessage: any) => (options: any) => {
  const defaultStyle = { marginTop: '4.5rem' } // Define your default style here
  return WrappedMessage({ ...options, style: { ...defaultStyle, ...options.style } }) // Merge styles
}

const openMessage = withDefaultStyle(message.success) // Wrap with success for default style
const openMessageError = withDefaultStyle(message.error) // Wrap with success for default style
const openMessageWarning = withDefaultStyle(message.warning) // Wrap with success for default style

export const success = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'success', content, duration })
}

export const errorMessage = (content: React.ReactNode, duration?: number) => {
  openMessageError({ type: 'error', content, duration })
}

export const warning = (content: React.ReactNode, duration?: number) => {
  openMessageWarning({ type: 'warning', content, duration })
}
