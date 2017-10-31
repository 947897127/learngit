let flage=true;
let slide=$('.slide');
$('.next').click(function () {
       let siblings=$('.active').index();
        add(siblings);
});
function add(index) {
    slide.eq(index).siblings().addClass("active");
    slide.eq(index).removeClass('active');
}

let banner_nav=$('.banner_nav').children('a');
let banner_item=$('.banner_item');
let t=setInterval(move,1500);
let num=0;
function move(){
    if(num<banner_item.length-1){
        num++;
        $('.news_part_wrap').eq(1).css({left:-360*num,transition:'all .5s'})
    }else {
        num=0;
        $('.news_part_wrap').eq(1).css({left:-360*num,transition:'all .5s'})
    }
    banner_nav.removeClass('on');
    banner_nav.eq(num).addClass('on')
}

function hmove() {
    banner_nav.hover(function () {
        clearInterval(t);
        let indexa=$(this).index();
        banner_nav.removeClass('on');
        banner_nav.eq(indexa).addClass('on');
        $('.news_part_wrap').eq(1).css({left:-360*indexa,transition:'all .5s'});
        num=indexa;
    },function () {
        t=setInterval(move,1500)
    })
}
hmove();
let strategy=$('.strategy_banner_wrap');
let strategya=strategy.children('a');
let banner_nava=$('.strategy_banner_nav').children();
let st=setInterval(mose,2000);
let size=0;
function mose() {
    if(size<=strategya.length-2){
        size++;
    }else {
        size=0;
    }
    $('.strategy_banner_wrap').css({transition:'all .5s',left:-368*size})
    banner_nava.removeClass('on');
    banner_nava.eq(size).addClass('on')
}
function banner_navas() {
    banner_nava.hover(function () {
        let indexb=$(this).index();
        clearInterval(st);
        banner_nava.removeClass('on');
        banner_nava.eq(indexb).addClass('on');
        $('.strategy_banner_wrap').css({left:-368*indexb,transition:'all .5s'});
        size=indexb;
    },function () {
        st=setInterval(mose,2000)
    })
}
banner_navas();



let com_taba=$('.com_taba').children('a');
let conta=$('.pingan_container').children('section');
let zhujue_tabs=$('.zhujue_tabs').children('a');
let zhujue_wrap=$('.zhujue_wrap');

function puser() {
    this.inif=function (com_taba,conta,zhujue_tabs,zhujue_wrap) {
        this.com_taba=com_taba;
        this.conta=conta;
        this.zhujue_tabs=zhujue_tabs;
        this.zhujue_wrap=zhujue_wrap;
        this.news_tab=$('.news_tab');
        this.news_list=$('.news_list');
        this.tab_item=$('.tab_item');
        this.strategy_list=$('.strategy_list');
        this.tongren1=$('.tongren1');
        this.tongren_pics_wrap=$('.tongren_pics_wrap');
    };
    this.clike=function(){
        this.animate(this.com_taba,this.conta,'active','clearfix show');
    };
    this.clices=function () {
        this.animate(this.zhujue_tabs,this.zhujue_wrap,'cur','show');
    };
    this.hove1=function () {
        this.news_tabs(this.news_tab,this.news_list,'active em',-500);
    };
    this.hove2=function(){
        this.news_tabs(this.tab_item,this.strategy_list,'',-830);
    };
    this.hove3=function(){
        this.news_tabs(this.tongren1,this.tongren_pics_wrap,'on',-1220);
    }
}
function sport() {
    puser.call(this);
    this.animate=function(a,b,c,d){
        a.click(function () {
            a.removeClass(c);
            b.removeClass(d);
            let that=a.index($(this));
            $(this).addClass(c);
            b.eq(that).addClass(d);
        })
    }.bind(this);
    this.news_tabs=function(a,b,c,d){
        a.hover(function(){
            let index=a.index($(this));
            a.removeClass(c);
            a.eq(index).addClass(c);
            b.css({transition:'all .5s',left:(d*index)});
        })
    };
}
let sports=new sport();
sports.prototype=Object.create(puser.prototype);
sports.inif(com_taba,conta,zhujue_tabs,zhujue_wrap);
sports.clike();
sports.clices();
sports.hove1();
sports.hove2();
sports.hove3();

let dt=$(document).height();
$(document).scroll(function () {
    let dtop=$(document).scrollTop();
    if(dtop>0){
        $('#top_bar').addClass('fixed');
        $('.logo').children('span').addClass('hides')
    }else{
        $('#top_bar').removeClass('fixed');
        $('.logo').children('span').removeClass('hides')
    }
});


$('.nav_item').eq(5).hover(function () {
    $('#top_bar').addClass('nav_hover');
    $('.topbar_more').addClass('show')
},function () {
    $('#top_bar').removeClass('nav_hover');
    $('.topbar_more').removeClass('show');
});


$('#NIE-topBar-news').hover(function(){
    $('#NIE-topBar-news').addClass('NIE-topBar-news-hover');
},function(){
    $('#NIE-topBar-news').removeClass('NIE-topBar-news-hover');
});

$('.close_donwloadbar').click(function () {
    $('.nie_download_wrap').addClass('fold');
    $('#nie-download').css({display:'none'});
    $('.fold_wrap').css({display:'block'});
});
$('.fold_wrap').click(function () {
    $('.nie_download_wrap').removeClass('fold');
    $('#nie-download').css({display:'block'});
    $('.fold_wrap').css({display:'none'});
});

$(".back_top").click(function(){
    var sc=$(window).scrollTop();
    $('body,html').animate({scrollTop:0},500);
});
$('#show_order_progress').click(function () {
    $('#show_order_progress').addClass('hides');
    $('#zhiliaopian_order').addClass('show');
});
$('.close_zhiliao_pop').click(function () {
    $('#show_order_progress').removeClass('hides');
    $('#zhiliaopian_order').removeClass('show');
});
window.onload = function(){
    let siblings=$('.active').index();
    add(siblings);
    $('.logo').children('span').removeClass('hides')
};