import { Component, useRef } from "@odoo/owl";

export class ProductCategorySidebar extends Component {
    static template = 'ProductCategorySidebar';
    setup() {
        this.category_element = useRef('category_element');
    }

    onClickCategory(event) {
        console.log('onClickCategory', event);
    }

}