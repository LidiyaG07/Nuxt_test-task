<template>
  <section>
    <h1>User {{ $route.params.id }}</h1>
  </section>
</template>

<script setup>
const route = useRoute()
console.log(route.params);

</script>