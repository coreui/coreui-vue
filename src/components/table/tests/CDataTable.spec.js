import { mount } from '@vue/test-utils'
import Component from '../CDataTable'

const ComponentName = 'CDataTable'
const defaultWrapper = mount(Component)

const items = [
  {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {
    username: 'Friderik Dávid', 
    registered: '2011/01/21',
    role: 'Staff', 
    status: 'Active',
    _cellClasses: { registered: 'custom-cell-class' }
  },
]
const customWrapper = createCustomWrapper()

function createCustomWrapper () {
  return mount(Component, {
    propsData: {
      items,
      fields: [
        { key: 'username', _style:'width:40%', _classes: 'user-custom-class' },
        'registered',
        { key: 'role', _style:'width:20%;' },
        { key: 'status', _style:'width:20%;' },
        { key: 'show_details' , label:'', _style:'width:1%', sorter: false, filter: false },
      ],

      tableFilter: true,
      itemsPerPageSelect: true,
      addTableClasses: 'additional-table-class',
      sorter: true,
      small: false,
      dark: true,
      striped: true,
      fixed: false,
      hover: true,
      border: true,
      outlined: true,
      columnFilter: true,
      footer: true,
      sorterValue: { column: 'username', asc: false },
      columnFilterValue: { registered: '2012', 'non_existing': 'smh' },
      pagination: true
    }
  })
}

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('changes sorting correctly', () => {
    expect(customWrapper.vm.sortedItems[0].username).toBe('Yiorgos Avraamu')
    customWrapper.find('tr').findAll('th').at(3).trigger('click')
    expect(customWrapper.vm.sortedItems[0].status).toBe('Active')

    customWrapper.find('tr').findAll('th').at(3).trigger('click')
    expect(customWrapper.vm.sortedItems[0].status).toBe('Pending')
  })
  it('doesnt change sorter when clicked on not sortable column', () => {
    const oldSorterColumn = customWrapper.vm.sorter.column
    customWrapper.find('tr').findAll('th').at(4).trigger('click')
    expect(customWrapper.vm.sorter.column).toBe(oldSorterColumn)
  })
  it('renders pretified column names when fields are not defined', () => {
    customWrapper.setProps({ fields: undefined })
    expect(customWrapper.vm.columnNames[0]).toBe('Username')
  })
  it('shows loading layer when loading prop is set', () => {
    customWrapper.setProps({ loading: true })
    expect(customWrapper.contains('.spinner-grow')).toBe(true)
    customWrapper.setProps({ loading: false })
  })
  it('emits event when items per page changes', () => {
    customWrapper.findAll('option').at(2).setSelected()
    expect(customWrapper.emitted()['pagination-change'][0][0]).toBe(10)
  })
  it('emits event when row is clicked', () => {
    customWrapper.find('tbody').find('tr').trigger('click')
    expect(customWrapper.emitted()['row-clicked']).toBeTruthy()
  })
  it('correctly updates items', () => {
    //test if watcher is not fired by coverage
    const localWrapper = createCustomWrapper()
    localWrapper.setProps({ items: items.slice() })
    expect(localWrapper.vm.sortedItems.length).toBe(4)

    const newItems = items.slice(0, 2)
    localWrapper.setProps({ items: newItems })
    expect(localWrapper.vm.sortedItems.length).toBe(2)
  })
  it('updates column filter on events depending on lazy modifier', () => {
    const localWrapper = createCustomWrapper()
    const input = localWrapper.findAll('tr').at(1).find('input')
    const updateEmmited = () => localWrapper.emitted()['update:column-filter-value']
    localWrapper.setProps({ columnFilter: { lazy: true } })
    input.trigger('input')
    expect(updateEmmited()).not.toBeTruthy()
    localWrapper.setProps({ columnFilter: true })
    input.trigger('input')
    expect(updateEmmited()).toBeTruthy()
  })
  it('updates table filter on events depending on lazy modifier', () => {
    const localWrapper = createCustomWrapper()
    const input = localWrapper.find('input')
    const firstUsername = () => localWrapper.vm.sortedItems[0].username
    input.element.value = "Estavan"
    input.trigger('input')
    expect(firstUsername()).toMatch('Estavan')
    localWrapper.setProps({ tableFilter: { lazy: true } })
    input.element.value = "Chetan"
    input.trigger('input')
    expect(firstUsername()).toMatch('Estavan')
    input.trigger('change')
    expect(firstUsername()).toMatch('Chetan')
  })
  it('table filter works correctly', () => {
    customWrapper.setProps({tableFilterValue: 'Yiorgos', tableFilter: false})
    expect(customWrapper.vm.sortedItems.length).toBe(1)
  })
  it('changes pagination number correctly', () => {
    customWrapper.setProps({
      itemsPerPage: 13
    })
    expect(customWrapper.vm.perPageItems).toBe(13)
  })
  it('Disable component sorting and filtering when using \'external\' keys', () => {
    const localWrapper = createCustomWrapper()
    localWrapper.setProps({
      tableFilterValue: 'Yiorgos'
    })
    expect(localWrapper.vm.sortedItems.length).toBe(1)
    localWrapper.setProps({
      tableFilter: { external: true }
    })
    expect(localWrapper.vm.sortedItems.length).toBe(4)

    localWrapper.setProps({
      columnFilter: { external: true },
    })
    expect(localWrapper.vm.sortedItems.length).toBe(5)

    expect(localWrapper.vm.sortedItems[0].username).toBe('Yiorgos Avraamu')
    localWrapper.setProps({
      sorter: { external: true }
    })
    expect(localWrapper.vm.sortedItems[0].username).toBe('Estavan Lykos')
  })
  it('Sorter reset mechanism is working properly', () => {
    const localWrapper = createCustomWrapper()
    const click = (clickCount = 1) => {
      for (let i = 0; i < clickCount; i++) {
        localWrapper.find('tr').findAll('th').at(2).trigger('click')
      }
    }
    localWrapper.setProps({
      sorter: { resetable : true }
    })
    click(3)
    expect(localWrapper.vm.sorterState.column).toBe(null)
    click(2)
    expect(localWrapper.vm.sorterState.asc).toBe(false)
  })
  it('Properly sets itemsPerPageSelect options', () => {
    const localWrapper = createCustomWrapper()

    localWrapper.setProps({
      itemsPerPageSelect: {
        label: 'new label',
        values: [10, 25, 50]
      }
    })
    expect(localWrapper.vm.paginationSelect.label).toBe('new label')
    expect(localWrapper.vm.paginationSelect.values[1]).toBe(25)
  })
})
