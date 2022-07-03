import { mount } from '@vue/test-utils'
import PlantCalender from '@/views/PlantCalender.vue'
import ListingElement from '@/components/ListingElement'
import sortButtons from '@/components/sortButtons'


describe('Testing PlantCalender.vue', () => {
  const emptyResponse = []
   it('should show page title', () => {
    // when
    const wrapper = mount(PlantCalender)

    // then
    expect(wrapper.text()).toMatch('Wateringlist sort by Days  sort by Name')
  })

  it('should have ListingElement component', () => {
    fetch.mockResponseOnce(JSON.stringify(emptyResponse))
    // when
    const wrapper = mount(PlantCalender)

    // then
    const Element = wrapper.findComponent(ListingElement)
    expect(Element.exists()).toBeTruthy()
  })

  it('should have sort Buttons component', () => {
    // when
    const wrapper = mount(PlantCalender)

    // then
    const Buttons = wrapper.findComponent(sortButtons)
    expect(Buttons.exists()).toBeTruthy()
  })

  it('should not show a listing element by default when there is no saved plant', () => {
    // when
    const wrapper = mount(PlantCalender)

    // then
    expect(wrapper.find('#ListlingElement').classes()).not.toContain('show')
  })
})
