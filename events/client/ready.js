module.exports = {
  name: 'ready',
  once: true,
  execute (client) {
    const now = new Date()
    const date = now.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' - ' + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    console.log(`"${client.user.tag}" adı ile "${date}" tarihinde bot Aktif edildi.`)
      client.user.setActivity("V13 Boş Altyapı by TheSid#0001", "https://rapp");
  }
}
