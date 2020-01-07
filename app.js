$(document).ready(function(){
  $('#tabs li a:not(:first)').addClass('inactive');
  $('.container').hide();
  $('.container:first').show();
      
  $('#tabs li a').click(function(){
      var t = $(this).attr('id');
    if($(this).hasClass('inactive')){ //this is the start of our condition 
      $('#tabs li a').addClass('inactive');           
      $(this).removeClass('inactive');
      
      $('.container').hide();
      $('#'+ t + 'C').fadeIn('slow');
   }
  });
    $('.sidenav').sidenav({
        edge: 'left',
        draggable: true
    });
  });
  
  /*        <ul class="tabs">
            <li class="tab col"><a href="#html5"><img src="https://via.placeholder.com/60x60?text=מיתוג" alt=""></a></li>
            <li class="tab col"><a href="#css3"><img src="https://via.placeholder.com/60x60?text=פלייר" alt=""></a></li>
            <li class="tab col"><a class="active" href="#md_css"><img src="https://via.placeholder.com/60x60?text=כ. ביקור" alt=""></a></li>
            <li class="tab col"><a href="#bootstrap_4"><img src="https://via.placeholder.com/60x60?text=לוגו" alt=""></a></li>
        </ul>
          
        <div id="html5" class="col s12">
            <h3>HTML5 Tutorial</h3>
        </div>
        <div id="css3" class="col s12">
            <h3>CSS3 Tutorial</h3>
        </div>
        <div id="md_css" class="col s12">
            <h3>Materialize CSS Tutorial</h3>
        </div>
        <div id="bootstrap_4" class="col s12">
            <h3>Bootstrap 4 Tutorial</h3>
        </div>    
        */

const HOME = { template: `
<div class="row">
   

<ul class="tabs-container space-around">
  <li class="tab-item">1</li>
  <li class="tab-item">2</li>
  <li class="tab-item">3</li>
  <li class="tab-item">4</li>
  <li class="tab-item">5</li>
</ul>

         

 
</div>

    </div>`}
    const MITUG = { template: `
    <div class="row">
    <h1 class="center">מיתוג</h1> 

    <ul class="tabs-container space-around">
  <li class="tab-item">1</li>
  <li class="tab-item">2</li>
  <li class="tab-item">3</li>
  <li class="tab-item">4</li>
  <li class="tab-item">5</li>
</ul>

</div>
    `}
const PHOTOSHOP = { template: `
<div class="row">
  <h1 class="center">פוטושופ</h1> 

  <ul class="tabs-container space-around">
    <li class="tab-item">1</li>
    <li class="tab-item">2</li>
    <li class="tab-item">3</li>
    <li class="tab-item">4</li>
    <li class="tab-item">5</li>
  </ul>

</div>
` }
const IMUD = { template: `
<div class="row">
<h1 class="center">עימוד</h1> 

<ul class="tabs-container space-around">
  <li class="tab-item">1</li>
  <li class="tab-item">2</li>
  <li class="tab-item">3</li>
  <li class="tab-item">4</li>
  <li class="tab-item">5</li>
</ul>

</div>

` }
const PIRSUM = { template: `
<div class="row">
<h1 class="center">פירסום</h1> 

<ul class="tabs-container space-around">
  <li class="tab-item">1</li>
  <li class="tab-item">2</li>
  <li class="tab-item">3</li>
  <li class="tab-item">4</li>
  <li class="tab-item">5</li>
</ul>

</div>

`}
// const LINK1 = { template: '<h1>LINK1</h1>' }
// const LINK2 = { template: '<h1>LINK2</h1>' }

const routes = [
  { path: '/', component: HOME},
    { path: '/mitug', component: MITUG},
    { path: '/photoshop', component: PHOTOSHOP},
    { path: '/imud', component: IMUD},
    { path: '/pirsum', component: PIRSUM},
    
//    { path: '/link1', component: LINK1},
//    { path: '/link2', component: LINK2}
]


const router = new VueRouter({
    routes // short for `routes: routes`
  })


new Vue ({
    router,
    el: '#app',
    data: {
        mess: 'My Portfolio on Vue'
    }
}).$mount('#app')

