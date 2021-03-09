<template>
    <div
        class="border relative flex flex-col break-words mb-6 shadow-lg rounded overflow-x-auto"
        :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']"
    >
        <!-- Table Heading -->
        <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
                <h3
                    class="w-1/2 font-semibold text-lg"
                    :class="[color === 'light' ? 'text-gray-800' : 'text-white']"
                >
                    <slot name="title"></slot>
                </h3>
                <div class="w-1/2 flex justify-end">
                    <slot name="controls"></slot>
                </div>
            </div>
        </div>
        <!-- Projects table -->
        <table class="w-full items-center bg-transparent border-collapse" :style="{width: `${minWidth}px`}">
            <thead>
            <tr>
                <th
                    v-for="(header, index) in headers" :key="index"
                    class="px-4 align-middle border border-solid border-l-0 border-r-0 border-gray-200 py-3 text-xs text-left text-gray-600 uppercase whitespace-no-wrap font-semibold bg-gray-100"
                    :class="typeof header === 'object' && header.class ? header.class : []"
                    :colspan="typeof header === 'object' ? header.span  : null"
                >
                    {{ typeof header === 'object' ? header.value : header }}
                </th>
            </tr>
            </thead>
            <tbody>
            <slot></slot>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    data() {
        return {};
    },
    props: {
        headers: {
            type: Array,
            default: [],
        },
        minWidth: {
            type: Number,
        },
        color: {
            default: 'light',
            validator: function(value) {
                // The value must match one of these strings
                return ['light', 'dark'].indexOf(value) !== -1;
            },
        },
    },
};
</script>
