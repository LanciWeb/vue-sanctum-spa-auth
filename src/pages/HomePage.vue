<template>
  <div class="container">
    <h1>Home Page</h1>
    <section>
      <h2>Contatti</h2>
      <div v-if="isLoading" class="h3">Loading...</div>
      <ul v-else>
        <li v-for="contact in contacts" :key="contact.id">
          <h5>{{ contact.name }}</h5>
          <p>{{ contact.phone }}</p>
          <p>{{ contact.company }}</p>
          <p>{{ contact.job_title }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      contacts: [],
      isLoading: false,
    };
  },
  methods: {
    async getContacts() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.get(`${this.$apiUri}/api/contacts`);
        this.contacts = data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>

