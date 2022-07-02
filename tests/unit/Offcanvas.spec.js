import { mount } from '@vue/test-utils'
import offcanvas from '@/components/offcanvas'

describe('Testing Offcanvas.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(offcanvas)

    // then
    expect(wrapper.find('#offcanvasRight').classes()).not.toContain('show')
  })
})
