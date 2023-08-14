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
        mainTooltip: 'Hello',
        firstIcon: 'cached',
        firstTooltip: '第一个',
        secondIcon: 'add_alert',
        secondTooltip: '第二个',
        enableRotation: true
      }
    },
    methods: {
        alert1(){
            alert('You have clicked me :111111)');
        },
    	alert2(){
    	    alert('You have clicked me :222222)');
    	},
    }
  }
</script>

<style scoped>
</style>
