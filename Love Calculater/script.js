const button = document.getElementById("calculate");
const result = document.getElementById("result");
const cont = document.querySelector(".container");

button.addEventListener("click", () => {
  const yourName = document.getElementById("name").value.trim();
  const partnerName = document.getElementById("pname").value.trim();

  if (!yourName || !partnerName) {
    alert("Please enter both names.");
    return;
  }

  const randomPercent = Math.floor(Math.random() * 51) + 50;

  result.classList.remove("hidden");
  result.classList.add("show");

  cont.classList.remove("container");
  cont.classList.add("hidden");

  result.innerHTML = `
    <div style="text-align:center;">
      <h1 style="font-size: 3rem; color: hotpink;">❤️ ${yourName} & ${partnerName} ❤️</h1>
      <h2 style="color: #fff;">Love Match: ${randomPercent}%</h2>
      <p style="font-size: 1.2rem; color: #eee;">Love is in the air 💖</p>
    </div>
  `;
});
