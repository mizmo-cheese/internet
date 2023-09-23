var Internet = __.Browser().link("https://www.google.com/search?igu=1").width("100%").height("100%"); // Браузер
var InternetWindow = new __.Window({ // Окно с браузером
  "id": "net", // Идентификатор
  "snapbox": true, // Кнопка развернуть окно
  "closable": true // Кнопка закрыть окно
});
__.UI(InternetWindow, Internet); // Добавить браузер в окно
