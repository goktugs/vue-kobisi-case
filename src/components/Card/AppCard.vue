<script>
import productData from '@/assets/product-list.json';
import AppCardItem from './AppCardItem.vue'

export default {
    name: "AppCard",
    components: {
        AppCardItem
    },
    data() {
        return {
            products: productData,
        };
    },

};
</script>

<template>

    <div v-for="product in products" :key="product.id" class="cardContainer">
        <AppCardItem :image="product.image" :name="product.name" :newPrice="product.newPrice"
            :oldPrice="product.oldPrice" :id="product.id" :description="product.description" />
    </div>

</template>

<style lang="scss" >
@media only screen and (min-width: 768px) {
    .cardContainer {
        height: 100%;
        width: 100%;

        &:nth-of-type(1) {
            grid-area: 1 / 1 / span 2 / span 2;

            img {
                width: 40vh;
            }
        }

        &:nth-of-type(10) {
            grid-area: 3 / 3 / span 2 / span 2;

            img {
                width: 40vh;
            }
        }
    }
}

@media only screen and (max-width: 768px) {

    .cardContainer {
        height: 100%;
        width: 100%;
        overflow: auto;

        &:nth-of-type(1) {
            grid-area: 1 / 1 / span 2 / span 2;
        }

        &:nth-of-type(10) {
            grid-row: 7/span 2;
            grid-column: 1/span 2;
        }


    }
}
</style>
