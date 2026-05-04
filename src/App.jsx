import { useState, useCallback } from "react";
import { MENU_TREE_ID, MENU_TREE_EN, SITE_TITLE_ID, SITE_TITLE_EN } from "./data/menuTree";
import Splash from "./components/Splash";
import TopBar from "./components/TopBar";
import MenuGrid from "./components/MenuGrid";
import SubMenuList from "./components/SubMenuList";
import DetailList from "./components/DetailList";
import { useLanguage } from "./contexts/LanguageContext";
import { IonApp, IonPage, IonContent, IonFooter, IonText } from '@ionic/react';
import back3 from "./assets/back3.webp";
import bgMenu1 from "./assets/backmenu/1.webp";
import bgMenu2 from "./assets/backmenu/2.webp";
import bgMenu3 from "./assets/backmenu/3.webp";
import bgMenu4 from "./assets/backmenu/4.webp";

const MENU_BG = {
  persyaratan:              bgMenu1,
  tarif:                    bgMenu2,
  penggantian:              bgMenu3,
  'pengajuan-online':       bgMenu4,
};

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

  // Tentukan top-level menu id untuk background
  const topLevelId = path.length > 0 ? path[0] : (screen === 'detail' ? detailNodeId : null);
  const pageBg = topLevelId ? MENU_BG[topLevelId] : null;

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
          <div style={{ position: 'relative', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background image: menu utama pakai back3, halaman lain pakai pageBg */}
            {(isRoot || pageBg) && (
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${isRoot ? back3 : pageBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0
              }} />
            )}
            {(isRoot || pageBg) && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255,255,255,0.82)',
                backdropFilter: 'blur(1px)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />
            )}
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

          <IonFooter className="ion-no-border">
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <IonText color="medium">
                <p style={{ margin: 0, fontSize: '12px', fontFamily: "'Poppins', sans-serif" }}>
                  © 2026 Kantor Imigrasi Kelas I TPI Ambon
                </p>
              </IonText>
            </div>
          </IonFooter>
        </IonPage>
      )}
    </IonApp>
  );
}

export default App;
