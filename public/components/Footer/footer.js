import { Component } from "@odoo/owl";
import { Menu } from "./menus";

export class Footer extends Component {
    static template = "Footer";
    static components = { Menu };
}