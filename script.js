:root {
  --bg-light: #fdf6f9;
  --bg-dark: #1c1c1c;
  --text-light: #222;
  --text-dark: #f5f5f5;
  --accent: #e6a5c2;
  --card-light: #fff;
  --card-dark: #2a2a2a;
  --button-bg: #e6a5c2;
  --button-hover: #d27da8;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  transition: background-color 0.3s, color 0.3s;
}

.container {
  width: 90%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.card {
  background-color: var(--card-light);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.card label {
  display: block;
  margin: 10px 0 5px;
  font-weight: 500;
}

.card input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
}

button {
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--button-bg);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--button-hover);
}

#result {
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

footer {
  margin-top: 1rem;
  font-size: 0.9rem;
}

footer a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* 🌙 Dark mode */
.dark-mode {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

.dark-mode .card {
  background-color: var(--card-dark);
}

.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

.theme-toggle input {
  width: 0;
  height: 0;
  visibility: hidden;
}

.theme-toggle label {
  display: block;
  width: 50px;
  height: 26px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.theme-toggle label::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.theme-toggle input:checked + label {
  background-color: var(--accent);
}

.theme-toggle input:checked + label::after {
  left: calc(100% - 3px);
  transform: translateX(-100%);
}
