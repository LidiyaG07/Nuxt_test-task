<template>
  <section>
    <h1 class="text-2xl font-semibold">Users page</h1>

    <ul>
      <li v-for="user of 5" :key="user">
       <a href="#" @click.prevent="openUser(user)">User {{ user }}</a>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  methods: {
    openUser(user) {
     this.$router.push('/users/' + user)
    }
  }
}
</script>
