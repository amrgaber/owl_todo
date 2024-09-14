import { Component, xml } from "@odoo/owl";
import { Search } from "./search";

export class Header extends Component {
    static template = 'header';
    static components = { Search };
    onClickLogo() {
        window.location.href = "/";
    }
}