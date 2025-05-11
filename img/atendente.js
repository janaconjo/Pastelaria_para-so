// js/atendente.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⚙️ Configuração Firebase
const firebaseConfig = {
  apiKey: "TUA_API_KEY",
  authDomain: "TEU_DOMÍNIO",
  projectId: "TEU_PROJECT_ID",
  storageBucket: "TEU_BUCKET",
  messagingSenderId: "TEU_ID",
  appId: "TEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔄 Mostrar pedidos em tempo real
const pedidosContainer = document.getElementById("pedidos-container");
const pedidosRef = collection(db, "pedidos");

onSnapshot(pedidosRef, (snapshot) => {
  pedidosContainer.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const pedido = docSnap.data();
    const pedidoEl = document.createElement("div");
    pedidoEl.className = "pedido";

    pedidoEl.innerHTML = `
      <h3>Cliente: ${pedido.nome}</h3>
      <p><strong>Itens:</strong> ${pedido.itens}</p>
      <p><strong>Estado:</strong> ${pedido.estado}</p>
      <button onclick="atualizarEstado('${docSnap.id}', 'em andamento')">Marcar como Em Andamento</button>
      <button onclick="atualizarEstado('${docSnap.id}', 'entregue')">Marcar como Entregue</button>
      <hr/>
    `;
    pedidosContainer.appendChild(pedidoEl);
  });
});

// 🔧 Função para atualizar estado do pedido
window.atualizarEstado = async (id, novoEstado) => {
  const pedidoDoc = doc(db, "pedidos", id);
  await updateDoc(pedidoDoc, { estado: novoEstado });
};
