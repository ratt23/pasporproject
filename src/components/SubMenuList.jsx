import { IonList, IonText } from "@ionic/react";

/** Warnai setiap huruf K, L, I di awal / sub-kata 'KLIK' dengan biru */
const renderTitleWithBlueKLIK = (title) => {
    // Beri warna biru pada setiap kemunculan kata "KLIK" (case-sensitive)
    const parts = title.split(/(KLIK)/g);
    return parts.map((part, idx) =>
        part === 'KLIK'
            ? <span key={idx} style={{ color: '#1a56db', fontWeight: 700 }}>KLIK</span>
            : part
    );
};

const SubMenuList = ({ nodes, onSelect, parentTitle, footer }) => {
    return (
        <div style={{ padding: '0 8px' }}>
            {parentTitle && (
                <IonText color="dark">
                    <h2 style={{
                        fontWeight: 700,
                        margin: '0 0 16px',
                        lineHeight: 1.3,
                        fontSize: '20px',
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '-0.3px'
                    }}>
                        {parentTitle}
                    </h2>
                </IonText>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {nodes.map((node, index) => {
                    const hasChildren = node.children && node.children.length > 0;
                    const hasDetail = node.detail && node.detail.length > 0;
                    const isClickable = hasChildren || hasDetail;

                    return (
                        <div
                            key={node.id}
                            onClick={() => isClickable && onSelect(node)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '16px',
                                backgroundColor: '#ffffff',
                                borderRadius: '10px',
                                border: '1px solid #e8eaed',
                                cursor: isClickable ? 'pointer' : 'default',
                                transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                            }}
                        >
                            {/* Number */}
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
                                {index + 1}
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
                                {renderTitleWithBlueKLIK(node.title)}
                                </div>
                                {node.desc && (
                                    <div style={{
                                        marginTop: '4px',
                                        fontSize: '12px',
                                        lineHeight: 1.4,
                                        color: '#6b7280',
                                        fontFamily: "'DM Sans', sans-serif",
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {node.desc}
                                    </div>
                                )}
                            </div>

                            {/* Arrow */}
                            {isClickable && (
                                <svg
                                    width="16" height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#BD944D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ flexShrink: 0 }}
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>

            {footer && (() => {
                const isFootnote = footer.trim().startsWith('*');
                if (isFootnote) {
                    return (
                        <div style={{
                            marginTop: '24px',
                            paddingTop: '14px',
                            borderTop: '1px solid #cbd5e1',
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'flex-start'
                        }}>
                            <span style={{
                                color: '#64748b',
                                fontSize: '11px',
                                fontWeight: 600,
                                fontFamily: "'DM Sans', sans-serif",
                                lineHeight: 1.6,
                                flexShrink: 0,
                                marginTop: '1px'
                            }}>*</span>
                            <p style={{
                                margin: 0,
                                fontSize: '11px',
                                lineHeight: 1.7,
                                fontFamily: "'DM Sans', sans-serif",
                                fontStyle: 'italic',
                                color: '#64748b',
                                fontWeight: 400
                            }}>
                                {footer.replace(/^\*/, '')}
                            </p>
                        </div>
                    );
                }
                return (
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
                );
            })()}
        </div>
    );
};

export default SubMenuList;
