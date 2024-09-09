import { Component, mount, xml, useRef, onMounted, useState } from "@odoo/owl";
import { Task } from "./task";

export class Root extends Component {
  setup() {
    const inputRef = useRef("addnput");
    onMounted(() => {
      inputRef.el.focus();
    });
    this.nextId = 1; // Initialize nextId
    this.state = useState({ tasks: [] });
  }

  static components = {
    Task
  };


  addTask(ev) {
    // 13 is keycode for ENTER
    if (ev.keyCode === 13) {
      const text = ev.target.value.trim();
      ev.target.value = "";
      if (text) {
        const newTask = {
          id: this.nextId++,
          text: text,
          isCompleted: false,
        };
        this.state.tasks.push(newTask);
      }
    }
  }

  deleteTask(task) {
    const index = this.state.tasks.findIndex(t => t.id === task.id);
    this.state.tasks.splice(index, 1);
  }

  static template = "Root";
}
