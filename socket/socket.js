import { io } from "socket.io-client";

const socket = io("https://caresync-backend-production-e316.up.railway.app", {
  transports: ["websocket"], // ✅ force websocket only
  withCredentials: true
});
export default socket;