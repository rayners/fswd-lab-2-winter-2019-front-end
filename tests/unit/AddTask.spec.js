import { shallowMount, createLocalVue } from '@vue/test-utils'
import AddTask from '@/components/AddTask.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('AddTask.vue', () => {
  it('renders props.msg when passed', () => {
    const actions = { addtask: jest.fn() };
    const store = new Vuex.Store({ actions });
    const wrapper = shallowMount(AddTask, { localVue, store, router });
    wrapper.setData({ newTask: 'Something to add' });
    wrapper.vm.addTask();
    expect(actions.addtask)
        .toHaveBeenCalledWith(expect.anything(), 'Something to add', undefined);
  });
});
