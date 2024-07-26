const main = document.getElementById("main");
const main_div = document.getElementById("main_div");
fetch("https://discord.com/api/guilds/1263226066768756787/widget.json")
  .then(function (json) {
    return json.json();
  })
  .then(function (user) {
    console.log(user);
    const statusColor = (statusW) => {
      if (statusW == "online") {
        return "status_h2_online";
      } else if (statusW == "idle") {
        return "status_h2_idle";
      } else {
        return "more";
      }
    };

    for (let i = 0; i <= user.members.length; i++) {
      //////////////////////////////////////////////
      const user_div = document.createElement("div");
      user_div.classList.add("userDiv");
      const user_div_avatar = document.createElement("div");
      const user_div_avatar_img = document.createElement("img");
      user_div_avatar_img.classList.add("avatar");
      const name = document.createElement("h1");
      name.classList.add("name_h1");
      const status = document.createElement("h2");
      status.classList.add("status_h2");
      status.classList.toggle(statusColor(user.members[i].status));
      //////////////////////////////////////////////
      const usrNum = user.members[i];
      user_div_avatar_img.setAttribute("src", usrNum.avatar_url);
      name.innerHTML = user.members[i].username;

      status.innerHTML = user.members[i].status;
      //////////////////////////////////////////////
      main_div.appendChild(user_div);
      user_div.appendChild(user_div_avatar);
      user_div_avatar.appendChild(user_div_avatar_img);
      user_div.appendChild(name);
      user_div.appendChild(status);
    }
    ///////////////////////////////////////////////
  });
