import { IonList, IonItem, IonLabel, IonIcon, IonText } from "@ionic/react";
import { chevronForwardOutline } from 'ionicons/icons';
import React from "react";

const SubMenuList = ({ nodes, onSelect, parentTitle }) => {
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
                {nodes.map((node) => {
                    const hasChildren = node.children && node.children.length > 0;
                    const hasDetail = node.detail && node.detail.length > 0;
                    const isClickable = hasChildren || hasDetail;

                    return (
                        <IonItem
                            key={node.id}
                            button={isClickable}
                            detail={false}
                            onClick={() => isClickable && onSelect(node)}
                            style={{
                                '--background': 'var(--ion-color-light-tint, #ffffff)',
                                '--border-radius': '16px',
                                '--padding-start': '0',
                                '--inner-padding-end': '16px',
                                marginBottom: '12px',
                                border: '1px solid var(--ion-color-step-150, #d7d8da)',
                                borderRadius: '16px'
                            }}
                        >
                            {/* Accent bar */}
                            <div style={{ height: '40px', width: '4px', borderRadius: '4px', backgroundColor: 'var(--ion-color-primary)', margin: '16px 16px 16px 0' }} />

                            <IonLabel className="ion-text-wrap" style={{ margin: '16px 0' }}>
                                <IonText color="dark">
                                    <h3 style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: 1.3, margin: 0 }}>
                                        {node.title}
                                    </h3>
                                </IonText>
                                {node.desc && (
                                    <IonText color="medium">
                                        <p style={{ marginTop: '4px', fontSize: '13px', lineHeight: 1.4 }}>
                                            {node.desc}
                                        </p>
                                    </IonText>
                                )}
                            </IonLabel>

                            {isClickable && (
                                <IonIcon icon={chevronForwardOutline} color="medium" slot="end" style={{ marginLeft: '16px' }} />
                            )}
                        </IonItem>
                    );
                })}
            </IonList>
        </div>
    );
};

export default SubMenuList;
