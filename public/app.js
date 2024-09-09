// In this example, we show how components can be defined and created.
import { mount } from "@odoo/owl";
import { Root } from "./root";
import { createTaskStore } from "./helper"; // Import the createTaskStore function

const templates = await FETCH_TEMPLATES();
const env = {
  store: createTaskStore(),
};
mount(Root, document.body, {
  templates,
  dev: DEV,// injected by server
  env
});
