<script setup>
const props = defineProps({
  pathMatch: { type: String, required: true }
})
</script>

<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Cannot resolve route <code>{{ props.pathMatch }}</code>
    </p>
  </div>
</template>

<style scoped></style>
