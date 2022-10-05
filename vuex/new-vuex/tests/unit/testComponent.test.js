/* План теста:
1. Component import
2. Mount component import (заставить компоненте смонтироваться)
2.1 - Test method (описываем сам тест)
3. Passed props ( передаем пропсы, мы их непосредственно тестируем)
4. default text === text from component (сравниваем дефолтное значение с ожидаемым значением)
*/
import TestComponent from './TestComponent.vue'
import { mount } from '@vue/test-utils'

describe('Test TestComponent', () => {
  test('Test props', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello World'
      }
    })
    expect(wrapper.text()).toContain('The message is: Hello World')
  })
})
