<template>
  <button
    v-if="isLogged"
    class="btn btn-small btn-secondary"
    type="button"
    @click="logout"
  >
    Logout
  </button>
</template>

<script>
import { isLogged, removeUser } from "@/store/auth";
export default {
  name: "LogoutButton",
  computed: {
    isLogged,
  },
  methods: {
    async logout() {
      try {
        await this.$http.delete(`${this.$apiUri}/api/logout`);
        localStorage.removeItem("user");
        removeUser();
        this.$router.push("login");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
