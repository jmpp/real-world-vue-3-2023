<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../services/EventService'
// import { useRoute } from 'vue-router'

const event = ref(null)

// Drawback : creates a tight coupling between the route and the component
/* const {
  params: { eventId }
} = useRoute() */

// Better to use props
const props = defineProps({
  eventId: {
    type: String,
    required: true
  }
})

onMounted(async () => {
  try {
    const { data } = await EventService.getEvent(props.eventId)
    event.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
