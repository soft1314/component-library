<template>
  <fab :position="position" :icon-size="iconSizes" :position-type="positionType" :bg-color="colors.hex"
    :main-icon="mainIcon" :main-tooltip="mainTooltip"
    :actions="[{name: 'alertMe1',icon: firstIcon, tooltip: firstTooltip, color:'#d11014'},{name: 'alertMe2',icon: secondIcon, tooltip: secondTooltip}]"
    @alertMe1="alert1" @alertMe2="alert2" :fixed-tooltip="fixedTooltip" :enable-rotation="enableRotation"></fab>
</template>

<script>
  import fab from '../fab/fab.vue'
  const defaultProps = {
    hex: '#194d33',
    hsl: {
      h: 150,
      s: 0.5,
      l: 0.2,
      a: 1
    },
    hsv: {
      h: 150,
      s: 0.66,
      v: 0.30,
      a: 1
    },
    rgba: {
      r: 25,
      g: 77,
      b: 51,
      a: 1
    },
    a: 1
  };
  export default {
    name: 'transcendfab',
    components: {
      fab
    },
    computed: {
      fixedTooltip() {
        return this.tooltipEvent === 'fixed';
      }
    },
    data() {
      return {
        positions: [
          'bottom-right',
          'bottom-left',
          'top-right',
          'top-left',
        ],
        positionTypes: [
          'fixed',
          'absolute'
        ],
        tooltipEvents: [
          'hover',
          'fixed'
        ],
        sizes: [
          'small',
          'medium',
          'large'
        ],
        position: 'top-right',
        positionType: 'fixed',
        tooltipEvent: 'hover',
        iconSizes: 'medium',
        colors: defaultProps,
        mainIcon: 'add',
        mainTooltip: '',
        firstIcon: 'category',
        firstTooltip: '图层',
        secondIcon: 'place',
        secondTooltip: '定位',
        enableRotation: true
      }
    },
    methods: {
      alert1() {
        this.$parent.handleFabClick1()
        this.$emit('handleFabClick1')
      },
      alert2() {
        this.$parent.handleFabClick2()
        this.$emit('handleFabClick2')
      },
    }
  }
</script>

<style scoped>
</style>
