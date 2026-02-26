import { IonList, IonItem, IonLabel, IonAvatar, IonText } from "@ionic/react";

const DetailList = ({ details, parentTitle }) => {
    return (
        <div style={{ padding: '0 8px' }}>
            {parentTitle && (
                <IonText color="dark">
                    <h2 style={{ fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2, fontSize: '20px' }}>
                        {parentTitle}
                    </h2>
                </IonText>
            )}

            <IonList style={{ background: 'transparent' }} lines="none">
                {details.map((d, i) => {
                    const title = typeof d === "string" ? d : d.title;
                    const note = typeof d === "object" ? d.note : null;

                    return (
                        <IonItem
                            key={i}
                            style={{
                                '--background': 'var(--ion-color-light-tint, #ffffff)',
                                '--border-radius': '16px',
                                '--padding-start': '16px',
                                '--inner-padding-end': '16px',
                                marginBottom: '12px',
                                border: '1px solid var(--ion-color-step-150, #d7d8da)',
                                borderRadius: '16px'
                            }}
                        >
                            <IonAvatar
                                slot="start"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--ion-color-primary-tint, #eff6ff)',
                                    color: 'var(--ion-color-primary, #2563eb)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    borderRadius: '8px'
                                }}
                            >
                                {i + 1}
                            </IonAvatar>

                            <IonLabel className="ion-text-wrap" style={{ margin: '16px 0' }}>
                                <IonText color="dark">
                                    <h3 style={{ fontWeight: 'bold', fontSize: '14px', lineHeight: 1.3, margin: 0 }}>
                                        {title}
                                    </h3>
                                </IonText>
                                {note && (
                                    <IonText color="medium">
                                        <p style={{ marginTop: '4px', fontSize: '12px', lineHeight: 1.4 }}>
                                            {note}
                                        </p>
                                    </IonText>
                                )}
                            </IonLabel>
                        </IonItem>
                    );
                })}
            </IonList>
        </div>
    );
};

export default DetailList;
