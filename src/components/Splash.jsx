import { useState } from "react";
import logoImg from "../assets/logo/logo1.webp";

const Splash = ({ onFinish }) => {
    const [open, setOpen] = useState(true);
    const [visible, setVisible] = useState(true);

    const handleMasuk = () => {
        setOpen(false);
        setTimeout(() => {
            setVisible(false);
            onFinish();
        }, 500);
    };

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 50,
                width: '100%',
                height: '100%',
                opacity: open ? 1 : 0,
                transition: 'opacity 500ms ease-in-out',
                backgroundColor: '#00277f',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px'
            }}
        >
            <div style={{
                position: 'relative',
                width: '140px',
                marginBottom: '32px',
                animation: 'fadeInUp 0.8s ease-out',
                overflow: 'hidden',
                borderRadius: '50%'
            }}>
                <img
                    src={logoImg}
                    alt="Logo"
                    style={{
                        width: '140px',
                        height: 'auto',
                        display: 'block',
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                    }}
                />
                <div className="shimmer-overlay" />
            </div>

            <h1 style={{
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '28px',
                lineHeight: '1.2',
                textAlign: 'center',
                margin: '0 0 16px',
                fontFamily: "'Poppins', sans-serif",
                animation: 'fadeInUp 0.8s ease-out 0.3s both',
                textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                letterSpacing: '0.5px'
            }}>
                Selamat Datang
            </h1>

            <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '1.6',
                textAlign: 'center',
                maxWidth: '320px',
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                animation: 'fadeInUp 0.8s ease-out 0.5s both',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>
                di Pusat Layanan Informasi Dokumen Perjalanan<br />
                Republik Indonesia
            </p>

            <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '1.5',
                textAlign: 'center',
                maxWidth: '300px',
                marginTop: '16px',
                fontFamily: "'Poppins', sans-serif",
                animation: 'fadeInUp 0.8s ease-out 0.7s both',
                letterSpacing: '0.3px'
            }}>
                Kantor Imigrasi Kelas I TPI Ambon
            </p>

            <button
                onClick={handleMasuk}
                style={{
                    marginTop: '40px',
                    padding: '12px 48px',
                    backgroundColor: '#ffffff',
                    color: '#00277f',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    letterSpacing: '1px'
                }}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
                onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
                MASUK
            </button>

            <style>
                {`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-150%) rotate(25deg); }
                    100% { transform: translateX(150%) rotate(25deg); }
                }
                .shimmer-overlay {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255,255,255,0) 30%,
                        rgba(255,255,255,0.4) 50%,
                        rgba(255,255,255,0) 70%,
                        transparent 100%
                    );
                    animation: shimmer 3s ease-in-out 2s infinite;
                    pointer-events: none;
                    transform: translateX(-150%) rotate(25deg);
                }
                `}
            </style>
        </div>
    );
};

export default Splash;
