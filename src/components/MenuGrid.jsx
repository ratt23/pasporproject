import { IonGrid, IonRow, IonCol, IonCard, IonText } from '@ionic/react';
import { useLanguage } from "../contexts/LanguageContext";

// Mapping titles to unsplash keywords for corporate images
const getImageKeyword = (title) => {
    const t = title.toLowerCase();
    if (t.includes('baru') || t.includes('new')) return 'document,desk,office';
    if (t.includes('hilang') || t.includes('lost')) return 'insurance,paperwork';
    if (t.includes('pergantian') || t.includes('replacement')) return 'passport,travel,business';
    if (t.includes('rusak') || t.includes('damage')) return 'contract,legal';
    return 'corporate,office,professional';
}

const MenuGrid = ({ nodes, onSelect }) => {
    const { t } = useLanguage();
    return (
        <div style={{ padding: '0 8px' }}>
            <IonText color="dark">
                <h2 style={{ fontWeight: 800, margin: '0 0 8px', lineHeight: 1.2, fontSize: '24px' }}>
                    {t.welcome}
                </h2>
            </IonText>
            <IonText color="medium">
                <p style={{ fontWeight: 500, margin: '0 0 24px', fontSize: '14px' }}>
                    {t.selectCategory}
                </p>
            </IonText>

            <IonGrid className="ion-no-padding">
                <IonRow>
                    {nodes.map((node) => (
                        <IonCol size="6" key={node.id}>
                            <IonCard
                                button
                                onClick={() => onSelect(node)}
                                style={{
                                    margin: '6px',
                                    height: 'calc(100% - 12px)',
                                    borderRadius: '16px',
                                    border: '1px solid var(--ion-color-step-100, #e0e0e0)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '0',
                                    cursor: 'pointer',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100px',
                                    backgroundImage: `url(https://source.unsplash.com/400x300/?${getImageKeyword(node.title)})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: 'var(--ion-color-primary-tint)'
                                }} />

                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: '#ffffff' }}>
                                    <IonText color="dark">
                                        <h3 style={{ margin: 0, fontWeight: '700', lineHeight: 1.2, fontSize: '15px' }}>
                                            {node.title}
                                        </h3>
                                    </IonText>
                                    {node.desc && (
                                        <IonText color="medium">
                                            <p style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: '6px 0 0', lineHeight: 1.4, fontSize: '12px' }}>
                                                {node.desc}
                                            </p>
                                        </IonText>
                                    )}
                                </div>
                            </IonCard>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default MenuGrid;
