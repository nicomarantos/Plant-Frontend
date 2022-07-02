import { mount } from '@vue/test-utils'
import plantcards from '@/components/plantcards'

describe('Testing PlantCards.vue', () => {
  it('should render Commonnname and Botanicalname', () => {
    // when
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

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('plant')
  })
})
