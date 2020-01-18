import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin'

$(document).ready(() => {

    switchMenu()

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

    // eslint-disable-next-line no-restricted-globals
    if (screen.width <= 600){
        $('.nav-item').on('click', () =>{
            $('#mynav').toggleClass('active')
        })
    }
})

function switchMenu() {
    // eslint-disable-next-line no-restricted-globals
    var width = screen.width
    if(width > 600){
        $('#mynav').addClass('active')
    }else{
        $('#mynav').removeClass('active')
    }
    // console.log(width)
}