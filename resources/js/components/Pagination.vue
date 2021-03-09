<template>
    <div class="container w-full flex select-none">
        <nav v-if="total > 1" class="container w-full flex select-none">
            <a
                class="page-button p-3 cursor-pointer"
                :class="{'disabled' : selected === 1}"
                aria-label="Previous"
                @click.prevent="clickHandler(1)"
            >
                &laquo;
            </a>
            <a
                class="page-button p-3 cursor-pointer"
                :class="{'disabled' : selected === 1}"
                aria-label="Previous"
                @click.prevent="clickHandler(prevPage)"
            >
                &#10096;
            </a>
            <a
                v-for="(page,key,index) in pages" :key="index"
                class="page-button p-3 cursor-pointer text-center"
                :class="{'bg-green-500 text-white' : page == selected}"
                @click.prevent="clickHandler(page)"
            >
                {{ page }}
            </a>
            <a
                class="page-button cursor-pointer px-4 py-3"
                :class="{'cursor-not-allowed': selected === total}"
                aria-label="Next"
                @click.prevent="clickHandler(nextPage)"
            >
                &#10097;
            </a>
            <a
                class="page-button p-3 cursor-pointer"
                :class="{'disabled': selected === total}"
                aria-label="Next"
                @click.prevent="clickHandler(total)"
            >
                &raquo;
            </a>
        </nav>
        <slot></slot>
    </div>
</template>
<script>

export default {
    name: 'Pagination',
    props: {
        perPage: {
            type: Number, required: true,
        },
        total: {
            type: Number, required: true, default: 0,
        },
        selected: {type: Number, required: true, default: 1},
        clickHandler: {
            type: Function, required: true,
        },
    },
    computed: {

        allPages() {
            if (this.total === 0) return []
            let out = [];
            for (let i = 1; i <= this.total; i++) {
                out.push(i)
            }
            return out
        },
        remainingPages() {
            if (this.total === 0) return []
            let remaining = this.allPages.filter(page => page >= this.selected)
            return remaining.length >= this.perPage
                ? remaining
                : this.allPages.slice(Math.max(this.allPages.length - this.perPage, 1))
        },
        activePages() {
            let out = []
            for (let i = this.selected; out.length <= this.remainingPages.length; i++) {
                out.push(i)
                if (out.length === this.perPage) {
                    return out
                }
            }
            return out
        },
        pages() {
            if (this.perPage === 1) {
                return [this.selected]
            }
            if (this.allPages.length <= this.perPage) {
                return this.allPages
            }
            if (this.remainingPages.length === this.perPage) {
                return this.remainingPages
            }
            return this.activePages
        },
        nextPage() {
            return (this.selected < this.total) ? this.selected + 1 : this.selected
        },
        prevPage() {
            return (this.selected > 0) ? this.selected - 1 : this.selected;
        },
    },
}
</script>

<style>

/*
todo: Create pagination where controls change page for the next portion of n page
*/
.page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
}

</style>
