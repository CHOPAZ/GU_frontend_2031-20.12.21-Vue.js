/*   expect(wrapper.vm.op2).toBe(1) // vm.op1 = this.op1
     op1Input.element.value = 1
     op1Input.trigger('input')
     op1Input.setValue(1) */

import { mount } from '@vue/test-utils'
import VCalc from '../../pages/VCalc.vue'

const wrapper = mount(VCalc)
const op1Input = wrapper.find('input[name = op1]')
const op2Input = wrapper.find('input[name = op2]')
const checkedOp2Input = wrapper.find('input[id = operand2]')
const checkedOp1Input = wrapper.find('input[id = operand1]')

describe('Test TestCalculator', () => {
  // Тест поля ввода операнда 1
  test('Test first operator', () => {
    op1Input.setValue(1)
    expect(wrapper.vm.op1).toBe(1)
  })

  // Тест поля ввода операнда 2
  test('Test second operator', () => {
    op2Input.setValue(1)
    expect(wrapper.vm.op2).toBe(1)
  })

  // Тест суммы
  test('Test sum', () => {
    const summButton = wrapper.find('button[name = "+"]')

    op1Input.setValue(1)
    op2Input.setValue(2)
    summButton.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  // Тест вычетания
  test('Test sub', () => {
    const subButton = wrapper.find('button[name = "-"]')

    op1Input.setValue(2)
    op2Input.setValue(1)
    subButton.trigger('click')

    expect(wrapper.vm.result).toBe(1) // vm.op1 = this.op1
  })

  // Тест деления
  test('Test div', () => {
    const summButton = wrapper.find('button[name = "/"]')

    op1Input.setValue(2)
    op2Input.setValue(1)
    summButton.trigger('click')

    expect(wrapper.vm.result).toBe(2) // vm.op1 = this.op1
  })

  // Тест умножения
  test('Test mult', () => {
    const multButton = wrapper.find('button[name = "*"]')

    op1Input.setValue(1)
    op2Input.setValue(2)
    multButton.trigger('click')

    expect(wrapper.vm.result).toBe(2) // vm.op1 = this.op1
  })

  // Тест возведение в степень
  test('Test Exponentiation', () => {
    const exponButton = wrapper.find('button[name = "Exponentiation"]')

    op1Input.setValue(2)
    op2Input.setValue(3)
    exponButton.trigger('click')

    expect(wrapper.vm.result).toBe(8) // vm.op1 = this.op1
  })

  // Тест целочисленного деления
  test('Test Integer Divisio', () => {
    const truncButton = wrapper.find('button[name = "Integer division"]')

    op1Input.setValue(4)
    op2Input.setValue(3)
    truncButton.trigger('click')

    expect(wrapper.vm.result).toBe(1) // vm.op1 = this.op1
  })

  function screenKeyboard (btnScreen, arg) {
    const keyBoardButton = wrapper.find(btnScreen)

    op1Input.setValue(0)
    checkedOp1Input.trigger('change')
    keyBoardButton.trigger('click')

    expect(wrapper.vm.op1).toBe(arg)

    op2Input.setValue(0)
    checkedOp2Input.trigger('change')
    keyBoardButton.trigger('click')

    expect(wrapper.vm.op2).toBe(arg)
  }
  // Тест экранной клавиатуры 1
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "1"]', 1)
  })

  // Тест экранной клавиатуры 2
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "2"]', 2)
  })

  // Тест экранной клавиатуры 3
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "3"]', 3)
  })

  // Тест экранной клавиатуры 4
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "4"]', 4)
  })

  // Тест экранной клавиатуры 5
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "5"]', 5)
  })

  // Тест экранной клавиатуры 6
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "6"]', 6)
  })

  // Тест экранной клавиатуры 7
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "7"]', 7)
  })

  // Тест экранной клавиатуры 8
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "8"]', 8)
  })

  // Тест экранной клавиатуры 9
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "9"]', 9)
  })

  // Тест экранной клавиатуры 0
  test('Test Screen Keyboard', () => {
    screenKeyboard('button[name = "0"]', 0)
  })

  // Тест кнопки удаления
  test('Test BackSpase button', () => {
    const btnScreen = wrapper.find('button[name = backSpace]')

    op1Input.setValue(1234)
    checkedOp1Input.trigger('change')
    btnScreen.trigger('click')

    expect(wrapper.vm.op1).toBe(123)

    op2Input.setValue(1234)
    checkedOp2Input.trigger('change')
    btnScreen.trigger('click')

    expect(wrapper.vm.op2).toBe(123)
  })
})
