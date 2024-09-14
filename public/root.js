import { Component } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";

export class Root extends Component {
  static components = {
    Header,
    Footer
  };

  static template = 'Root';

}
