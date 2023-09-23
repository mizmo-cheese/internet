var inet = __.Browser().link("https://www.google.com/search?igu=1").width("100%").height("100%");
var Internet = new __.Window({
  "id": "net",
  "snapbox": true,
  "closable": true
})
var internetui = new __.UI(Internet, inet);
