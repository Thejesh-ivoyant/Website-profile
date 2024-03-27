import { message } from 'antd';

type MessageTypes = 'success' | 'error' | 'warning';

interface OpenMessageType {
  type: MessageTypes; // Change type to be one of the allowed message types
  content: React.ReactNode;
  duration?: number;
  style?: React.CSSProperties;
}

const openMessage = ({ type, content, duration, style }: OpenMessageType) => {
  message[type]({
    content,
    duration,
    style,
  });
};

export const success = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'success', content, duration });
};

export const warning = (content: React.ReactNode, duration?: number) => {
  openMessage({ type: 'warning', content, duration });
};
