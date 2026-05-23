import { io } from "socket.io-client";

const socket = io("https://caresynccare.netlify.app", {
  transports: ["websocket"], // ✅ force websocket only
  withCredentials: true
});
export default socket;