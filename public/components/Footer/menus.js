import { Component, useState, useRef } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "MenuItem";
    setup() {
        this.menuItemRef = useRef('menuItem');
    }
    onActivateMenu(ev) {
        const menuName = ev.currentTarget.getAttribute('data-name');
        console.log(menuName);
    }
    // we can use below way in case i need to pass value to the function 
    // doStuff(ev, value) {
    //     console.log(ev, value);
    // }
}

export class Menu extends Component {
    setup() {
        this.state = useState({
            activeMenuItem: 'all',
            iconClass: 'fa-home',
            name: 'all',
            string: 'All'
        })
    }
    static template = "Menu";
    static components = { MenuItem };

}
