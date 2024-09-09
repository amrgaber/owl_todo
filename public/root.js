import { Component, mount, xml, useRef, onMounted, useState, reactive } from "@odoo/owl";
import { Task } from "./task";
import { useStore } from "./helper";

export class Root extends Component {

  static components = {
    Task
  };

  setup() {
    const inputRef = useRef("add-input");
    onMounted(() => inputRef.el.focus());
    this.store = useStore();
    this.filter = useState({ value: "all" });
  }
  get displayedTasks() {
    const tasks = this.store.tasks;
    switch (this.filter.value) {
      case "active": return tasks.filter(t => !t.isCompleted);
      case "completed": return tasks.filter(t => t.isCompleted);
      case "all": return tasks;
    }
  }

  setFilter(filter) {
    this.filter.value = filter;
  }

  addTask(ev) {
    // 13 is keycode for ENTER
    if (ev.keyCode === 13) {
      this.store.addTask(ev.target.value);
      ev.target.value = "";
    }
  }

  // deleteTask(task) {
  //   const index = this.state.tasks.findIndex(t => t.id === task.id);
  //   this.state.tasks.splice(index, 1);
  // }

  static template = "Root";
}
