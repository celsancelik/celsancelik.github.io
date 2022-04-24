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
        let str = "";
        for (let i = 0; i < this.count; i++) {
            str += 
            `<div class="etiket">
                <div class="firma">${this.customer}</div>
                <div>${this.orderno}</div>
                <div>${this.product} (${this.extent}m)</div>
            </div>`
            
        }
        return str;
    }

    getListRow(){
        return `
        <tr>
            <td>${this.customer}</td>
            <td>${this.orderno}</td>
            <td>${this.product}</td>
            <td>${this.extent}m</td>
            <td>${this.count} adet</td>
            <td><button class="btn btn-link" onclick="removeLabel(${this.id})"><i class="fa-solid fa-xmark"></i></button></td>
        </tr>`
    }
}