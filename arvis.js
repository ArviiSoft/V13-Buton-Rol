const { Client, Collection } = require('discord.js');
const fs = require('fs');
const ayarlar = require('./ayarlar.json')

const client = new Xlient({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_MEMBERS'
  ]
});

const prefix = client.ayarlar.prefix;

fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var cmd = require(`./commands/${file}`);
        client.commands.set(cmd.name, cmd);
    });
});

client.on('interactionCreate', async (i) => {
  if (!i.isButton()) return;

  if (i.customId == "arol1") {
    const rol1 = ayarlar.arol1;
    if (!i.member.roles.cache.has(rol1)) {
      i.member.roles.add(rol1);
      return i.reply({ content: 'Rollerin Başarıyla Güncellendi', ephemeral: true });
    } else {
      client.on('messageCreate', async (message) => {
        client.events.get('messageCreae').execute(client, message, prefix)
      });
      i.member.roles.remove(rol1);
      return i.reply({ content: 'Aldığın Rol Kaldırıldı', ephemeral: true });
    }

    } else if (i.customId == "arol2") {
  const rol2 = ayarlar.arol2;
  if (!i.member.roles.cache.has(rol2)) {

      i.member.roles.add(rol2);
      return i.reply({ content: 'Rollerin Başarıyla Güncellendi', ephemeral: true });
    } else {
      i.member.roles.remove(rol2);
      return i.reply({ content: 'Aldığın Rol Kaldırıldı.', ephemeral: true });
    }

      } else if (i.customId == "arol3") {
      return i.reply({ content: 'https://discord.gg/3AfAFE5qYg', ephemeral: true });
    
  }
});



client.on('ready', async () => 
  console.log(`[AKTİF] ${client.user.tag}`));

client.login(client.ayarlar.token);
