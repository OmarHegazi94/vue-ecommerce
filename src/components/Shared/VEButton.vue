<template>
  <button :type="type" class="btn btn-primary">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 've-button',
    props: {
        type: {
            type: String,
            required: false,
            default: 'button'
        }
    }
}
</script>

<style>

</style>