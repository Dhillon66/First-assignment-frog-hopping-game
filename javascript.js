
    const frog = document.getElementById("frog");
    const pond = document.getElementById("pond");
    const cells = pond.children;
    let index = 0;

    document.addEventListener("keydown", (e) => {
      let row = Math.floor(index / 4);
      let col = index % 4;

      if (e.key === "ArrowRight" && col < 3) {
        index++;
      } else if (e.key === "ArrowLeft" && col > 0) {
        index--;
      } else if (e.key === "ArrowUp" && row > 0) {
        index -= 4;
      } else if (e.key === "ArrowDown" && row < 3) {
        index += 4;
      }

      const newPad = cells[index].querySelector(".pad");
      newPad.appendChild(frog);
    });
 