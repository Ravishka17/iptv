body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #6e48aa, #9b59b6);
  min-height: 100vh;
}

.App {
  color: white;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.main-container {
  padding: 20px;
}

.channel-list {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
}

.channel-item {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.channel-item:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  height: 80vh;
}

.video {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  animation: fadeIn 0.5s ease-in;
}

.placeholder {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
