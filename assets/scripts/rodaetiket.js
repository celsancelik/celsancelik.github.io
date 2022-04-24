const labels = [];
refreshList();
function defaultLabels() {
    let customer = "Minimak"
    let orderno = "REF : BALKANLAR"
    let product = "10mm 8*19s KÖ GALV"
    let extent = 125
    let count = 25
    let newLabel = new Label(customer, orderno, product, extent, count);

    labels.push(newLabel)

    refreshList();
}


function addNewLabel() {
    let customer = $('#customer').val()
    let orderno = $('#orderno').val()
    let product = $('#product').val()
    let extent = $('#extent').val()
    let count = $('#count').val()
    let newLabel = new Label(customer, orderno, product, extent, count);

    labels.push(newLabel)

    refreshList();
}

function refreshList() {
    $('#labelsList').html('')
    labels.forEach(label => {
        $('#labelsList').append(label.getListRow())
    })
    if (labels.length == 0) {
        $('#btnPrint').hide()
    } else {
        $('#btnPrint').show()
    }
}

function removeLabel(id) {
    labels.forEach((item, i) => {
        if (item.id == id) {
            labels.splice(i, 1);
            refreshList();
            return
        }
    })
}

function Print() {
    $('#etiketler').html("");
    labels.forEach(label => {
        $('#etiketler').append(label.toHTML())
    })
    window.print();
    $('#etiketler').html("");
}

function getPrint() {
    return `<div class="d-grid gap-2"><button class="btn btn-primary" onclick="Print()" type="button">YAZDIR</button></div>`
}