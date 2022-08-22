const btnSelects = document.querySelectorAll(".btn-select");
const players = document.querySelectorAll(".player");

const selectedPlayerList = document.getElementById("orderList");

let PlayerCount = 0;

for (const selectBtn of btnSelects) {
  selectBtn.addEventListener("click", (inner) => {
    PlayerCount++;
    if (PlayerCount > 5) {
      alert("You can selected only five player ");
    } else {
      const selectedPlayer = SelectedPlayer(inner);
      selectedPlayerList.appendChild(selectedPlayer);
      inner.target.style.backgroundColor = "yellow";
      inner.target.style.color = "red";
      inner.target.disabled = true;
    }
  });
}

function SelectedId(inner) {
    return inner.target.parentElement.firstElementChild.innerText;
  }
  
  function SelectedPlayer(inner) {
    const playerName = SelectedId(inner);
    let player = document.createElement("li");
    player.classList.add("text-red-400" );
    player.innerText = playerName;
    return player;
  }

  const playerAll = document.getElementById("cal-input");
  const calBtn = document.getElementById("cal-btn");
  const  expensisAll = document.getElementById("expensis");

calBtn.addEventListener("click", (inner) => {
    if (playerAll.value == "" || PlayerCount === 0) {
      alert("Enter any player ");
    } else {
      const perPlayerExpense =+ playerAll.value;
      let expense =
        PlayerCount > 5 
        ? 5 * perPlayerExpense
          : PlayerCount * perPlayerExpense;
          expensisAll.innerText = `${expense}`;
    }
  });
  
