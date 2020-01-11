import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin'

$(document).ready(() => {
    $('#btn').on('click', ()=> {
        alert("Hello")
    })

    $('#mynav').mCustomScrollbar({
        theme: "minimal"
    })

    $('#dismiss, .overlay').on('click', () =>{
        // alert("Hello")
        $('#mynav').toggleClass('active')
        // $('#sidebarCollapse').toggleClass('hide')
        // $('.overlay').toggleClass('active')
    })

    $('#sidebarCollapse').on('click', function () {
        $('#mynav').toggleClass('active')
        // $('#sidebarCollapse').toggleClass('hide')

        // $('.overlay').addClass('active')

        // $('.collapse.in').toggleClass('in')

        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
})