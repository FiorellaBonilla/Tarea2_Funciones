<template>
  <div class="container">
    <div class="author-details">
      <h2>{{ author.name }}</h2>
      <form class="form-layout">
        <div class="row">
          <div class="form-group">
            <label for="nationalityInput">Nationality</label>
            <input class="form-control" type="text" v-model="author.nationality" disabled>
          </div>
          <div class="form-group">
            <label for="occupationInput">Occupation</label>
            <input class="form-control" type="text" v-model="author.occupation" disabled>
          </div>
          
        </div>

        <h3>Books</h3>
        <ul class="book-list">
          <li v-for="book in books" :key="book.id">
            <router-link :to="'/book/show/' + book.id" class="link">
              {{ book.title }}
            </router-link>
          </li>
        </ul>

        <router-link class="button-back" to="/author">Back to Author List</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {},
      books: []
    };
  },
  methods: {
    getAuthor() {
      const authorId = this.$route.params.id;
      fetch(`/.netlify/functions/authors/${authorId}`, { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(result => {
          this.author = result;
          this.loadBooks();
        });
    },
    loadBooks() {
      fetch('/.netlify/functions/books', { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(result => {
          this.books = result.filter(book => this.author.book_ids.includes(book.id));
        });
    }
  },
  mounted() {
    this.getAuthor();
  }
};
</script>

<style src="./css/AuthorDetails.css"></style>
