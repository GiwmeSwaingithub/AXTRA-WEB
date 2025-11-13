// counter.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getFirestore, collection, doc, setDoc, deleteDoc, serverTimestamp, onSnapshot, query, getDocs, where 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// --- Firebase config ---
const firebaseConfig = {
  apiKey: "AIzaSyCQyeO6ncD1i5KRinpdnMwLMi6qvEjsUW4",
  authDomain: "imager-7d993.firebaseapp.com",
  projectId: "imager-7d993",
  storageBucket: "imager-7d993.firebasestorage.app",
  messagingSenderId: "291447920395",
  appId: "1:291447920395:web:fed65daa2871e0986ab40e",
  measurementId: "G-RY08F5KZXN"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Config ---
const BASE_COUNT = 40000;       // Starting counter
const ONLINE_TIMEOUT = 60000;   // ms, 1 minute window for “online” users

// --- Auto-detect page identity ---
const pageKey = location.pathname.replace(/\//g, "_") || "home";

// --- Track current user ---
const userId = crypto.randomUUID();
const userDocRef = doc(db, "onlineUsers", `${pageKey}_${userId}`);

async function joinPage() {
  await setDoc(userDocRef, { page: pageKey, connectedAt: serverTimestamp() });
}

async function leavePage() {
  await deleteDoc(userDocRef).catch(() => {});
}

window.addEventListener("beforeunload", leavePage);
joinPage();

// --- Counter element ---
const counterEl = document.getElementById("online-count");

// --- Update counter based on “online” users ---
async function updateCounter() {
  const q = query(collection(db, "onlineUsers"), where("page", "==", pageKey));
  const snapshot = await getDocs(q);
  const now = Date.now();

  const liveCount = snapshot.docs.filter(doc => {
    const data = doc.data();
    const connectedAt = data.connectedAt?.seconds ? data.connectedAt.seconds * 1000 : 0;
    return now - connectedAt < ONLINE_TIMEOUT;
  }).length;

  counterEl.textContent = BASE_COUNT + liveCount;
}

// Initial update
updateCounter();

// Real-time listener
onSnapshot(collection(db, "onlineUsers"), snapshot => {
  const now = Date.now();
  const liveCount = snapshot.docs.filter(doc => {
    const data = doc.data();
    if (data.page !== pageKey) return false;
    const connectedAt = data.connectedAt?.seconds ? data.connectedAt.seconds * 1000 : 0;
    return now - connectedAt < ONLINE_TIMEOUT;
  }).length;

  counterEl.textContent = BASE_COUNT + liveCount;
});

// Periodically clean stale users
setInterval(async () => {
  const q = query(collection(db, "onlineUsers"), where("page", "==", pageKey));
  const snapshot = await getDocs(q);
  const now = Date.now();

  snapshot.docs.forEach(docSnap => {
    const connectedAt = docSnap.data().connectedAt?.seconds ? docSnap.data().connectedAt.seconds * 1000 : 0;
    if (now - connectedAt > ONLINE_TIMEOUT) {
      deleteDoc(docSnap.ref).catch(() => {});
    }
  });
}, ONLINE_TIMEOUT / 2);
