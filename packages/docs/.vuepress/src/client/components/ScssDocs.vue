<script setup lang="ts">
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'

const props = defineProps({
  capture: String,
  file: String,
})

if (typeof window !== 'undefined') {
  window.Prism = window.Prism || {}
  window.Prism.manual = true
}

const files = import.meta.glob(`../../../../../../node_modules/@coreui/coreui/scss/**/*.scss`, {
  query: '?raw',
  import: 'default',
  eager: true,
})

const file = files[`../../../../../../node_modules/@coreui/coreui/scss/${props.file}`]

const captureStart = `// scss-docs-start ${props.capture}`
const captureEnd = `// scss-docs-end ${props.capture}`
const re = new RegExp(`${captureStart}((?:.|\n)*)${captureEnd}`)
const captured = re.exec(file)
const section = captured && captured[1].trim()
const code = section
  ? Prism.highlight(
      section
        .replaceAll('--#{$prefix}', '--cui-')
        .replaceAll('\n  -', '\n-')
        .replaceAll('\n  @', '\n@'),
      Prism.languages.scss,
      'scss',
    )
  : null
</script>

<template>
  <div class="highlight">
    <pre class="prism-code language-scss" v-html="code" />
  </div>
</template>
