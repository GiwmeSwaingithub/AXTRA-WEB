
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getFirestore, collection, doc, setDoc, deleteDoc, serverTimestamp, onSnapshot, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // --- Auto-detect page identity ---
  const pageKey = location.pathname.replace(/\//g, "_") || "home";

  // --- Track current user ---
  const userId = crypto.randomUUID(); // unique per visitor
  const userDocRef = doc(db, "onlineUsers", `${pageKey}_${userId}`);

  async function joinPage() {
    await setDoc(userDocRef, { 
      page: pageKey, 
      connectedAt: serverTimestamp() 
    });
  }

  async function leavePage() {
    await deleteDoc(userDocRef).catch(()=>{}); // ignore errors
  }

  // Remove user on tab close / reload
  window.addEventListener("beforeunload", leavePage);

  // Join the page
  joinPage();

  // --- Live counter ---
  const counterEl = document.getElementById("online-count");

  // Listen to changes in the onlineUsers collection for this page
  const usersCollection = collection(db, "onlineUsers");

  const updateCounter = async () => {
    const q = query(usersCollection, where("page", "==", pageKey));
    const snapshot = await getDocs(q);
    counterEl.textContent = snapshot.size;
  };

  // Initial update
  updateCounter();

  // Real-time listener
  onSnapshot(usersCollection, snapshot => {
    const count = snapshot.docs.filter(doc => doc.data().page === pageKey).length;
    counterEl.textContent = count;
  });

  // Optional: periodically clean stale users (if they closed tab without firing beforeunload)
  setInterval(async () => {
    const now = Date.now();
    const q = query(usersCollection, where("page", "==", pageKey));
    const snapshot = await getDocs(q);
    snapshot.docs.forEach(docSnap => {
      const connectedAt = docSnap.data().connectedAt?.seconds ? docSnap.data().connectedAt.seconds * 1000 : 0;
      if (now - connectedAt > 60000) { // 1 min timeout
        deleteDoc(docSnap.ref).catch(()=>{});
      }
    });
  }, 30000);
