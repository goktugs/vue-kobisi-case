<template>

    <div class="addCounter">
        <div class="minus" @click="mpminus()">-</div>


        <input type="number" v-model="newValue" disabled id="#input" />


        <div class="plus" id="#plus" @click="mpplus()">+</div>
    </div>
</template>


<script>
export default {

    data() {
        return {
            newValue: 0,
            min: 0,
            max: 10
        }
    },
    methods: {
        mpplus: function () {
            if (this.newValue < this.max) {
                this.newValue = this.newValue + 1;
            } else {
                alert("You cant add more than 10")
            }

        },
        mpminus: function () {
            if ((this.newValue) > this.min) {
                this.newValue = this.newValue - 1;
            }


        }
    },
    watch: {
        value: {
            handler: function (newVal) {
                this.newValue = newVal;
            }
        }
    }

}

</script>


<style lang="scss">
@media only screen and (max-width:1280px) {
    .addCounter {
        background: #1A1F16;
        padding: 8px 24px;
        gap: 8px;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
        width: 35%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        border-right: none;


        .minus {
            flex-grow: 1;
            font-size: 20px;
            cursor: pointer;


        }

        .plus {
            flex-grow: 1;
            font-size: 20px;
            cursor: pointer;
        }



        input {
            width: 40px;
            background-color: #1A1F16;
            border: none;
            text-align: center;
            color: white;
            flex-grow: 2;
            margin: 0 auto;


        }


    }
}

@media only screen and (min-width: 1280px) {
    .addCounter {
        background: #1A1F16;
        border-radius: 14px;
        padding: 8px 24px;
        gap: 8px;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
        width: 107px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .minus {
            flex-grow: 1;
            font-size: 20px;
            cursor: pointer;
        }

        .plus {
            flex-grow: 1;
            font-size: 20px;
            cursor: pointer;
        }

        input {
            width: 40px;
            background-color: #1A1F16;
            border: none;
            text-align: center;
            color: white;
            flex-grow: 2;
            margin: 0 auto;
        }
    }
}
</style>