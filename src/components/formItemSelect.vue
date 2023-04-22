<template>
    <fieldset :class="['form-item-select', fieldsetClass]">
        <label :for="name" :class="['form-item-select__label', labelClass]">{{ label }}
            <select v-model="selected" :class="['form-item-select__element', itemClass]" :name="name" :id="name">
                <option v-for="(status, ix) in statuses" :key="ix" :value="status.value">{{ status.name }}</option>
            </select>
        </label>
    </fieldset>
</template>

<script>
export default {
    name: 'formItemSelect',
    props: {
        statuses: {
            type: Array,
            default: () => []
        },
        fieldsetClass: String,
        placeholder: String,
        labelClass: String,
        itemClass: String,
        label: String,
        name: String,
    },
    data: () => ({
        selected: null
    }),
    created() {
        this.selected = Object.values(this.statuses)[0].value
    }
}
</script>

<style scoped>
.form-item-select__element {
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: transparent;
    cursor: pointer;
}
</style>
