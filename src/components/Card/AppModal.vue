<script>
import AppCounter from "../Counter/AppCounter";

export default {
    name: "AppCardItem",
    props: ["image", "name", "newPrice", "oldPrice", "id", "show", "description"],
    components: {
        AppCounter
    },
    data() {
        return {
        }
    },


}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modalBigImage">
                    <img :alt="name" :src="image" />
                </div>
                <div class="modalSmallImage">
                    <img :alt="name" :src="image" />
                    <img :alt="name" :src="image" />
                    <img :alt="name" :src="image" />
                </div>
                <div class="modalSpec">
                    <div>
                        <h4>{{ name }}</h4>
                        <h6>SKU:{{ id }}</h6>
                    </div>
                    <h5>{{ description }}</h5>
                    <div class="modalPrice">
                        <del>{{ oldPrice }}</del>
                        <ins>{{ newPrice }}</ins>
                    </div>
                    <div class="modalButtons">
                        <AppCounter />
                        <button class="addBasket">To Basket</button>
                    </div>
                </div>

                <button class="modalClose" @click="$emit('close')">X</button>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" >
@media only screen and (min-width: 1280px) {
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;

        .modal-container {
            width: 1000px;
            height: 50%;
            margin: 0px auto;
            padding: 20px 30px;
            background: #EDEDED;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .modalSmallImage {
                height: 100%;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                order: 1;

                & img {
                    width: 50px;

                    &:hover {
                        border: 1px solid black;
                        cursor: pointer;
                    }
                }
            }

            .modalBigImage {
                flex-grow: 2;
                order: 2;
            }

            .modalSpec {
                margin-top: 50px;
                height: 100%;
                flex-grow: 2;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;
                gap: 20px;
                order: 3;

                h4 {
                    font-size: 30px;
                }

                h6 {
                    font-size: 15px;
                }

                .modalPrice {
                    margin: 30px 0;
                    display: flex;
                    flex-direction: column;

                    del {
                        font-size: 20px;
                        margin-bottom: 5px;
                    }

                    ins {
                        font-size: 40px;
                    }
                }

                .modalButtons {
                    display: flex;

                    .addBasket {
                        background: #1A1F16;
                        border-radius: 14px;
                        padding: 8px 24px;
                        gap: 8px;
                        font-family: 'Cabin';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 13px;
                        color: #fff;
                        width: 107px;
                        height: 40px;
                        margin-left: 20px;
                        cursor: pointer;
                    }
                }
            }

            .modalClose {
                position: absolute;
                top: 0;
                right: 0%;
                margin: 10px 10px 0 0;
                background-color: #1A1F16;
                color: white;
                padding: 5px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
}

@media only screen and (max-width: 1280px) {
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;

        .modal-container {
            width: 400px;
            height: 80%;
            margin: 0px auto;
            padding: 10px 15px;
            background: #EDEDED;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            overflow-y: none;

            .modalBigImage {
                flex-grow: 2;
            }

            .modalSmallImage {
                height: auto;
                margin-bottom: 30px;
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 20px;
                width: 100%;

                & img {
                    width: 50px;

                    &:hover {
                        border: 1px solid black;
                        cursor: pointer;
                        margin-bottom: -2px;
                    }
                }
            }



            .modalSpec {
                height: 100%;
                flex-grow: 2;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;


                h4 {
                    font-size: 30px;
                }

                h6 {
                    font-size: 15px;
                }

                h5 {
                    margin-top: 20px;
                }

                .modalPrice {
                    margin: 30px 0;
                    display: flex;
                    flex-direction: column;

                    del {
                        font-size: 10px;
                        margin-bottom: 5px;
                    }

                    ins {
                        font-size: 20px;
                    }


                }

                .modalButtons {
                    display: flex;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    justify-content: center;
                    align-items: center;

                    .addBasket {
                        background: #1A1F16;
                        padding: 8px 24px;
                        gap: 8px;
                        font-family: 'Cabin';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 13px;
                        color: #fff;
                        width: 65%;
                        height: 40px;

                        cursor: pointer;
                    }
                }


            }

            .modalClose {
                position: absolute;
                top: 0;
                right: 0%;
                margin: 10px 10px 0 0;
                background-color: #1A1F16;
                color: white;
                padding: 5px;
                text-align: center;
                cursor: pointer;
            }
        }


    }
}
</style>