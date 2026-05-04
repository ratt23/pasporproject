import { useState } from "react";

const DetailList = ({ details, parentTitle, footer }) => {
    const [fullscreenImg, setFullscreenImg] = useState(null);

    return (
        <div style={{ padding: '0 8px' }}>
            {parentTitle && (
                <h2 style={{
                    fontWeight: 700,
                    margin: '0 0 16px',
                    lineHeight: 1.3,
                    fontSize: '20px',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '-0.3px',
                    color: '#1a1a2e'
                }}>
                    {parentTitle}
                </h2>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {details.map((d, i) => {
                    const isImage = typeof d === "object" && d.isImage;

                    if (isImage) {
                        return (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: '14px' }}>
                                {/* QR Code besar */}
                                <div style={{
                                    width: '100%',
                                    background: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '16px',
                                    boxShadow: '0 4px 16px rgba(4,54,102,0.12)',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src={d.src}
                                        alt="QR Code"
                                        style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '8px', display: 'block' }}
                                    />
                                </div>

                                {/* Tombol fullscreen */}
                                <button
                                    onClick={() => setFullscreenImg(d.src)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '12px 28px',
                                        background: 'linear-gradient(135deg, #043666, #04315C)',
                                        color: '#E9C170',
                                        border: 'none',
                                        borderRadius: '50px',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 14px rgba(4,54,102,0.3)',
                                        letterSpacing: '0.5px',
                                        transition: 'transform 0.15s ease'
                                    }}
                                    onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
                                    onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 3 21 3 21 9"/>
                                        <polyline points="9 21 3 21 3 15"/>
                                        <line x1="21" y1="3" x2="14" y2="10"/>
                                        <line x1="3" y1="21" x2="10" y2="14"/>
                                    </svg>
                                    Perbesar untuk Scan
                                </button>
                            </div>
                        );
                    }

                    const isVideo = typeof d === "object" && d.isVideo;
                    if (isVideo) {
                        const isGoogleDrive = typeof d.src === 'string' && d.src.includes('drive.google.com');
                        
                        if (isGoogleDrive) {
                            const embedUrl = d.src.replace(/\/view(\?.*)?$/, '/preview');
                            return (
                                <div key={i} style={{ display: 'flex', justifyContent: 'center', padding: '16px 0', width: '100%' }}>
                                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe 
                                            src={embedUrl} 
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} 
                                            allow="autoplay; fullscreen"
                                        ></iframe>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={i} style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
                                <video src={d.src} controls style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                    Browser Anda tidak mendukung tag video.
                                </video>
                            </div>
                        );
                    }

                    const title = typeof d === "string" ? d : d.title;
                    const note = typeof d === "object" ? d.note : null;

                    return (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '16px',
                                backgroundColor: '#ffffff',
                                borderRadius: '10px',
                                border: '1px solid #e8eaed',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                            }}
                        >
                            {/* Number badge */}
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                backgroundColor: '#043666',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '13px',
                                fontWeight: 700,
                                fontFamily: "'DM Sans', sans-serif",
                                flexShrink: 0
                            }}>
                                {i + 1}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    lineHeight: 1.4,
                                    color: '#1a1a2e',
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>
                                    {title}
                                </div>
                                {note && (
                                    <div style={{
                                        marginTop: '4px',
                                        fontSize: '12px',
                                        lineHeight: 1.4,
                                        color: '#6b7280',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontStyle: typeof d === "object" && d.italicNote ? 'italic' : 'normal'
                                    }}>
                                        {note}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {footer && (
                <div style={{
                    marginTop: '20px',
                    padding: '24px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                }}>
                    <div style={{
                        margin: 0,
                        fontSize: '13px',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif",
                        whiteSpace: 'pre-wrap',
                        color: '#1e293b'
                    }}
                        dangerouslySetInnerHTML={{
                            __html: footer
                                .replace(/^(.*?)(?=\n\n\*)/s, '<strong style="font-weight: 700; color: #1e293b;">$1</strong>')
                                .replace(/\*(.*?)$/g, '<span style="font-style: italic; font-weight: 400; color: #475569;">*$1</span>')
                        }} />
                </div>
            )}

            {/* ── Fullscreen overlay untuk scan QR ── */}
            {fullscreenImg && (
                <div
                    onClick={() => setFullscreenImg(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '100px 24px 40px',
                        gap: '20px'
                    }}
                >
                    {/* Header */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        padding: '14px 20px',
                        background: '#043666',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{
                            color: '#E9C170',
                            fontWeight: 700,
                            fontSize: '15px',
                            fontFamily: "'Poppins', sans-serif",
                            letterSpacing: '0.5px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                            </svg>
                            Scan QR Code
                        </span>
                        <button
                            onClick={(e) => { e.stopPropagation(); setFullscreenImg(null); }}
                            style={{
                                background: 'rgba(233,193,112,0.15)',
                                border: '1px solid rgba(233,193,112,0.4)',
                                borderRadius: '8px',
                                color: '#E9C170',
                                padding: '6px 16px',
                                fontSize: '13px',
                                fontWeight: 600,
                                fontFamily: "'Poppins', sans-serif",
                                cursor: 'pointer'
                            }}
                        >
                            ✕ Tutup
                        </button>
                    </div>

                    {/* QR Code fullscreen */}
                    <img
                        src={fullscreenImg}
                        alt="QR Code"
                        style={{
                            width: '100%',
                            maxWidth: '380px',
                            height: 'auto',
                            borderRadius: '16px',
                            boxShadow: '0 8px 32px rgba(4,54,102,0.15)',
                            border: '3px solid #043666'
                        }}
                    />

                    <p style={{
                        color: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: "'Poppins', sans-serif",
                        textAlign: 'center',
                        margin: 0
                    }}>
                        Tap di mana saja untuk menutup
                    </p>
                </div>
            )}
        </div>
    );
};

export default DetailList;
