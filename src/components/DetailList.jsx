const DetailList = ({ details, parentTitle }) => {
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
                            {/* Number */}
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                backgroundColor: '#00277f',
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
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>
                                        {note}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DetailList;
