import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { chevronBackOutline, homeOutline } from 'ionicons/icons';
import { useLanguage } from "../contexts/LanguageContext";
import logo1 from "../assets/logo/logo1.webp";
import logo2 from "../assets/logo/logokementrian.png";

const TopBar = ({ path, nodes, onBack, onHome }) => {
    const { lang, toggleLang, t } = useLanguage();

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
                        src={logo1}
                        alt="Logo Imigrasi"
                        style={{
                            width: '38px',
                            height: '38px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                        }}
                    />
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
                </div>

                {/* Text */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    lineHeight: 1.3
                }}>
                    <span style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '13px',
                        fontWeight: 400,
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Kantor Imigrasi
                    </span>
                    <span style={{
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Kelas I TPI Ambon
                    </span>
                </div>
            </div>

            {/* Navigation Toolbar */}
            <IonToolbar color="light" style={{ '--padding-end': '8px' }}>
                <IonButtons slot="start">
                    <IonButton
                        onClick={onBack}
                        disabled={!showBack}
                        style={{ opacity: showBack ? 1 : 0 }}
                    >
                        <IonIcon slot="icon-only" icon={chevronBackOutline} />
                    </IonButton>
                </IonButtons>

                <div style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    {t.title}
                </div>

                <IonButtons slot="end">
                    <IonButton
                        onClick={toggleLang}
                        title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
                        style={{ fontSize: '12px', minWidth: 'auto', padding: 0 }}
                    >
                        <span style={{ marginRight: '2px', fontSize: '1.2em', lineHeight: 1 }}>
                            {lang === "id" ? "🇮🇩" : "🇺🇸"}
                        </span>
                        {lang.toUpperCase()}
                    </IonButton>

                    <IonButton
                        onClick={onHome}
                        disabled={!showBack}
                        style={{ opacity: showBack ? 1 : 0 }}
                    >
                        <IonIcon slot="icon-only" icon={homeOutline} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>

            {breadcrumbs.length > 0 && (
                <div style={{
                    padding: '0 16px 8px',
                    textAlign: 'center',
                    backgroundColor: 'var(--ion-color-light)',
                    fontSize: '12px',
                    color: 'var(--ion-color-medium)',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    {breadcrumbs.join(" / ")}
                </div>
            )}
        </IonHeader>
    );
};

export default TopBar;
