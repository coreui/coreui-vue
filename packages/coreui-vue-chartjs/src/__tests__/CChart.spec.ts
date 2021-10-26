import { mount } from '@vue/test-utils'
import Chart from 'chart.js/auto'
import CChart from './../index'

class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

window.ResizeObserver = ResizeObserver

describe('<CChart />', () => {
  const data = {
    labels: ['red', 'blue'],
    datasets: [{ label: 'colors', data: [1, 2] }],
  }

  const options = {
    responsive: false,
  }

  let chart: any, update: any, destroy: any
  const ref = (el: Chart | null): void => {
    chart = el

    if (chart) {
      update = jest.spyOn(chart, 'update')
      destroy = jest.spyOn(chart, 'destroy')
    }
  }

  beforeEach(() => {
    chart = null
  })

  afterEach(() => {
    if (chart) chart.destroy()
    if (update) update.mockClear()
    if (destroy) destroy.mockClear()
  })

  it('should not pollute props', () => {
    const wrapper = mount(CChart, {
      propsData: {
        data: data,
        options: options,
        wrapper: false,
      },
      attrs: {
        ref: ref,
      }
    })

    expect(data).toStrictEqual({
      labels: ['red', 'blue'],
      datasets: [{ label: 'colors', data: [1, 2] }],
    })
  })
})
