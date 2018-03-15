var tabLinks;
var tabPanels;

window.onload = function(){
  tabLinks = document.getElementById('tabs').getElementsByTagName('li');
  tabPanels = document.getElementById('container').getElementsByTagName('div');
  displayPanel(tabLinks[0]);
  for(var i = 0; i < tabLinks.length; i++){
    tabLinks[i].onclick = function(){
      displayPanel(this);
    };
  }
function displayPanel(tabToActivate){

}

};
