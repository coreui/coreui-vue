---
title: CMultiSelect
description: 
options: []
---

## Examples

<CButton @click="$page.options=[
    {
        value: 6,
        text: 'Node.js',
        selected: true
    } 
]" color="primary">SET OPTIONS SMALL</CButton>

<br><br>

<CButton @click="$page.options=[
       {
        value: 0,
        text: 'Angular',
        disabled: true
      },
      {
        value: 1,
        text: 'Bootstrap',
        selected: true,
        disabled: true
      },
      {
        value: 2,
        text: 'Vue.js',
        selected: true
      },
      {
        value: 3,
        text: 'Vue.js'
      },
      {
        label: 'backend',
        options: [
          {
            value: 4,
            text: 'Django'
          },
          {
            value: 5,
            text: 'Laravel',
            disabled: true
          },
          {
            value: 6,
            text: 'Node.js',
          }
        ]
      }   
]" color="primary">SET OPTIONS</CButton>


<CMultiSelect search :options="$page.options">
</CMultiSelect>


<br><br><br>

<CMultiSelect :search="true" selectionType="tag" optionsMaxHeight="400">
    <CMultiSelectGroupOption value="WWW AAA" selected disabled>
        AAA
    </CMultiSelectGroupOption>
    <CMultiSelectGroupLabel>
        Label number zero
    </CMultiSelectGroupLabel>
    <CMultiSelectGroupOption value="WWW BBB" disabled>
        BBB
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number one
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption value="WWW 111 A">
            111 A 
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption value="WWW 111 B" disabled>
            111 B
        </CMultiSelectGroupOption>
        <CMultiSelectGroup>
            <CMultiSelectGroupLabel>
                Label number two
            </CMultiSelectGroupLabel>
            <CMultiSelectGroupOption selected>
                222 A
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption selected>
                222 B
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption>
                222 C
            </CMultiSelectGroupOption>            
        </CMultiSelectGroup>
        <CMultiSelectGroupOption>
            111 C
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            111 D
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        CCC
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        DDD
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number three
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption>
            333 A
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            333 B
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        EEE
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        FFF
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        GGG
    </CMultiSelectGroupOption>
</CMultiSelect>


<br><br><br>

<CMultiSelect :search="true" selectionType="tag" optionsMaxHeight="400">
    <CMultiSelectGroupOption value="WWW AAA">
        AAA
    </CMultiSelectGroupOption>
    <CMultiSelectGroupLabel>
        Label number zero
    </CMultiSelectGroupLabel>
    <CMultiSelectGroupOption value="WWW BBB">
        BBB
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number one
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption value="WWW 111 A">
            111 A 
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption value="WWW 111 B">
            111 B
        </CMultiSelectGroupOption>
        <CMultiSelectGroup>
            <CMultiSelectGroupLabel>
                Label number two
            </CMultiSelectGroupLabel>
            <CMultiSelectGroupOption>
                222 A
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption>
                222 B
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption>
                222 C
            </CMultiSelectGroupOption>            
        </CMultiSelectGroup>
        <CMultiSelectGroupOption>
            111 C
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            111 D
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        CCC
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        DDD
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number three
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption>
            333 A
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            333 B
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        EEE
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        FFF
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        GGG
    </CMultiSelectGroupOption>
</CMultiSelect>

```vue

<CMultiSelect>
    <CMultiSelectGroupOption>
        AAA
    </CMultiSelectGroupOption>
    <CMultiSelectGroupLabel>
        Label number zero
    </CMultiSelectGroupLabel>
    <CMultiSelectGroupOption>
        BBB
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number one
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption>
            111 A 
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            111 B
        </CMultiSelectGroupOption>
        <CMultiSelectGroup>
            <CMultiSelectGroupLabel>
                Label number two
            </CMultiSelectGroupLabel>
            <CMultiSelectGroupOption>
                222 A
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption>
                222 B
            </CMultiSelectGroupOption>
            <CMultiSelectGroupOption>
                222 C
            </CMultiSelectGroupOption>            
        </CMultiSelectGroup>
        <CMultiSelectGroupOption>
            111 C
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            111 D
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        CCC
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        DDD
    </CMultiSelectGroupOption>
    <CMultiSelectGroup>
        <CMultiSelectGroupLabel>
            Label number three
        </CMultiSelectGroupLabel>
        <CMultiSelectGroupOption>
            333 A
        </CMultiSelectGroupOption>
        <CMultiSelectGroupOption>
            333 B
        </CMultiSelectGroupOption>
    </CMultiSelectGroup>
    <CMultiSelectGroupOption>
        EEE
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        FFF
    </CMultiSelectGroupOption>
    <CMultiSelectGroupOption>
        GGG
    </CMultiSelectGroupOption>
</CMultiSelect>

```




## Additional content