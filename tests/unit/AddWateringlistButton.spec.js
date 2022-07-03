import { mount } from '@vue/test-utils'
import plantcards from '@/components/plantcards'

describe('Testing PlantCards.vue', () => {
  it('the button should be disabled for the a already saved plant', () => {
    //when
    const wrapper = mount(plantcards, {
      propsData: {
        plants: [
          {
            Id: 1,
            commonName: 'plant',
            botanicalName: 'plant1',
            description: 'its a plant',
            wateringperiod: 10,
            wateringperiodCurrent: 10,
            day: 100,
            saved: true
          }
        ]
      }
    })
    
    wrapper.vm.loadingResource = true
    //await 
    wrapper.vm.$nextTick()
    //then
    const button = wrapper.find('#btn btn-primary btn-sm')
    expect(button.element.disabled).toBe(true)
  })




})
