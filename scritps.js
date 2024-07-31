const headerMain = document.getElementById("MainHeader");
fetch("MoreAllFiles/Header.html")
  .then((Q) => Q.text())
  .then((hed) => {
    headerMain.innerHTML = hed;
    // -----------
    const LogoIcon = document.getElementById("LogoIcon");
    LogoIcon.src = "!img/discord_logo.png";
    // -
    const DiscrodIcon = document.getElementById("DiscrodIcon");
    const logo_name = document.getElementById("logo_name");
    DiscrodIcon.href = "index.html";
    logo_name.href = "index.html";
    // -
    const burgerBar = document.getElementById("burgerBar");
    burgerBar.src = "!img/burger-bar.png";
    // -
    const nav1_a1 = document.getElementById("nav1_a1");
    nav1_a1.href = "DiscrodServers/DCserver.html";
    const nav1_a2 = document.getElementById("nav1_a2");
    const nav1_a3 = document.getElementById("nav1_a3");
    // -
    const nav2_a1 = document.getElementById("nav2_a1");
    nav2_a1.href = "DiscrodServers/DCserver.html";
    const nav2_a2 = document.getElementById("nav2_a2");
    const nav2_a3 = document.getElementById("nav2_a3");
  });

fetch("https://discord.com/api/guilds/1267900170146943056/widget.json")
  .then((Q) => Q.json())
  .then((user) => {
    const discord_card_head = document.getElementById("discord_card_head");
    const userImg = document.createElement("img");
    const image = user.members[0].avatar_url;
    const name = document.getElementById("name");
    const play = document.getElementById("play");
    const nnm = user.members[0].username;

    //---
    localStorage.setItem("images", image);
    localStorage.setItem("names", nnm);
    const localSave = () => {
      if (
        user.members[0].status == "online" ||
        user.members[0].status == "idle" ||
        user.members[0].status == "dnd"
      ) {
        if (!localStorage.getItem("images") || !localStorage.getItem("names")) {
          localStorage.setItem("images", image);
          localStorage.setItem("names", nnm);
          // -
          name.innerHTML = localStorage.getItem("names");
          // -
          discord_card_head.appendChild(userImg);
        }
        userImg.setAttribute("src", localStorage.getItem("images"));
        // -
        discord_card_head.appendChild(userImg);
        // -
        name.innerHTML = localStorage.getItem("names");
      } else {
        userImg.setAttribute("src", "!img/pfp.png");
        // -
        discord_card_head.appendChild(userImg);
        // -
        name.innerHTML = "𝔇𝔞𝔗𝔬_7";
      }
    };
    //---
    localSave();
    // ---
    const p = () => {
      if (
        user &&
        user.members &&
        user.members[0] &&
        user.members[0].game &&
        user.members[0].game.name
      ) {
        return `playing: ${user.members[0].game.name}`;
      } else {
        return "";
      }
    };
    //---
    play.innerHTML = p();
    //---

    if (user.members[0].status == "online") {
      userImg.classList.add("img_online");
    } else if (user.members[0].status == "idle") {
      userImg.classList.add("img_idle");
    } else {
      userImg.classList.add("img_dnd");
    }
  });
