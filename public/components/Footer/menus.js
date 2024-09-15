import { Component, useState, useRef } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "MenuItem";
    setup() {
        this.menuItemRef = useRef('menuItem');
    }
    onActivateMenu(ev) {
        const menuName = ev.currentTarget.getAttribute('data-name');
        const customEvent = new CustomEvent("menu-changed", { bubbles: true, detail: { activeMenuItem: menuName } });
        this.menuItemRef.el.dispatchEvent(customEvent);
        console.log(menuName, customEvent);
        this.env.bus.trigger('change_active_menu', { activeMenuItem: menuName });
    }
}

export class Menu extends Component {
    static template = "Menu";
    static components = { MenuItem };
    setup() {
        this.state = useState({ activeMenuItem: this.props.activeMenuItem })
        console.log('test state', this.state.activeMenuItem);
    }
    onMenuChanged(ev) {
        this.state.activeMenuItem = ev.detail.activeMenuItem;
        console.log('test onMenuChanged', ev.detail.activeMenuItem);
    }
}
