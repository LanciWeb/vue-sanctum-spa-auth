<template>
  <div id="app">
    <header class="bg-dark p-3">
      <nav class="d-flex align-items-center justify-content-between">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link v-if="!isLogged" :to="{ name: 'login' }"
          >Login</router-link
        >
        <LogoutButton />
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LogoutButton from "./components/LogoutButton.vue";
import { default as auth, isLogged } from "@/store/auth";
export default {
  name: "App",
  components: { LogoutButton },
  computed: {
    auth,
    isLogged,
  },
};
</script>


<style>
a {
  color: #fff;
  text-decoration: none;
}
</style>

