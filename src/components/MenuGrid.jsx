import { IonGrid, IonRow, IonCol, IonCard, IonText } from '@ionic/react';
import { useLanguage } from "../contexts/LanguageContext";
import IconBadge from "./IconBadge";
import klikInfoLogo from "../assets/klik_info_logo.png";

const MenuGrid = ({ nodes, onSelect }) => {
    const { t } = useLanguage();
    return (
        <div style={{ padding: '0 8px' }}>
            {/* Klik-Info logo replacing welcome text */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '4px', gap: '8px' }}>
                <img
                    src={klikInfoLogo}
                    alt="KLIK-Info"
                    style={{
                        width: '180px',
                        height: 'auto',
                        filter: 'drop-shadow(0 2px 8px rgba(4,54,102,0.18))'
                    }}
                />
                {/* Subtitle dengan warna sama seperti splash */}
                <p style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '0.2px'
                }}>
                    <span style={{ color: '#043666', fontWeight: 800 }}>K</span>
                    <span style={{ color: '#E9C170' }}>atalog </span>
                    <span style={{ color: '#043666', fontWeight: 800 }}>L</span>
                    <span style={{ color: '#E9C170' }}>ayanan </span>
                    <span style={{ color: '#043666', fontWeight: 800 }}>I</span>
                    <span style={{ color: '#E9C170' }}>nformasi </span>
                    <span style={{ color: '#043666', fontWeight: 800 }}>K</span>
                    <span style={{ color: '#E9C170' }}>eimigrasian</span>
                </p>
            </div>

            <IonGrid className="ion-no-padding">
                <IonRow>
                    {nodes.map((node, index) => {
                        const accentColors = [
                            '#043666',
                            '#04315C',
                            '#043666',
                            '#04315C',
                            '#043666',
                            '#04315C'
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
                                        padding: '16px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        backgroundColor: '#ffffff'
                                    }}>
                                        {/* Icon */}
                                        <div style={{ marginBottom: '10px' }}>
                                            <IconBadge
                                                iconSrc={node.iconSrc}
                                                iconKey={node.iconKey}
                                                size="md"
                                            />
                                        </div>
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
