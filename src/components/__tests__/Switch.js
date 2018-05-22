import Vue from "vue";
import Switch from "../Switch/Switch";


describe("Switch.vue", () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Switch.methods.handleChange).toBe('function')
  })

  const Constructor = Vue.extend(Switch);
  const vm = new Constructor().$mount();
  test("should render correct contents", () => {
    expect(vm.$el.textContent).toEqual(
      " "
    );
  });
  // test("should match the snapshot", () => {
  //   expect(vm.$el).toMatchSnapshot();
  // });
});
