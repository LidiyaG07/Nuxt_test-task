<template>
  <nav class="mx-auto w-full m-2 p-4 flex gap-3 bg-cyan-300">
    <a href="#"  class="hover:text-lime-700 transition-colors duration-300 ease-in-out cursor-pointer font-semibold text-xl">Nuxt SSR</a>

    <div class="">
      <ul class="container flex gap-5">
        <li>
          <nuxt-link class="" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="" to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link class="" to="/users">Users</nuxt-link>
        </li>

      </ul>
    </div>
  </nav>
</template>