import { shallowMount } from '@vue/test-utils'
import Register from '@/components/Register.vue'

describe('Register.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.vm.usernameBlank).toBe(true);
    wrapper.setData({ username: 'something' });
    expect(wrapper.vm.usernameBlank).toBe(false);
  })
})
