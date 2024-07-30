const headerMain = document.getElementById("MainHeader");
fetch("/MoreAllFiles/Header.html")
  .then((Q) => Q.text())
  .then((hed) => {
    headerMain.innerHTML = hed;
    // -----------
    const LogoIcon = document.getElementById("LogoIcon");
    LogoIcon.src = "/!img/discord_logo.png";
    // -
    const DiscrodIcon = document.getElementById("DiscrodIcon");
    const logo_name = document.getElementById("logo_name");
    DiscrodIcon.href = "/index.html";
    logo_name.href = "/index.html";
    // -
    const burgerBar = document.getElementById("burgerBar");
    burgerBar.src = "/!img/burger-bar.png";
    // -
    const nav1_a1 = document.getElementById("nav1_a1");
    nav1_a1.href = "DiscrodServers/DCserver.html";
    const nav1_a2 = document.getElementById("nav1_a2");
    const nav1_a3 = document.getElementById("nav1_a3");
    // -
    const nav2_a1 = document.getElementById("nav2_a1");
    const nav2_a2 = document.getElementById("nav2_a2");
    const nav2_a3 = document.getElementById("nav2_a3");
  });
