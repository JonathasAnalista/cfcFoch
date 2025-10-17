// Configurações globais da plataforma (uso opcional)
window.LEGMASTER_CONFIG = Object.assign(
  {
    FREE_UNLOCK_INDEX: 1,
    QUESTOES_TOTAL: 30,
    API_BASE: "", // ex.: https://seu-backend-publico (deixe vazio se backend estiver no mesmo domínio)
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyC0ogUAaVAg6rF3CDPmdHarG28kN6JfNKk",
      authDomain: "cfcfoch.firebaseapp.com",
      projectId: "cfcfoch",
      storageBucket: "cfcfoch.firebasestorage.app",
      messagingSenderId: "140131531161",
      appId: "1:140131531161:web:9067c2e3ecc051ef2dfb08",
      measurementId: "G-HFRL78LSJY"
    },
  },
  window.LEGMASTER_CONFIG || {}
);
