import { Component } from "@odoo/owl";

export class Task extends Component {
    static template = "Task";
    static props = ["task", "onDelete"];

    deleteTask() {
        this.props.onDelete(this.props.task);
    }
}