<template>
  <div class="highlight">
    <pre class="prism-code language-scss" v-html="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
export default defineComponent({
  name: 'ScssDocs',
  props: {
    capture: String,
    file: String,
  },
  setup(props) {
    if (typeof window !== 'undefined') {
      window.Prism = window.Prism || {}
      window.Prism.manual = true
    }

    const files = import.meta.glob(
      `../../../../../../../node_modules/@coreui/coreui/scss/**/*.scss`,
      {
        as: 'raw',
        eager: true,
      },
    )
    const file = files[`../../../../../../../node_modules/@coreui/coreui/scss/${props.file}`]

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

    if (code === null) {
      console.error(`Can't find "${props.capture}"`)
    }

    return {
      code,
    }
  },
})
</script>
