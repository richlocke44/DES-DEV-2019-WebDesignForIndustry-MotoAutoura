<template>
    <div class="responsive-nav visible-xs visible-sm" v-bind:class="{collapsed: collapsed}">
  <a class="hamburger pull-right" v-on:click="toggleActive(!collapsed)">
    {{triggerText}}
  </a><slot v-on:click="toggleActive(false)"></slot></div>
    
</template>

<script>

export default {
    name: 'ResponsiveNav',
    data () {
    return {
      collapsed: true
    };
  },
  computed: {
    triggerText () {
      return this.collapsed && 'Menu' || 'Close';
    }
  },
  methods: {
    toggleActive (flag) {
      this.collapsed = flag;
    }
  }};



    
</script>