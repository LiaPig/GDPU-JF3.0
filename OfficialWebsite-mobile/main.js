import 'babel-polyfill'
import 'normalize.css'
import 'mobi.css'
import './assets/css/common.scss'
import './assets/js/lib/swiper-4.2.2.min.js'
import $ from './assets/js/lib/jquery.min'

$(document).ready(function(){
    // 点击了头部的显示导航
    $('.jf-header-menu-more').click(function(){
        $('.jf-header-popper').slideDown('slow')
        $(this).hide()
        $('.jf-header-menu-close').show()
    });
    // 点击了头部的隐藏导航
    $('.jf-header-menu-close').click(function(){
        $('.jf-header-popper').slideUp('slow')
        $(this).hide()
        $('.jf-header-menu-more').show()
    });
    // 点击了底部的一級菜单
    $('.jf-footer-menu').click(function(){
        const index = $(this).attr('index')
        const text = $(this).children('div.jf-footer-menu-more').text()
        // 省略
        if (text === '-') {
            $(this).children('div.jf-footer-menu-more').text('+')
            $('.jf-footer-list' + index).slideUp('slow')
        }
        else if (text === '+') {
            $(this).children('div.jf-footer-menu-more').text('-')
            $('.jf-footer-list' + index).slideDown('slow')
        }
    });
});
