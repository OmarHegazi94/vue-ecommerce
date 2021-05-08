<template>
  <div class="d-flex justify-content-between">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="actions">
      <VEButton @click="addMethod" type="submit">
        Add
      </VEButton>
    </div>
  </div>
</template>

<script>
// import VEButton from "@/components/Shared/VEButton.vue";
export default {
  props: ["addMethod"],
//   components: {
//     VEButton,
//   },
};
</script>

<style lang="scss" scoped>
</style>
