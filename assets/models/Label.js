class Label{
    constructor(customer, orderno, product, extent, count){
        const d = new Date();

        this.id = d.getTime();
        this.customer = customer
        this.orderno = orderno
        this.product = product
        this.extent = extent
        this.count = count
    }

    toHTML(){
        return `<div class="etiket">
                    <div class="firma">${e.col1}</div>
                    <div>${e.col2}</div>
                </div>`
    }

    getListRow(){
        return `
        <div class="row">
            <div class="col-6">
                ${this.customer} (${this.orderno})
            </div>
            <div class="col-5">
                ${this.product} (${this.extent}m) ${this.count} adet
            </div>
            <div class="col-1">
                <button class="btn btn-link p-1" onclick="removeLabel(${this.id})"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
        `
    }
}