const searchicon1 = document.queryselector('#searchicon1');
const srchicon1 = document.queryselector('#srchicon1');
const search1 = document.queryselector('#searchinput1');

searchicon.addEventlistener('click', function(){
    search1.style.display = 'flex';
    search1.style.display = 'none';
})

const searchicon2 = document.queryselector('#searchicon2');
const srchicon2 = document.queryselector('#srchicon2');
const search2 = document.queryselector('#searchinput2');

searchicon2.addEventlistener('click', function(){
    search2.style.display = 'flex';
    search22.style.display = 'none';
})

const bar = document.queryselector('.fa-bars');
const cross = document.queryselector('#hdcross');
const headerbar = document.queryselector('.headerbar');

bar.addEventlistener('click', function(){
    setTimeout(()->{
        cross,style,display = 'block',
},200);
    headerbar.style.right = '01';

})

cross.addEventlistener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
}) 