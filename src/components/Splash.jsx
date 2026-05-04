import { useState } from "react";
import logoImg from "../assets/logo/logo1.webp";
import splashBg from "../assets/back2.webp";
import klikInfoLogo from "../assets/klik_info_logo.png";

/* ── Brand Colors ──────────────────────────────────────────
   Navy  : #043666  /  Shade: #04315C
   Gold  : #E9C170  /  Shade: #BD944D
────────────────────────────────────────────────────────── */

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
                backgroundColor: '#04315C',
                backgroundImage: `linear-gradient(rgba(4, 54, 102, 0.68), rgba(4, 49, 92, 0.90)), url(${splashBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 24px'
            }}
        >
            {/* Garuda Logo */}
            <img
                src={logoImg}
                alt="Logo"
                className="splash-logo"
                style={{
                    width: '110px',
                    height: 'auto',
                    marginBottom: '24px',
                    filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.5)) brightness(1.05)'
                }}
            />

            {/* Frosted glass card */}
            <div style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(233,193,112,0.30)',
                borderRadius: '20px',
                padding: '28px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 8px 32px rgba(4,54,102,0.4), inset 0 1px 0 rgba(233,193,112,0.15)',
                animation: 'fadeInUp 0.8s ease-out 0.2s both',
                width: '100%',
                maxWidth: '340px'
            }}>

                {/* "Selamat datang di" */}
                <p style={{
                    color: 'rgba(255,255,255,0.80)',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    margin: '0 0 14px',
                    fontFamily: "'Poppins', sans-serif",
                    textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                }}>
                    Selamat datang di
                </p>

                {/* KLIK-INFO logo */}
                <img
                    src={klikInfoLogo}
                    alt="KLIK-Info"
                    style={{
                        width: '210px',
                        height: 'auto',
                        marginBottom: '18px',
                        filter: 'drop-shadow(0 2px 14px rgba(233,193,112,0.55)) drop-shadow(0 4px 10px rgba(0,0,0,0.5))'
                    }}
                />

                {/* Gold divider */}
                <div style={{
                    width: '70px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #E9C170, transparent)',
                    borderRadius: '2px',
                    marginBottom: '16px'
                }} />

                {/* Subtitle: K/L/I/K putih tebal, sisanya gold #E9C170 */}
                <p style={{
                    fontWeight: 600,
                    fontSize: '13.5px',
                    lineHeight: '1.75',
                    textAlign: 'center',
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '0.2px'
                }}>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>K</span>
                    <span style={{ color: '#E9C170' }}>atalog </span>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>L</span>
                    <span style={{ color: '#E9C170' }}>ayanan </span>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>I</span>
                    <span style={{ color: '#E9C170' }}>nformasi </span>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>K</span>
                    <span style={{ color: '#E9C170' }}>eimigrasian</span>
                </p>
            </div>

            {/* Office name */}
            <p style={{
                color: 'rgba(233,193,112,0.70)',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '1.5',
                textAlign: 'center',
                maxWidth: '280px',
                marginTop: '18px',
                fontFamily: "'Poppins', sans-serif",
                animation: 'fadeInUp 0.8s ease-out 0.6s both',
                letterSpacing: '0.3px'
            }}>
                Kantor Imigrasi Kelas I TPI Ambon
            </p>

            {/* MASUK button */}
            <button
                onClick={handleMasuk}
                style={{
                    marginTop: '28px',
                    padding: '14px 52px',
                    background: 'linear-gradient(135deg, #BD944D, #E9C170, #BD944D)',
                    color: '#043666',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(233,193,112,0.45), 0 2px 8px rgba(0,0,0,0.3)',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    letterSpacing: '2.5px',
                    textShadow: 'none'
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
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes logoGlint {
                    0%, 80% { filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)) brightness(1); }
                    90%     { filter: drop-shadow(0 4px 20px rgba(233,193,112,0.5)) brightness(1.15); }
                    100%    { filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)) brightness(1); }
                }
                .splash-logo {
                    animation: fadeInUp 0.6s ease-out, logoGlint 4s ease-in-out 2s infinite;
                }
                `}
            </style>
        </div>
    );
};

export default Splash;
