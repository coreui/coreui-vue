<template>
  <div :style="outerContainerStyles">
    <div v-if="center" :style="centeringStyles">
      <slot>
        <CSpinner grow size="lg" color="primary"/>
      </slot>
    </div>
    <slot v-else>
      <CSpinner size="lg" color="primary"/>
    </slot>
  </div>
</template>

<script>
import CSpinner from '../spinner/CSpinner'

export default {
  name: 'CElementCover',
  props: {
    boundaries: Array,
    center: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 0.4
    }
  },
  components: {
    CSpinner
  },
  data () {
    return {
      containerCoords: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      parentCoords: null
    }
  },
  mounted () {
    if (this.boundaries) {
      this.setOffsets()
    }
  },
  computed: {
    outerContainerStyles () {
      return {
        ...this.containerCoords,
        position: 'absolute',
        'background-color': `rgb(255,255,255,${this.opacity})`
      }
    },
    centeringStyles () {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
      }
    }
  },
  methods: {
    setOffsets () {
      const parent = this.$el.parentElement
      this.parentCoords = parent.getBoundingClientRect()
      this.boundaries.forEach(({sides, query}) => {
        const element = parent.querySelector(query)
        if (!element || !sides) {
          return
        }
        const coords = element.getBoundingClientRect()
        sides.forEach(side => {
          const sideMargin = Math.abs(coords[side] - this.parentCoords[side])
          this.containerCoords[side] = sideMargin + 'px'
        })
      })
    }
  }
}
</script>