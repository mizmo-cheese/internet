// Browser - Браузер "Интернет"
var internet = __.Browser().link("https://www.google.com/search?igu=1").width("100%").height("600");
var InternetWindow = new __.Window({
  "id":"net",
  "snapbox": true,
  "closable": true,
  "height": "calc(75% - 31px)"
});

// Кнопка открытия страницы, указанной в link_address
var link_opener = __.Button().x(200).y(600);
// Адресная строка
var link_address = __.AdvancedInput().x(100).y(600);


// Функция перехода на страницу, указанную в link_address
function GoToLink() {
  internet.link(link_address.text());
}

// Привязка функции к кнопке link_opener
link_opener.on("click", GoToLink);

new __.UI(InternetWindow, link_address, internet, link_opener);
