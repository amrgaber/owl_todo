import { Component, useState } from "@odoo/owl";

export class MagicButton extends Component {
    static template = "MagicButton";

    state = useState({ value: 0 })

    changeText() {
        this.state.value = 'This is Magic';
    }

}