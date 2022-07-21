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

<style lang="scss">
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

// .smallCard {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//     .productImage {
//         background-color: white;
//     }

//     .productSpec {
//         display: flex;
//         align-items: center;
//         justify-content: center;

//         h4 {
//             font-weight: 500;
//             font-size: 20px;
//         }
//     }

// }
</style>
