import './App.css'
import '../mobile/src/App.css'
import { useState } from 'react'
import { useConversation } from '@elevenlabs/react'
import MobileLoader from './MobileLoader'
import { IMAGE_URLS } from './imageConfig'

function MobileApp() {
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [showIndividualModal, setShowIndividualModal] = useState(false)
  const [showCouplesModal, setShowCouplesModal] = useState(false)
  const [showAdolescentModal, setShowAdolescentModal] = useState(false)
  const [conversationState, setConversationState] = useState('idle')
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setConversationState('connected');
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setConversationState('idle');
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      setConversationState('idle');
    }
  })

  return (
    <div className="mobile-container">
      <img src={IMAGE_URLS.logo} alt="SafeStories Logo" className="mobile-logo" />

      <div className="hero-section">
        <h1 className="mobile-title">Welcome to SafeStories AI Agent!</h1>
        <p className="mobile-subtitle">Co-create your well-being journey with us</p>
        
        <div className="loader-section">
          <MobileLoader />
        </div>

        <div className="voice-section">
          {conversationState === 'idle' && (
            <button className="mobile-voice-btn" onClick={async () => {
              try {
                setConversationState('connecting');
                await conversation.startSession({ agentId: 'agent_0701kazhwzywftzbf33rq27eaa36' });
              } catch (error) {
                console.error('Failed to start conversation:', error);
                setConversationState('idle');
              }
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 15C13.66 15 15 13.66 15 12V6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V12C9 13.66 10.34 15 12 15Z" fill="white"/>
                <path d="M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12H5C5 15.53 7.61 18.43 11 18.92V21H13V18.92C16.39 18.43 19 15.53 19 12H17Z" fill="white" opacity="0.4"/>
              </svg>
              Talk to us
            </button>
          )}
          
          {conversationState === 'connecting' && (
            <button className="mobile-voice-btn connecting">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 15C13.66 15 15 13.66 15 12V6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V12C9 13.66 10.34 15 12 15Z" fill="white"/>
                <path d="M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12H5C5 15.53 7.61 18.43 11 18.92V21H13V18.92C16.39 18.43 19 15.53 19 12H17Z" fill="white" opacity="0.4"/>
              </svg>
              Connecting...
            </button>
          )}
          
          {conversationState === 'connected' && (
            <div className="conversation-active">
              <button className="mobile-end-btn" onClick={async () => {
                await conversation.endSession();
                setConversationState('idle');
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15C13.66 15 15 13.66 15 12V6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V12C9 13.66 10.34 15 12 15Z" fill="white"/>
                  <path d="M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12H5C5 15.53 7.61 18.43 11 18.92V21H13V18.92C16.39 18.43 19 15.53 19 12H17Z" fill="white" opacity="0.4"/>
                </svg>
                End Conversation
              </button>
              <span className="agent-status">Agent is speaking...</span>
            </div>
          )}
        </div>
      </div>

      <div className="mobile-actions">
        <button className="mobile-action-btn schedule" onClick={() => setShowScheduleModal(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Schedule a Session
        </button>
        
        <button className="mobile-action-btn consultation" onClick={() => window.open('https://freeconsultation.dayschedule.com/free-consultation-safestories', '_blank')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
          </svg>
          Book a Free Consultation
        </button>
        
        <button className="mobile-action-btn home" onClick={() => window.open('https://www.safestories.in/', '_blank')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9.02 2.84L3.63 7.04C2.73 7.74 2 9.23 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29 21.19 7.74 20.2 7.05L14.02 2.72C12.62 1.74 10.37 1.79 9.02 2.84Z" fill="#6E6E6E"/>
          </svg>
          Home
        </button>
      </div>

      <footer className="mobile-footer">
        All Rights Reserved. 2025 SafeStories.
      </footer>
    </div>
  )
}

export default MobileApp