import { useState, useCallback } from "react";
import { MENU_TREE_ID, MENU_TREE_EN, SITE_TITLE_ID, SITE_TITLE_EN } from "./data/menuTree";
import Splash from "./components/Splash";
import TopBar from "./components/TopBar";
import MenuGrid from "./components/MenuGrid";
import SubMenuList from "./components/SubMenuList";
import DetailList from "./components/DetailList";
import ReviewCard from "./components/ReviewCard";
import { useLanguage } from "./contexts/LanguageContext";
import { IonApp, IonPage, IonContent, IonFooter, IonText } from '@ionic/react';


/* ── helpers ────────────────────────────────────────────── */

/** Walk the tree following `path` ids, return the node array at current level */
function getNodesAtPath(tree, path) {
  let nodes = tree;
  for (const id of path) {
    const found = nodes.find((n) => n.id === id);
    if (!found || !found.children) return [];
    nodes = found.children;
  }
  return nodes;
}

/** Find a node by id anywhere in the tree */
function findNodeById(nodes, id) {
  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const found = findNodeById(n.children, id);
      if (found) return found;
    }
  }
  return null;
}

/* ── App ────────────────────────────────────────────────── */

function App() {
  const { lang, t } = useLanguage();
  const MENU_TREE = lang === "en" ? MENU_TREE_EN : MENU_TREE_ID;
  const SITE_TITLE = lang === "en" ? SITE_TITLE_EN : SITE_TITLE_ID;

  const [screen, setScreen] = useState("splash"); // "splash" | "tree" | "detail"
  const [path, setPath] = useState([]); // array of node ids from root → current
  const [detailNodeId, setDetailNodeId] = useState(null);

  /* SPLASH → TREE */
  const handleSplashDone = useCallback(() => setScreen("tree"), []);

  /* SELECT a node */
  const handleSelect = useCallback((node) => {
    if (node.children && node.children.length > 0) {
      setPath((prev) => [...prev, node.id]);
    } else if (node.detail && node.detail.length > 0) {
      setDetailNodeId(node.id);
      setScreen("detail");
    }
  }, []);

  /* BACK */
  const handleBack = useCallback(() => {
    if (screen === "detail") {
      setDetailNodeId(null);
      setScreen("tree");
    } else if (path.length > 0) {
      setPath((prev) => prev.slice(0, -1));
    }
  }, [screen, path]);

  /* HOME */
  const handleHome = useCallback(() => {
    setPath([]);
    setDetailNodeId(null);
    setScreen("tree");
  }, []);

  /* ── Derive current view data ───────────────────── */
  const currentNodes = getNodesAtPath(MENU_TREE, path);
  const isRoot = path.length === 0 && screen === "tree";
  const detailNode = detailNodeId ? findNodeById(MENU_TREE, detailNodeId) : null;

  // Parent title for submenu / detail header
  const parentNode = path.length > 0 ? findNodeById(MENU_TREE, path[path.length - 1]) : null;



  /* ── Render ───────────────────────────────────────── */
  return (
    <IonApp style={{ maxWidth: '420px', margin: '0 auto', position: 'relative', height: '100dvh', overflow: 'hidden', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
      {/* Splash */}
      {screen === "splash" && <Splash onFinish={handleSplashDone} />}

      {/* Main app */}
      {screen !== "splash" && (
        <IonPage>
          {/* Top bar uses Ionic native headers inside the component */}
          <TopBar
            path={screen === "detail" ? [...path, detailNodeId] : path}
            nodes={MENU_TREE}
            onBack={handleBack}
            onHome={handleHome}
          />

          {/* Background wrapper */}
          <div style={{ position: 'relative', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <IonContent
              className="ion-padding"
              style={{ '--background': 'transparent', position: 'relative', zIndex: 2 }}
            >
              <div style={{ paddingTop: '8px' }}>
                {screen === "detail" && detailNode ? (
                  <DetailList
                    details={detailNode.detail}
                    parentTitle={detailNode.title}
                    footer={detailNode.footer}
                  />
                ) : isRoot ? (
                  <MenuGrid nodes={currentNodes} onSelect={handleSelect} />
                ) : (
                  <SubMenuList
                    nodes={currentNodes}
                    onSelect={handleSelect}
                    parentTitle={parentNode?.title}
                    footer={parentNode?.footer}
                  />
                )}
              </div>
            </IonContent>
          </div>

          <IonFooter className="ion-no-border" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              
              {/* Kontak */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/6281343040110" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#043666' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span style={{ fontSize: '13px', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>081343040110</span>
                </a>

                <a href="https://instagram.com/imigrasiambon" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#043666' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span style={{ fontSize: '13px', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>@imigrasiambon</span>
                </a>
              </div>

              <IonText color="medium">
                <p style={{ margin: 0, fontSize: '12px', fontFamily: "'Poppins', sans-serif" }}>
                  © 2026 Kantor Imigrasi Kelas I TPI Ambon
                </p>
              </IonText>
            </div>
          </IonFooter>
          <ReviewCard />
        </IonPage>
      )}
    </IonApp>
  );
}

export default App;
