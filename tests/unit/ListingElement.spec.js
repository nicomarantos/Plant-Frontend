import { mount } from '@vue/test-utils'
import ListingElement from '@/components/ListingElement'
import PlantCalender from '@/views/PlantCalender'

describe('Testing ListingElement.vue', () => {
  const response = [
    {
    Id:1,
    commonName: 'plant1',
    botanicalName: 'plant1',
    description: 'its a plant',
    wateringperiod: 11,
    wateringperiodCurrent: 10,
    day: 100,
    saved: true
  },
   ]
  it('should render a ListingElement for each plant', () => {
    fetch.mockResponseOnce(JSON.stringify(response))
    // when
    const wrapper = mount(PlantCalender)
    const wrapper2 = mount(ListingElement, {
      propsData: {
        plants: [
           {
            Id:1,
            commonName: 'plant1',
            botanicalName: 'plant1',
            description: 'its a plant',
            wateringperiod: 11,
            wateringperiodCurrent: 10,
            day: 100,
            saved: true
          }
        ]
      }
    })
    // then
    const listingE = wrapper.findAllComponents(ListingElement)
    expect(listingE.length).toBe(1)
  })

    it('should render the currennt wateringperiod from the plant in the listingElement', () => {
      fetch.mockResponseOnce(JSON.stringify(response))
      //when
      const wrapper = mount(PlantCalender)
    const wrapper3 = mount(ListingElement, {
      propsData: {
        plants: [
          {
            Id: 1,
            commonName: 'plant1',
            botanicalName: 'plant1',
            description: 'its a plant',
            wateringperiod: 11,
            wateringperiodCurrent: 10,
            day: 100,
            saved: true
          }
        ]
      }
    })
      //then
      const pill = wrapper3.find('.badge bg-success rounded-pill justify-content-flex end')
      expect(pill.text()).toBe(11)
  })
  
  })
