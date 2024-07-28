const main = document.getElementById("main");
const main_div = document.getElementById("main_div");

// Fetching data from Discord API
fetch("https://discord.com/api/guilds/1263226066768756787/widget.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    // Rendering users
    const renderUsers = (members) => {
      main_div.innerHTML = ""; 
      members.forEach((member) => {
        const user_div = document.createElement("div");
        user_div.classList.toggle(checkRole(member.username));

        const user_div_avatar = document.createElement("div");
        const user_div_avatar_img = document.createElement("img");
        user_div_avatar_img.classList.add("avatar");
        user_div_avatar_img.setAttribute("src", member.avatar_url);

        const name = document.createElement("h1");
        name.classList.add("name_h1");
        name.innerHTML = member.username;

        const status = document.createElement("h2");
        status.classList.add("status_h2");
        status.classList.toggle(statusColor(member.status));
        status.innerHTML = `<h6 class="span_role">status:</h6>${member.status}`;

        const server_name_h3 = document.createElement("h3");
        server_name_h3.classList.add("server_name_h3");

        const server_name_h3_a = document.createElement("a");
        server_name_h3_a.setAttribute("href", user.instant_invite);
        server_name_h3_a.innerHTML = user.name;

        const roles = document.createElement("h3");
        roles.classList.add("roles");
        roles.innerHTML = `<h5 class="span_role">ROLE:</h5> ${getRoleName(checkRole(member.username))}`;

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

    // Determine status color
    const statusColor = (status) => {
      if (status === "online") {
        return "status_h2_online";
      } else if (status === "idle") {
        return "status_h2_idle";
      } else {
        return "status_more";
      }
    };

    // Check user role
    const checkRole = (username) => {
      if (username.toUpperCase() === "MAR" || username.toUpperCase() === "VIN") {
        return "admin";
      } else if (username.toUpperCase() === "SOTK") {
        return "owner";
      } else if (
        username.toUpperCase() === "TICKET TOOL" ||
        username.toUpperCase() === "DYNO" ||
        username.toUpperCase() === "OWO" ||
        username.toUpperCase() === "ARCANE" ||
        username.toUpperCase() === "ROWHOIS"
      ) {
        return "BOT";
      } else {
        return "userDiv";
      }
    };

    // Get role name
    const getRoleName = (role) => {
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

    // Render users initially
    renderUsers(user.members);

    // Check local storage for bot visibility preference
    const button1_bt = document.getElementById("button1_bt");
    const showBots = localStorage.getItem("showBots") === "true";
    button1_bt.checked = showBots;

    const filterAndRenderUsers = () => {
      const showBots = button1_bt.checked;
      localStorage.setItem("showBots", showBots);

      let membersToShow;
      if (showBots) {
        membersToShow = user.members;
      } else {
        membersToShow = user.members.filter((member) => {
          return (
            member.username !== "Dyno" &&
            member.username !== "Arcane" &&
            member.username !== "OwO" &&
            member.username !== "RoWhoIs" &&
            member.username !== "Ticket Tool"
          );
        });
      }

      const uniqueUsers = new Map();
      const filteredUsers = membersToShow.filter((member) => {
        if (!uniqueUsers.has(member.username)) {
          uniqueUsers.set(member.username, true);
          return true;
        }
        return false;
      });

      renderUsers(filteredUsers);
    };

    // Render users based on preference
    filterAndRenderUsers();

    // Toggle button click event
    button1_bt.onclick = filterAndRenderUsers;
  });

// Toggle burger bar
function toggleBurgerBar() {
  const nav_2_id = document.getElementById("nav_2_id");
  nav_2_id.classList.add("nav_2_show");
  nav_2_id.classList.toggle("nav_2_none");
}

// Show settings
function showSetting() {
  const settingDiv4 = document.getElementById("setting_div_4");
  settingDiv4.classList.add("setting_div_4_show");
  settingDiv4.classList.toggle("setting_div_4_none");
}
