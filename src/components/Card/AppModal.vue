<script>

export default {
    name: "AppCardItem",
    props: ["image", "name", "newPrice", "oldPrice", "id", "show"],

}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modalSmallImage">
                    <img alt="name" src="image" />
                    <img alt="name" src="image" />
                    <img alt="name" src="image" />
                </div>

                <div class="modalBigImage">
                    <img alt="name" src="image" />
                </div>>

                <div class="modalSpec">

                    <h1>{{ name }}</h1>

                    <!-- <slot name="footer">
                        default footer
                    
                    </slot> -->
                </div>

                <button class="modal-default-button" @click="$emit('close')">OK</button>
            </div>
        </div>
    </Transition>
</template>

<style scoped >
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
}



.modal-container {
    width: 1000px;
    height: 50vh;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}
</style>