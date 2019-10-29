import { mount } from '@vue/test-utils'
import Component from '../CTable'

const ComponentName = 'CTable'
const defaultWrapper = mount(Component)

const items = [
  {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {
    username: 'Friderik Dávid', 
    registered: '2012/01/21', 
    role: 'Staff', 
    status: 'Active',
    _cellClasses: { registered: 'custom-cell-class' }
  },
]

const customWrapper = mount(Component, {
  propsData: {
    items,
    fields: [
      { key: 'username', _style:'width:40%', _classes: 'user-custom-class' },
      'registered',
      { key: 'role', _style:'width:20%;' },
      { key: 'status', _style:'width:20%;' },
      { key: 'show_details' , label:'', _style:'width:1%', sortable: false, filterable: false },
    ],

    tableFilter: true,
    itemsPerPageSelect: true,
    addTableClasses: 'additional-table-class',
    sortable: true,
    small: false,
    dark: true,
    striped: true,
    fixed: false,
    hover: true,
    border: true,
    outlined: true,
    columnFilter: true,
    footer: true,
    defaultSorter: { column: 'username', asc: false },
    defaultColumnFilter: { registered: '2012' },
    pagination: true
  }
})

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
  // it('changes colspan when indexColumn is switched', () => {
  //   const colspanWithIndexColumn = customWrapper.vm.colspan
  //   customWrapper.setProps({ indexColumn: false })
  //   expect(customWrapper.vm.colspan).toBe(colspanWithIndexColumn - 1)
  // })
  it('table filter works correctly', () => {
    customWrapper.setData({ tableFilterVal: 'Yiorgos' })
    expect(customWrapper.vm.sortedItems.length).toBe(1)
    customWrapper.setData({ tableFilterVal: null })
  })
  it('shows loading layer when loading prop is set', () => {
    customWrapper.setProps({ loading: true })
    expect(customWrapper.contains('.spinner-border')).toBe(true)
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
    customWrapper.setProps({ items: items.slice() })
    expect(customWrapper.vm.sortedItems.length).toBe(5)

    const newItems = items.slice(0, 4)
    customWrapper.setProps({ items: newItems })
    expect(customWrapper.vm.sortedItems.length).toBe(4)
  })
  it('correctly filter by column on input', () => {
    customWrapper.findAll('tr').at(1).find('input').setValue('Estavan')
    expect(customWrapper.vm.sortedItems[0].username).toMatch('Estavan')
  })
})
