<script>
import AppCard from './components/Card/AppCard.vue'
// import AppSearch from './components/Search/AppSearch.vue'

export default {
  name: 'App',
  components: {
    AppCard,
    // AppSearch,
  }

}
</script>

<template>

  <div class="container">
    <!-- <AppSearch /> -->
    <div class="appCardContainer">
      <AppCard />
    </div>
  </div>
</template>


<style lang="scss">
@media only screen and (min-width: 1280px) {
  .container {
    background-color: #EDEDED;
    max-width: 1400px;
    margin: 0 auto;

    .appCardContainer {
      height: 100%;
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media only screen and (max-width: 1280px) {
  .container {
    background-color: #EDEDED;
    width: 100%;

    .appCardContainer {
      height: 100%;
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
