<template>
    <main-layout class="bg-gray-100">
        <div class="flex flex-wrap p-8">
            <modal
                id="modal-delete"
                :show="modalDel"
                @confirm="del(item, true)"
                @cancel="modalDel=false"
                :item="item"
            >
                <template slot="title">Delete {{ item.value }}</template>
                Are you sure you want to delete this item?
            </modal>
            <modal
                id="modal-update"
                :show="modalUpdate"
                @confirm="update(item, true)"
                @cancel="modalUpdate=false"
                :item="item"
            >
                <div class="flex">
                    <div for="name" class="w-40 pr-2">Picture:</div>
                    <div class="w-full pb-2">
                        <img
                            v-if="item.image"
                            :src="item.image.src"
                            width="150"
                            height="150"
                            class="w-full"
                            alt=""
                        />
                    </div>
                </div>
                <base-input
                    label="Name"
                    labelClass="w-40 pr-2"
                    i-class="name-button border rounded w-full px-3 mb-1"
                    v-model="item.value"
                ></base-input>
                <base-input
                    label="Category"
                    labelClass="w-40 pr-2"
                    i-class="border rounded w-full px-3 mb-1"
                    v-model="item.category"
                ></base-input>
                <base-input
                    label="Units"
                    labelClass="w-40 pr-2"
                    i-class="border rounded w-full px-3 mb-1"
                    v-model="item.units"
                ></base-input>
                <base-input
                    label="Unit Price"
                    label-class="w-40 pr-2"
                    i-class="border rounded w-full px-3 mb-1"
                    v-model="item.unitPrice"
                ></base-input>
                <base-input
                    label="Stock Price"
                    label-class="w-40 pr-2"
                    i-class="border rounded w-full px-3 mb-1"
                    v-model="item.unitPrice * item.units | currency"
                ></base-input>
                <template slot="title" class="btn-edit">Edit {{ item.value }}</template>
                <template slot="Confirm" class="btn-save">Save</template>
            </modal>
            <card-table :headers="headers" :min-width="800">
                <template v-slot:title>
                    Products Table
                </template>
                <template v-slot:controls>
                    <span class="pr-2">Pages:</span>
                    <select class="w-12 bg-white">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </template>
                <tr v-for="item in products" :key="item.id">
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
                    >
                        <img
                            v-if="'image' in item"
                            :src="item.image.src"
                            :class="item.image.class"
                            :alt="item.image.alt"
                        />
                        <span
                            class="ml-3 font-bold text-gray-700"
                        >
                                       {{ item.value }}
                                    </span>
                    </td>
                    <td
                        class="border-t-0 align-middlepace-no-wrap p-4"
                    >
                        {{ item.category }}
                    </td>
                    <td
                        class="border-t-0 align-middle border-l-0 border-r-0 text-xs text-center whitespace-no-wrap p-4"
                    >
                        {{ item.units }}
                    </td>
                    <td
                        class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right"
                    >
                        {{ item.unitPrice | currency }}
                    </td>
                    <td
                        class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right"
                    >
                        {{ item.units * item.unitPrice | currency }}
                    </td>
                    <td
                        class="border-t-0  w-16 select-none pr-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-right"
                        colspan="2"
                        style="width:140px;"
                    >
                        <button class="btn-update h-10 w-16 text-white bg-green-500 mb-1" @click="update(item)">
                            <fa-icon
                                class="text-white"
                                :icon="faCheckSquare"
                                size="lg"
                            ></fa-icon>
                            Edit
                        </button>
                        <button id="btn-del" class="h-10 px-2 text-white bg-danger" @click="del(item)">
                            <fa-icon
                                class="text-white"
                                :icon="faTrash"
                                size="lg"
                            ></fa-icon>
                            Delete
                        </button>
                    </td>
                </tr>
            </card-table>
            <pagination
                class="padding-top-1"
                :click-handler="pageSwitch"
                :per-page="pagination.perPage"
                :selected="pagination.selected"
                :total="pagination.total"
            >
            </pagination>
        </div>
    </main-layout>
</template>

<script lang="ts">
import CardTable from '@/ts/components/Cards/CardTable.vue'
import {ActionTypes} from "@/ts/store/action-types"
import {faTrash, faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {Component, Vue} from 'vue-property-decorator'
import {ProductType} from "@/ts/store/store";
import {State, Action} from 'vuex-class'

@Component({
    components: {
        CardTable
    }
})

export default class Products extends Vue {
    private faTrash = faTrash
    private faCheckSquare = faCheckSquare
    private modalDel = false
    private modalUpdate = false
    private item: ProductType = {category: "", id: 0, image: {class: "", src: ""}, unitPrice: 0, units: 0, value: ""}
    private headers = [
        'Name',
        'Category',
        {value: 'Units', class: 'text-center'},
        {value: 'Unit Price', class: 'text-right'},
        {value: 'Stock Price', class: 'text-right'},
        {value: 'Actions', class: 'text-right', colspan: 2}
    ]
    private pagination = {
        selected: 1,
        perPage: 5,
        total: 50,
    }

    @State('products') products
    @Action(ActionTypes.ITEM_UPDATE) ITEM_UPDATE
    @Action(ActionTypes.ITEM_DELETE) ITEM_DELETE
    @Action(ActionTypes.ITEM_CREATE) ITEM_CREATE

    update(item, confirmed = false) {
        if (!confirmed) {
            this.modalUpdate = true
            this.item = 'id' in this.item && this.item.id === item.id
                ? this.item
                : this.clone(item)
        } else {
            this.modalUpdate = false
            this.ITEM_UPDATE({loc: this.$options.name?.toLowerCase(), item})
        }
    }

    del(item, confirmed = false) {
        if (confirmed) {
            this.modalDel = false
            this.ITEM_DELETE({loc: this.$options.name?.toLowerCase(), item})
        } else {
            this.item = item
            this.modalDel = true
        }
    }

    pageSwitch(page) {
        this.pagination.selected = page
    }

}
</script>
