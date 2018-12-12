export interface Message {
  type: string;
  source: MessageSource;
  payload: any;
}

export interface BarrageMessage extends Message {
  type: 'BARRAGE';
  payload: {
    working: boolean,
    barrage: string
  };
}

export enum MessageSource {
  EXTENSION = 'EXTENSION',
  CONTENT_SCRIPT = 'CONTENT_SCRIPT',
  PAGE_SCRIPT = 'PAGE_SCRIPT',
}

export function isBarrageMessage(msg: any): msg is BarrageMessage {
  return msg && msg.type === 'BARRAGE';
}
