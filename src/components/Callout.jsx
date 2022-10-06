import ChainPNG from '../assets/chain.png';
import LampPNG from '../assets/lamp.png';
import InfoPNG from '../assets/info.png';
import PencilPNG from '../assets/pencil.png';
import StopPNG from '../assets/stop.png';
import WarningPNG from '../assets/warning.png';

const EMOJI_MAP = {
  chain: ChainPNG,
  lamp: LampPNG,
  info: InfoPNG,
  pencil: PencilPNG,
  stop: StopPNG,
  warning: WarningPNG,
}

const TYPE_MAP = {
  general: {
    emoji: EMOJI_MAP.chain,
    style: {
      backgroundColor: '#FEF7EE',
      border: '1px solid #FCEED8',
    },
  },
  tip: {
    emoji: EMOJI_MAP.lamp,
    style: {
      backgroundColor: '#E9F3EB',
      border: '1px solid #C9E5CD',
    },
  },
  info: {
    emoji: EMOJI_MAP.info,
    style: {
      backgroundColor: '#E8EFFF',
      border: '1px solid #D7E4FF',
    },
  },
  note: {
    emoji: EMOJI_MAP.pencil,
    style: {
      backgroundColor: '#F6F6F7',
      border: '1px solid #EAEAEA',
    },
  },
  error: {
    emoji: EMOJI_MAP.stop,
    style: {
      backgroundColor: '#FFE8E8',
      border: '1px solid #F9C2C2',
    },
  },
  warning: {
    emoji: EMOJI_MAP.warning,
    style: {
      backgroundColor: '#FFFDDA',
      border: '1px solid #F5F2AD',
    },
  },
}

export const Callout = ({ type="general", emoji, children }) => {
  const foundType = TYPE_MAP[type];

  if (!foundType) {
    return null;
  }

  return (
    <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: 24,
        padding: 12,
        borderRadius: 8,
        ...foundType.style
      }}
    >
      <div style={{ minWidth: 'fit-content', marginTop: 5 }}>
        <img src={EMOJI_MAP[emoji] || foundType.emoji} alt="emoji" />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
