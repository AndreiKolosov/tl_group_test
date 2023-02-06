<template>
  <select :value="modelValue" @change="changeOption">
    <option value="" class="placeholder">{{ placeholderValue }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    placeholderValue: String,
    modelValue: String,
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped>
.placeholder {
  color: lightgray;
}
</style>
