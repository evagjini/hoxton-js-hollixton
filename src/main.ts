import './style.css'

let state = {

}



  




function renderHeader(){


  let appEl= document.querySelector('#app')
  if(!appEl) return
  appEl.textContent = ''
  
  //       <nav>
  //         <ul class="header-nav-list">
  //           <li class="header-nav-item"> Girls</li>
  //           <li class="header-nav-item"> Guys</li>
  //           <li class="header-nav-item"> Sale</li>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div class="header-right">
  //       <nav>
  //         <ul class="header-nav-list">
  //           <li class="header-nav-item"><span class="material-symbols-outlined">
  //             search
  //             </span></li>
  //           <li class="header-nav-item"><span class="material-symbols-outlined">
  //             person
  //             </span></li>
  //           <li class="header-nav-item"><span class="material-symbols-outlined">
  //             shopping_bag
  //             </span></li>
  //         </ul>
  //       </nav>
  //     </div>
  //     </header>
  let headerEl= document.createElement('header')

  let headerleftEl= document.createElement('div')
  headerleftEl.className= "header-left"
  

  let headerLogoEl= document.createElement('h1')
  headerLogoEl.className= "header-logo"
  headerLogoEl.textContent= "HOLLIXTON"


  let navHeaderLeft= document.createElement('nav')


  let ulHeaderLeft= document.createElement('ul')
  ulHeaderLeft.className="header-nav-list"

  let liHeaderEl = document.createElement('li')
  liHeaderEl.className= "header-nav-item"
  // liHeaderEl.textContent= 'Girls', 'Guys','Sales'





  appEl.appendChild(headerEl)
  headerEl.append(headerleftEl)
  headerleftEl.append(headerLogoEl, navHeaderLeft)
  navHeaderLeft.append(ulHeaderLeft)
  ulHeaderLeft.append(liHeaderEl)


}

renderHeader()
