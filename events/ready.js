module.exports = (client) => {
    console.log(`Bot: ${client.user.tag}\nChannels: ${client.channels.cache.size}\nServers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}`);
    client.user.setActivity("© CraftingNetwork ⛏️", { type: "PLAYING" });
};
