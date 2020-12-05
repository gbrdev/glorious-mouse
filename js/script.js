var navMenuDiv = document.getElementById('nav-content');
var navMenu = document.getElementById('nav-toggle');
document.onclick = check;
function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  //Drop menu principal
  if (!checkParent(target, navMenuDiv)) {
    // clicar no menu
    if (checkParent(target, navMenu)) {
      // clickar no link abre ->
      if (navMenuDiv.classList.contains('hidden')) {
        navMenuDiv.classList.remove('hidden');
      } else {
        navMenuDiv.classList.add('hidden');
      }
    } else {
      // se ele clicar fora do drop o menu vai se fechar
      navMenuDiv.classList.add('hidden');
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}
