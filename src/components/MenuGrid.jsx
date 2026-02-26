import { IonGrid, IonRow, IonCol, IonCard, IonText } from '@ionic/react';
import { useLanguage } from "../contexts/LanguageContext";

const MenuGrid = ({ nodes, onSelect }) => {
    const { t } = useLanguage();
    return (
        <div style={{ padding: '0 8px' }}>
            <IonText color="dark">
                <h2 style={{
                    fontWeight: 700,
                    margin: '0 0 4px',
                    lineHeight: 1.3,
                    fontSize: '22px',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    {t.welcome}
                </h2>
            </IonText>
            <IonText color="medium">
                <p style={{
                    fontWeight: 400,
                    margin: '0 0 4px',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif"
                }}>
                    {t.welcomeSub}
                </p>
            </IonText>
            <IonText color="medium">
                <p style={{
                    fontWeight: 500,
                    margin: '0 0 20px',
                    fontSize: '13px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontStyle: 'italic'
                }}>
                    {t.officeName}
                </p>
            </IonText>

            <IonGrid className="ion-no-padding">
                <IonRow>
                    {nodes.map((node, index) => {
                        const accentColors = [
                            '#00277f',
                            '#1a5276',
                            '#0e4d6b',
                            '#2c3e6b',
                            '#1b3a5c',
                            '#003566'
                        ];
                        const accent = accentColors[index % accentColors.length];

                        return (
                            <IonCol size="6" key={node.id}>
                                <IonCard
                                    button
                                    onClick={() => onSelect(node)}
                                    style={{
                                        margin: '6px',
                                        height: 'calc(100% - 12px)',
                                        borderRadius: '12px',
                                        border: '1px solid #e8eaed',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '0',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                                    }}
                                >
                                    {/* Top accent line */}
                                    <div style={{
                                        width: '100%',
                                        height: '4px',
                                        backgroundColor: accent
                                    }} />

                                    <div style={{
                                        padding: '20px 16px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        backgroundColor: '#ffffff'
                                    }}>
                                        <IonText color="dark">
                                            <h3 style={{
                                                margin: 0,
                                                fontWeight: 700,
                                                lineHeight: 1.3,
                                                fontSize: '15px',
                                                fontFamily: "'DM Sans', sans-serif",
                                                letterSpacing: '-0.2px'
                                            }}>
                                                {node.title}
                                            </h3>
                                        </IonText>
                                        {node.desc && (
                                            <IonText color="medium">
                                                <p style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    margin: '8px 0 0',
                                                    lineHeight: 1.5,
                                                    fontSize: '12px',
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontWeight: 400
                                                }}>
                                                    {node.desc}
                                                </p>
                                            </IonText>
                                        )}
                                    </div>
                                </IonCard>
                            </IonCol>
                        );
                    })}
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default MenuGrid;
