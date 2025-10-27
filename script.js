:root {
  --bg: #f9f7fb;
  --text: #2e2e2e;
  --card: rgba(255, 255, 255, 0.9);
  --accent: #c7a4ff;
}

body.dark {
  --bg: #1a1a1a;
  --text: #f0f0f0;
  --card: rgba(40, 40, 40, 0.9);
  --accent: #d9a8ff;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.container {
  text-align: center;
  width: 90%;
  max-width: 420px;
}

h1 {
  margin-bottom: 1rem;
  color: var(--accent);
}

.card {
  background: var(--card);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid var(--accent);
  border-radius: 10px;
  margin-top: 5px;
  outline: none;
  background: transparent;
  color: var(--text);
}

button {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s ease, background 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background: #b480ff;
}

#result {
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
}

footer {
  margin-top: 25px;
  font-size: 0.9rem;
}

footer a {
  color: var(--accent);
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
}

footer a:hover {
  text-decoration: underline;
}

/* Dark/Light Toggle Switch */
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

#switch {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  width: 50px;
  height: 26px;
  background: var(--accent);
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

#switch:checked + label {
  background: #666;
}

#switch:checked + label:after {
  left: calc(100% - 3px);
  transform: translateX(-100%);
}
