<template>
  <div class="container">
    <div class="publisher-list">
      <h2>{{ title }}</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Founded</th>
            <th>Publisher Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="publisher in publishers" :key="publisher.id">
            <td>{{ publisher.name }}</td>
            <td>{{ publisher.country }}</td>
            <td>{{ publisher.founded }}</td>
            <td>{{ publisher.publisher_name }}</td>
            <td>
              <router-link class="button show-button" :to="'/publisher/show/' + publisher.id">
                Show
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publishers: [],
      title: 'Publisher List'
    }
  },
  methods: {
    allPublisher() {
      fetch('/.netlify/functions/publishers', { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(result => {
          this.publishers = result;
        })
    }
  },
  mounted() {
    this.allPublisher();
  }
}
</script>

<style src="./css/publisherList.css"></style>

