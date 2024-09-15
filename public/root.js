import { Component, useEnv, EventBus, useState } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";

export class Root extends Component {
  setup() {
    this.mainScreen = useState({ props: {} });
    const env = useEnv();
    console.log('env.bus', env.bus);
    env.bus.addEventListener('change_active_menu', this.onChangeScreen.bind(this));
  }
  static components = {
    Header,
    Footer
  };

  static template = 'Root';
  get mainScreenPropsFielded() {
    return 'all';
  }
  onChangeScreen(ev) {
    console.log("===onChangeScreen");
    // this.mainScreen.props = ev.detail;
  }
}
