// components/FloatingIcons.jsx
import { FaCode, FaRocket, FaPalette, FaServer } from 'react-icons/fa'
import '../styles/FloatingIcons.css'

export default function FloatingIcons() {
  const icons = [
    { Icon: FaCode, delay: 0, position: 'top-left' },
    { Icon: FaRocket, delay: 1, position: 'top-right' },
    { Icon: FaPalette, delay: 2, position: 'bottom-left' },
    { Icon: FaServer, delay: 3, position: 'bottom-right' },
  ]

  return (
    <div className="floating-icons">
      {icons.map(({ Icon, delay, position }, index) => (
        <div 
          key={index}
          className={`floating-icon floating-icon--${position}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon />
        </div>
      ))}
    </div>
  )
}