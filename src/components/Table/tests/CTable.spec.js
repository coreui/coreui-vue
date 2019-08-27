import { mount } from '@vue/test-utils'
import Component from '../CTable'

const ComponentName = 'CTable'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    items: [
      {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
    ],
    fields: [
      { key: 'username', _style:'width:40%' },
      'registered',
      { key: 'role', _style:'width:20%;' },
      { key: 'status', _style:'width:20%;' },
      { key: 'show_details' , label:'', _style:'width:1%', noSorting: true, noFilter: true },
    ],

    indexColumn: true,
    filterRow: true,
    addTableClasses: 'additional-table-class',
    sorting: true,
    small: false,
    dark: true,
    striped: true,
    fixed: false,
    hover: true,
    border: true,
    outlined: true,
    optionsRow: true,
    footer: true,
    defaultSorter: { column: 'username' },
    defaultTableFilter: '2012'
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
})
