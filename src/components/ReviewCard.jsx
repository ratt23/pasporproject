import { useState } from 'react';
import { createPortal } from 'react-dom';

const ReviewCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return createPortal(
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.35)',
            zIndex: 9998,
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {/* Floating toggle button — bottom right */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '0px',
          zIndex: 10001,
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            backgroundColor: isOpen ? '#06498a' : '#043666',
            color: '#ffffff',
            borderRadius: '12px 0 0 12px',
            padding: '14px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '-4px 0 20px rgba(4,54,102,0.3)',
            userSelect: 'none',
            minHeight: '120px',
            justifyContent: 'center',
            transition: 'background-color 0.2s',
          }}
        >
          {/* Icon: star when closed, X when open */}
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#E9C170" stroke="#E9C170" strokeWidth="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          )}
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '0.5px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              whiteSpace: 'nowrap',
            }}
          >
            {isOpen ? 'Tutup' : 'Berikan Review'}
          </span>
        </div>
      </div>

      {/* Slide-in panel — anchored to bottom right */}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: isOpen ? '0' : '-310px',
          width: '290px',
          backgroundColor: '#ffffff',
          borderRadius: '20px 0 0 20px',
          boxShadow: '-8px 0 40px rgba(4, 54, 102, 0.18)',
          padding: '28px 20px',
          zIndex: 10000,
          fontFamily: "'DM Sans', sans-serif",
          transition: 'right 0.4s cubic-bezier(0.4,0,0.2,1)',
          borderTop: '1px solid #f1f5f9',
          borderLeft: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        {/* Panel content */}
        <div style={{ textAlign: 'center' }}>
          {/* Stars */}
          <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '14px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="22" height="22" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <h3 style={{ margin: '0 0 6px 0', color: '#043666', fontSize: '16px', fontWeight: '800' }}>
            Bagaimana pengalaman Anda?
          </h3>
          <p style={{ margin: '0 0 18px 0', color: '#64748b', fontSize: '13px', fontWeight: '500' }}>
            Masukan Anda membantu kami.
          </p>

          <a
            href="https://maps.app.goo.gl/bf2L4Wo68uWrywVX9"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              backgroundColor: '#043666',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(4, 54, 102, 0.2)',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#06498a';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#043666';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            Beri ulasan di Google
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>,
    document.body
  );
};

export default ReviewCard;
