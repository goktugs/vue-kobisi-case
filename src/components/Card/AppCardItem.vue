<script>
import AppModal from './AppModal.vue'
export default {
    name: "AppCardItem",
    props: ["image", "name", "newPrice", "oldPrice", "id", "description"],
    components: {
        AppModal
    },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {

    }

}
</script>

<template>
    <div class="cardItemContainer">

        <div class="productImage">
            <img :src="image" :alt="name" />
        </div>
        <div class="browseModalContainer">
            <button @click="showModal = true" class="browseModalButton">Hızlı Gözat</button>
            <Teleport to="body">
                <AppModal @wheel.prevent @touchmove.prevent @scroll.prevent :show="showModal" @close="showModal = false"
                    :image="image" :name="name" :newPrice="newPrice" :oldPrice="oldPrice" :id="id"
                    :description="description" />
            </Teleport>
        </div>
        <div class="productSpec">
            <h4>{{ name }}</h4>
            <ins>{{ newPrice }}</ins>

        </div>

    </div>

</template>

<style lang="scss" >
@media only screen and (min-width: 1280px) {
    .cardItemContainer {
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;

        &:hover {
            .browseModalContainer {
                visibility: visible;
            }

            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px,
            rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px,
            rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        .productImage {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }


        .browseModalContainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            visibility: hidden;

            .browseModalButton {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 8px 24px;
                gap: 8px;
                border: 1px solid #1A1F16;
                border-radius: 11px;
                background-color: transparent;
                color: #EDEDED;
                cursor: pointer;

                &:hover {
                    background-color: #EDEDED;
                    color: black;

                }
            }



        }

        .productSpec {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-bottom: 20px;

            h4 {
                font-size: 30px;
            }

            ins {
                font-size: 20px;
            }
        }
    }
}

@media only screen and (max-width: 1280px) {
    .cardItemContainer {
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;

        &:hover {
            .browseModalContainer {
                visibility: visible;
            }
        }


        .productImage {
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }

        .browseModalContainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            visibility: hidden;

            .browseModalButton {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 8px 24px;
                gap: 8px;
                border: 1px solid #1A1F16;
                border-radius: 11px;
                background-color: transparent;
                color: #EDEDED;
                cursor: pointer;

                &:hover {
                    background-color: #EDEDED;
                    color: black;

                }
            }


        }

        .productSpec {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-bottom: 10px;

            h4 {
                font-size: 16px;
            }

            ins {
                font-size: 10px;
            }
        }

    }


}
</style>