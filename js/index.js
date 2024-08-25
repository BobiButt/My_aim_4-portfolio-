const show = ()=>{
    
    const nav = document.getElementById('nav_div');
    const ul1 = document.getElementById('nav_list');
    const ul2 = document.getElementById('nav_icon');

    nav.classList.toggle('show');
    ul1.classList.toggle('open');
    ul2.classList.toggle('display');

}