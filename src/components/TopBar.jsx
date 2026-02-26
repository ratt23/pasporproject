import { IonHeader } from '@ionic/react';
import { useLanguage } from "../contexts/LanguageContext";
import logo1 from "../assets/logo/logo1.webp";
import logo2 from "../assets/logo/logokementrian.png";

const TopBar = ({ path, nodes, onBack, onHome }) => {
    const { lang, toggleLang } = useLanguage();

    const breadcrumbs = [];
    let currentNodes = nodes;
    for (const id of path) {
        const found = currentNodes.find((n) => n.id === id);
        if (found) {
            breadcrumbs.push(found.title);
            currentNodes = found.children || [];
        }
    }

    const showBack = path.length > 0;
    const currentTitle = breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : '';

    return (
        <IonHeader className="ion-no-border">
            {/* Brand Header */}
            <div style={{
                backgroundColor: '#00277f',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 16px',
                gap: '12px'
            }}>
                {/* Logos */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0
                }}>
                    <img
                        src={logo2}
                        alt="Logo Kementrian"
                        style={{
                            width: '38px',
                            height: '38px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                        }}
                    />
                    <img
                        src={logo1}
                        alt="Logo Imigrasi"
                        style={{
                            width: '38px',
                            height: '38px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                        }}
                    />
                </div>

                {/* Text */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    lineHeight: 1.3,
                    flex: 1
                }}>
                    <span style={{
                        color: '#e9b856',
                        fontSize: '13px',
                        fontWeight: 400,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Kantor Imigrasi
                    </span>
                    <span style={{
                        color: '#e9b856',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Kelas I TPI Ambon
                    </span>
                </div>

                {/* Right buttons */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexShrink: 0
                }}>
                    <button
                        onClick={toggleLang}
                        title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
                        style={{
                            background: 'rgba(255,255,255,0.12)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontSize: '11px',
                            fontWeight: 600,
                            fontFamily: "'DM Sans', sans-serif",
                            padding: '5px 10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            letterSpacing: '0.5px'
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        {lang.toUpperCase()}
                    </button>

                    {showBack && (
                        <button
                            onClick={onHome}
                            title="Halaman Utama"
                            style={{
                                background: 'rgba(255,255,255,0.12)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '6px',
                                color: '#ffffff',
                                padding: '5px 8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation bar with back + title */}
            {showBack && (
                <div style={{
                    backgroundColor: '#f4f5f8',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    gap: '8px',
                    borderBottom: '1px solid #e0e0e0'
                }}>
                    <button
                        onClick={onBack}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '2px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#00277f',
                            flexShrink: 0
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <span style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#00277f',
                        fontFamily: "'DM Sans', sans-serif",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {breadcrumbs.length > 2
                            ? '… / ' + breadcrumbs.slice(-2).join(' / ')
                            : breadcrumbs.join(' / ')}
                    </span>
                </div>
            )}
        </IonHeader>
    );
};

export default TopBar;
