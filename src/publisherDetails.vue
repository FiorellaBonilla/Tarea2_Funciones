<template>
  <div class="container">
    <div class="publisher-details">
      <h2>{{ publisher.name }}</h2>
      <form class="form-layout">
        <div class="row">
          <div class="form-group">
            <label for="countryInput">Country</label>
            <input class="form-control" type="text" v-model="publisher.country" disabled>
          </div>
          <div class="form-group">
            <label for="foundedInput">Founded</label>
            <input class="form-control" type="text" v-model="publisher.founded" disabled>
          </div>
          <div class="form-group">
            <label for="publisherNameInput">Publisher Name</label>
            <input class="form-control" type="text" v-model="publisher.publisher_name" disabled>
          </div>
        </div>

        <h3>Authors</h3>
        <ul class="author-list">
          <li v-for="author in publisher.authors" :key="author.id">
            <router-link :to="'/author/show/' + author.id" class="link">
              {{ author.name }}
            </router-link>
          </li>
        </ul>

        <router-link class="button-back" to="/publisher">Back to Publisher List</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      publisher: {
        name: '',
        country: '',
        founded: '',
        publisher_name: '',
        authors: []
      }
    };
  },
  created() {
    const route = useRoute();
    this.findPublisher(route.params.id);
  },
  methods: {
    findPublisher(id) {
      fetch(`/.netlify/functions/publishers/${id}`, { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(result => {
          this.publisher = result;
          this.loadAuthors(result.author_ids);
        });
    },
    loadAuthors(authorIds) {
      fetch('/.netlify/functions/authors', { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(authors => {
          this.publisher.authors = authors.filter(author => authorIds.includes(String(author.id)));
        });
    }
  }
};
</script>

<style src="./css/publisherDetails.css"></style>

