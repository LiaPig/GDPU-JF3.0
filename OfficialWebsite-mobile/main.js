import 'babel-polyfill'
import 'normalize.css'
import 'mobi.css'
import './assets/css/common.scss'
import './assets/js/lib/swiper-4.2.2.min.js'
import $ from './assets/js/lib/jquery.min'

$(document).ready(function(){
    $('.jf-header-menu-more').click(function(){
        $('.jf-header-popper').slideDown('slow');
        $(this).hide();
        $('.jf-header-menu-close').show();
    });
    $('.jf-header-menu-close').click(function(){
        $('.jf-header-popper').slideUp('slow');
        $(this).hide();
        $('.jf-header-menu-more').show();
    });
});
