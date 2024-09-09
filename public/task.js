import { Component } from "@odoo/owl";
import { useStore } from "./helper";


export class Task extends Component {
    static template = "Task";
    static props = ["task"];
    setup() {
        this.store = useStore();
    }
    // deleteTask() {
    //     this.props.onDelete(this.props.task);
    // }
    // toggleTask() {
    //     this.props.task.isCompleted = !this.props.task.isCompleted;
    // }
}