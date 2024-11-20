<template>
  <div>
    <h5 class="text-secondary text-uppercase mb-4">{{ title }}</h5>
    <div class="d-flex flex-column justify-content-start">
      <a
          v-for="link in links"
          :key="link.text"
          class="text-secondary mb-2"
          :href="link.url"
      >
        <i class="bi bi-chevron-right mr-2"></i>{{ link.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickLinks",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add styles here if necessary */
</style>
