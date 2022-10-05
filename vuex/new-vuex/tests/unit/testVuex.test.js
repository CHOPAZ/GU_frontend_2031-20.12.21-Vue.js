import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import TestVuex from './TestVuex.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test action', () => {
  // хранение наших actions
  let actions
  let store

  // хуки тестов? перед каждым запуском теста, мы будем устанавливать определенные значения внутри actions и store
  beforeEach(() => {
    actions = {
      // функция заглушки jest.fn, она проверит была ли вызвана функция addItem или нет
      addItem: jest.fn()
    }
    //
    store = new Vuex.Store({
      actions
    })
  })

  test('Test save actions', () => {
    const wrapper = mount(TestVuex, {
      store,
      localVue
    })

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    input.setValue('1234')
    button.trigger('click')

    expect(actions.addItem).toHaveBeenCalled()
  })
})
