<template>
    <!--        <label for="name" class="w-40 pr-2">Name:</label>-->
    <!--        <input-->
    <!--            id="name"-->
    <!--            class="border rounded w-full px-3 mb-1"-->
    <!--            v-model="item.value"-->
    <!--        >-->
    <div class="flex">
        <label
            v-if="labelOn"
            :for="label"
            :class="labelClass"
        >
            {{ label | startCase }}:
        </label>
        <input
            v-bind="$attrs"
            :id="label"
            :type="type"
            :placeholder="label | startCase"
            :title="label"
            :value="value"
            :class="iClass"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>
<script>

export default {
    props: {
        value: null,
        labelOn: {type: Boolean, default: true},
        label: {type: String},
        iClass: {type: String},
        labelClass: {type: String},
        type: {type: String, default: 'text'},
    },
    components: {
        listeners() {
            console.log(this.$listeners)
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value),
            }
        },
    },
}
</script>
