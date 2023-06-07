<script setup>
import { onMounted, ref } from 'vue'
import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService'

const events = ref(null)

onMounted(async () => {
  try {
    const response = await EventService.getEvents()
    events.value = response.data
  } catch (error) {
    console.log('Erreur', error)
  }
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event of events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
