const main = document.getElementById("main");
const main_div = document.getElementById("main_div");
fetch("https://discord.com/api/guilds/1263226066768756787/widget.json")
  .then(function (json) {
    return json.json();
  })
  .then(function (user) {
    // -----------------------------------------------------------------------------------------------
    const statusColor = (statusW) => {
      if (statusW == "online") {
        return "status_h2_online";
      } else if (statusW == "idle") {
        return "status_h2_idle";
      } else {
        return "status_more";
      }
    };
    // -----------------------------------------------------------------------------------------------
    const name_checker = (Name) => {
      if (Name.toUpperCase() == "MAR" || Name.toUpperCase() == "VIN") {
        return "admin";
      } else if (Name.toUpperCase() == "SOTK") {
        return "owner";
      } else if (
        Name.toUpperCase() == "TICKET TOOL" ||
        Name.toUpperCase() == "DYNO" ||
        Name.toUpperCase() == "OWO" ||
        Name.toUpperCase() == "ARCANE" ||
        Name.toUpperCase() == "ROWHOIS"
      ) {
        return "BOT";
      } else {
        return "userDiv";
      }
    };
    // -----------------------------------------------------------------------------------------------

    const name_role = (role) => {
      if (role === "admin") {
        return "🔥★Administrator★";
      } else if (role === "owner") {
        return "👑★Owner★";
      } else if (role === "BOT") {
        return "🤖BOT";
      } else {
        return "member";
      }
    };
    // -----------------------------------------------------------------------------------------------
    for (let i = 0; i < user.members.length; i++) {
      // -----------------------------------------------------------------------------------------------
      const user_div = document.createElement("div");
      user_div.classList.toggle(name_checker(user.members[i].username));
      const user_div_avatar = document.createElement("div");
      const user_div_avatar_img = document.createElement("img");
      user_div_avatar_img.classList.add("avatar");
      const name = document.createElement("h1");
      name.classList.add("name_h1");
      const status = document.createElement("h2");
      status.classList.add("status_h2");
      status.classList.toggle(statusColor(user.members[i].status));
      const server_name_h3 = document.createElement("h3");
      server_name_h3.classList.add("server_name_h3");
      const server_name_h3_a = document.createElement("a");
      server_name_h3_a.setAttribute("href", user.instant_invite);
      const roles = document.createElement("h3");
      roles.classList.add("roles");
      // -----------------------------------------------------------------------------------------------
      const usrNum = user.members[i];
      user_div_avatar_img.setAttribute("src", usrNum.avatar_url);
      name.innerHTML = user.members[i].username;
      status.innerHTML = `<h6 class="span_role">status:</h6>${user.members[i].status}`;
      server_name_h3_a.innerHTML = user.name;
      roles.innerHTML = `<h5 class="span_role">ROLE:</h5> ${name_role(
        name_checker(user.members[i].username)
      )}`;
      // -----------------------------------------------------------------------------------------------
      user_div.appendChild(server_name_h3);
      server_name_h3.appendChild(server_name_h3_a);
      main_div.appendChild(user_div);
      user_div.appendChild(user_div_avatar);
      user_div_avatar.appendChild(user_div_avatar_img);
      user_div.appendChild(name);
      user_div.appendChild(status);
      user_div.appendChild(roles);
    }
    // -----------------------------------------------------------------------------------------------
  });
function toggleBurgerBar() {
  nav_2_id.classList.add("nav_2_show");
  nav_2_id.classList.toggle("nav_2_none");
}
// -----------------------------------------------------------------------------------------------
