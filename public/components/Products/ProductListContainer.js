import { Component, useState } from "@odoo/owl";
import { ProductCategorySidebar } from "./ProductCategorySidebar";

export class ProductListContainer extends Component {
    static template = 'ProductListContainer';
    static components = {
        ProductCategorySidebar,
    }
    setup() {
        this.state = useState({
            categories: [
                { id: 1, name: 'Category 1' },
                { id: 2, name: 'Category 2' },
                { id: 3, name: 'Category 3' },
            ]
        });
    }
}