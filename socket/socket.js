import { io } from "socket.io-client";

const socket = io("https://frontend-caresync.vercel.app", {
  transports: ["websocket"], // ✅ force websocket only
  withCredentials: true
});
export default socket;