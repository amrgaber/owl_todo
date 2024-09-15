// In this example, we show how components can be defined and created.
import { mount, EventBus } from "@odoo/owl";
import { Root } from "./root";

const bus = new EventBus();
const env = {
  bus,
}
const templates = await FETCH_TEMPLATES();
mount(Root, document.body, {
  templates,
  dev: DEV,
  env// injected by server
});
