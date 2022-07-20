<script>
import AppModal from './AppModal.vue'
export default {
    name: "AppCardItem",
    props: ["image", "name", "newPrice", "oldPrice", "id"],
    components: {
        AppModal
    },
    data() {
        return {
            showModal: false
        }
    },
}
</script>

<template>
    <div class="cardItemContainer">
        <div class="containerBla">
            <div class="productImage">
                <img :src="image" :alt="name" />
            </div>
            <div class="browseModalContainer">
                <button @click="showModal = true" class="browseModalButton">Hızlı Gözat</button>
                <Teleport to="body">
                    <AppModal :show="showModal" @close="showModal = false" :image="image" :name="name"
                        :newPrice="newPrice" :oldPrice="oldPrice" :id="id" />
                </Teleport>
            </div>
            <div class="productSpec">
                <h4>{{ name }}</h4>
                <div>
                    <ins>{{ newPrice }}</ins>
                    <del>{{ oldPrice }}</del>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss">
.cardItemContainer {
    height: 100%;
    width: 100%;
    border: 1px solid black;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        .containerBla .browseModalButton {
            visibility: visible;

        }
    }

    .containerBla {
        position: relative;

        .browseModalContainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            /* Hide the element content, while height = 0 */
            visibility: hidden;

        }
    }




}

//     .browseModalContainer {
//         position: relative;
//         top: 50%;
//         left: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;

//         .browseModalButton {}
//     }
// }
</style>