<template>
  <div>
  	<Navbar/>

    <main>
      <div class="container mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>