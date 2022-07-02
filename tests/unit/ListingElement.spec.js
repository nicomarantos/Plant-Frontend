import { mount } from '@vue/test-utils'
import ListingElement from '@/components/ListingElement'
import PlantCalender from '@/views/PlantCalender'

describe('Testing ListingElement.vue', () => {
  const response = []
  it('should render a ListingElement for each plant', () => {
    fetch.mockResponseOnce(JSON.stringify(response))
    // when
    const wrapper = mount(ListingElement, {
      propsData: {
        plants: [
           {
            Id:1,
            commonName: 'plant1',
            botanicalName: 'plant1',
            description: 'its a plant',
            wateringperiod: 10,
            wateringperiodCurrent: 10,
            day: 100,
            saved: true
          },
          {
            Id:2,
            commonName: 'plant2',
            botanicalName: 'plant2',
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
    const listingE = wrapper.findAllComponents(PlantCalender)
    expect(listingE.length).toBe(2)
  })
})
