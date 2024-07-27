const main = document.getElementById("main");
const main_div = document.getElementById("main_div");

fetch("https://discord.com/api/guilds/1263226066768756787/widget.json")
  .then(function (json) {
    return json.json();
  })
  .then(function (user) {
    const renderUsers = (members) => {
      main_div.innerHTML = ""; // Clear previous users
      members.forEach((member) => {
        const user_div = document.createElement("div");
        user_div.classList.toggle(name_checker(member.username));
        const user_div_avatar = document.createElement("div");
        const user_div_avatar_img = document.createElement("img");
        user_div_avatar_img.classList.add("avatar");
        const name = document.createElement("h1");
        name.classList.add("name_h1");
        const status = document.createElement("h2");
        status.classList.add("status_h2");
        status.classList.toggle(statusColor(member.status));
        const server_name_h3 = document.createElement("h3");
        server_name_h3.classList.add("server_name_h3");
        const server_name_h3_a = document.createElement("a");
        server_name_h3_a.setAttribute("href", user.instant_invite);
        const roles = document.createElement("h3");
        roles.classList.add("roles");

        user_div_avatar_img.setAttribute("src", member.avatar_url);
        name.innerHTML = member.username;
        status.innerHTML = `<h6 class="span_role">status:</h6>${member.status}`;
        server_name_h3_a.innerHTML = user.name;
        roles.innerHTML = `<h5 class="span_role">ROLE:</h5> ${name_role(
          name_checker(member.username)
        )}`;

        user_div.appendChild(server_name_h3);
        server_name_h3.appendChild(server_name_h3_a);
        main_div.appendChild(user_div);
        user_div.appendChild(user_div_avatar);
        user_div_avatar.appendChild(user_div_avatar_img);
        user_div.appendChild(name);
        user_div.appendChild(status);
        user_div.appendChild(roles);
      });
    };

    const statusColor = (statusW) => {
      if (statusW == "online") {
        return "status_h2_online";
      } else if (statusW == "idle") {
        return "status_h2_idle";
      } else {
        return "status_more";
      }
    };

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

    renderUsers(user.members);

    const button1_bt = document.getElementById("button1_bt");
    button1_bt.onclick = function () {
      const showBots = button1_bt.checked;
      let membersToShow;

      if (showBots) {
        membersToShow = user.members;
      } else {
        membersToShow = user.members.filter((user) => {
          return (
            user.username !== "Dyno" &&
            user.username !== "Arcane" &&
            user.username !== "OwO" &&
            user.username !== "RoWhoIs" &&
            user.username !== "Ticket Tool"
          );
        });
      }

      const uniqueUsers = new Map();
      const filteredUsers = membersToShow.filter((user) => {
        if (!uniqueUsers.has(user.username)) {
          uniqueUsers.set(user.username, true);
          return true;
        }
        return false;
      });

      renderUsers(filteredUsers);
    };
  });

function toggleBurgerBar() {
  nav_2_id.classList.add("nav_2_show");
  nav_2_id.classList.toggle("nav_2_none");
}
function showSetting() {
  const settingDiv4 = document.getElementById("setting_div_4")

  settingDiv4.classList.add("setting_div_4_show");
  settingDiv4.classList.toggle("setting_div_4_none")
}
