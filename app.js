/**
 * The tab element
 * @type {Element}
 */
var tabs = document.querySelector('.js-tabs');

/**
 * All tabs items execept the one that animates the tab
 * @type {Element}
 */
var tabItems = document.querySelectorAll('.js-tab-item:not(.js-tab-item-main-control)');

/**
 * The tab element that animates the tab
 * @type {Element}
 */
var tabItemMainControl = document.querySelector('.js-tab-item-main-control');

/**
 * The background of the body
 * @type {Element}
 */
var coverBackBody = document.querySelector('.js-cover-back-body');

/**
 * The background of the tabs menu
 * @type {Element}
 */
var coverBackTabs = document.querySelector('.js-cover-back-tabs');

/*
  Trigger the animation of the tabs
    Open the tab and show all tabs items
 */
tabItemMainControl.addEventListener('click', function(){
  tabs.classList.remove('js-tabs-init');
  
  for(var i = 0; i < tabItems.length; i++){
    tabItems[i].style.animationName = 'show-tab-items';
    tabItems[i].style.animationDuration = '.8s';
    tabItems[i].style.animationTimingFunction = 'cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    tabItems[i].style.animationFillMode = 'forwards';
  }

});

/*
  Browse all tabs button
    - To change background
 */
for(var i = 0; i < tabItems.length; i++){

  tabItems[0].classList.add('js-tab-item-active');

  tabItems[i].addEventListener('click', function(){

    //Toggle the active tab item
    var tabActive = document.querySelector('.js-tab-item-active');
    tabActive.classList.remove('js-tab-item-active');
    this.classList.add('js-tab-item-active');

    //Remove the body's background
    coverBackBody.style.animationName = 'remove-background';
    coverBackBody.style.animationDuration = '1s';
    coverBackBody.style.animationTimingFunction = 'linear';
    coverBackBody.style.animationFillMode = 'forwards';

    //Remove the tabs background
    coverBackTabs.style.width = 0;

    var self = this;
    window.setTimeout(function(){

      //Change the body's background
      coverBackBody.style.animationName = 'add-background';
      coverBackBody.style.backgroundImage = 'linear-gradient(#' + self.dataset.gradientStart + ', #' + self.dataset.gradientStop + ')'; 
      coverBackBody.classList.add('js-cover-back-animate');

      //Change the tabs background
      coverBackTabs.style.backgroundColor = '#' + self.dataset.tabColor;
      coverBackTabs.style.width = '100%';


    }, 1200);
  })
}

//Initial state of the tab
tabs.classList.add('js-tabs-init');