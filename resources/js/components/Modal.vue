<template>
    <div v-if="show" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-lg px-4">
            <!--content-->
            <div class="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-center border-b justify-between p-4 border-solid border-gray-300 rounded-t">
                    <h3 class="text-2xl font-semibold">
                        <slot name="title">Modal Title</slot>
                    </h3>
                    <button
                        class="w-11 h-11 ml-auto bg-transparent border-0 text-gray-500 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                        v-on:click="cancel"
                    >
                        ×
                    </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                    <p class="my-4 text-gray-600 text-lg leading-relaxed">
                        <slot></slot>
                    </p>
                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button id="btn-cancel" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="cancel()">
                        <slot name="cancel">Close</slot>
                    </button>
                    <button id="btn-proceed" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="confirm">
                        <slot name="Confirm">Proceed</slot>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: {
        item: {type: Object},
        show: {type: Boolean},
    },
    data() {
        return {
            showModal: this.show,
        }
    },
    methods: {
        confirm: function() {
            this.$emit('confirm', {item: this.item})
        },
        cancel: function() {
            this.$emit('cancel', {item: this.item})
        },
    },
}
</script>
