var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)'
// this is the way to set the color in JS

mainEl.innerHTML = '<h1>SEI ROCKS</h1>'



mainEl.classList.add('flex-ctr')

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');


for (link of menuLinks) {
    let newAnchor = document.createElement('a')
    newAnchor.setAttribute('href', link['href'])
    newAnchor.textContent = link['text']
    topMenuEl.appendChild(newAnchor)
}

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

const topMenuLinks = document.querySelectorAll('#top-menu a');

const showingSubMenu = false;
topMenuEl.addEventListener('click', handleClick);



let handleClick = (event) => { 
  event.preventDefault();
  
  if(event.target.tagName != 'A') {
    return;} 
   if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
  topMenuLinks.forEach(element => {
    element.classList.remove('active')
  });
  if(event.target) {
    event.target.classList.add('active');
    
    topMenuLinks.forEach(element => {

      if(element.subLinks){showingSubMenu = true;}
      else{showingSubMenu = false;}
      
    });

    if(showingSubMenu === true){
      buildSubMenu(topMenuEl.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = 0;
    }
  }

   let buildSubMenu = (links) => {
    subMenuEl.innerHTML = "";
    links.forEach (element => {
      const newA = links.createElement('a');
      newA.setAttribute('href', element.href);
      newA.textContent = element.text;
      subMenuEl.appendChild(newA);

});
};

}






//we use the key word defer to make it load if you put it 