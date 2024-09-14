import { Component, xml, useRef, onMounted } from "@odoo/owl";

export class Search extends Component {
  static template = 'search';
  setup() {
    this.searchInput = useRef("search_input");
    // focus on search input on mount 
    onMounted(() => {
      this.searchInput.el.focus();
    });
  }

  onClickSearch() {
    console.log('searchInput', this.searchInput);
    // focus on search input after click
    this.searchInput.el.focus();
  }

}