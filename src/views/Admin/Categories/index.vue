<template>
  <div>
      <section-header-slot :add-method="consoleMethod">
          <template #title>
              <h3>Categories</h3>
          </template>
          <template #action>
              <!-- <button class="btn btn-primary">Add Category</button> -->
          </template>
      </section-header-slot>
  </div>
</template>

<script>
import SectionHeaderSlot from '@/components/Admin/SectionHeaderSlot.vue'
export default {
    components: {
        SectionHeaderSlot
    },
    methods: {
        consoleMethod() {
            console.log('worked!')
        }
    }
}
</script>

<style>

</style>
