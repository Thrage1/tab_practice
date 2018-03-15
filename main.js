var tabLinks;
var tabPanels;

window.onload = function(){
  tabLinks = document.getElementById('tabs').getElementsByTagName('li');
  tabPanels = document.getElementById('container').getElementsByTagName('div');
  displayPanel(tabLinks[0]);
  for(var i = 0; i < tabLinks.length; i++){
    tabLinks[i].onclick = function(){
      displayPanel(this);
      return false;
    };
    tabLinks[i].onfocus = function(){
      displayPanel(this);
      return false;
    };
  }
function displayPanel(tabToActivate){
  for(var j = 0; j < tabLinks.length; j++){
    if(tabLinks[j] === tabToActivate){
      tabLinks[j].classList.add("active");
      tabPanels[j].style.display = 'block';
    } else {
      tabLinks[j].classList.remove("active");
      tabPanels[j].style.display = 'none';
    }
  }
}

};
