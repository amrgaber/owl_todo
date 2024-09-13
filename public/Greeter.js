import { Component, useState } from "@odoo/owl";
export class Greeter extends Component {
    static template = "Greeter";
    setup() {
        this.state = useState({ word: 'Hello' });
    }
    toggle() {
        this.state.word = this.state.word === 'Hi' ? 'Hello' : 'Hi';
    }
    static props = {
        name: String,
        items: Array,
    }
}
