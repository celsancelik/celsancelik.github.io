$.ajax('/sidebar.html').then(html => {
    $('#sidebar').html(html)
})

$(document).ready(ready)

function ready() {
    setTimeout(() => {
        if (location.pathname == "/")
            $('a[href="/"]').addClass('active')
        else if (location.pathname == "/tonaj.html")
            $('a[href="/tonaj.html"]').addClass('active')
            else if (location.pathname == "/rodaetiket.html")
                $('a[href="/rodaetiket.html"]').addClass('active')
    }, 50)
}
