<template>
    <fieldset :class="['form-item-search', fieldsetClass]">
        <label :for="name" :class="['form-item-search__label', labelClass]">{{ label }}
            <input
                v-model="value"
                :class="['form-item-search__input', itemClass]"
                :placeholder="placeholder"
                :required="required"
                :type="type"
                :name="name"
                :id="name"
            >
        </label>
    </fieldset>
</template>

<script>
export default {
    name: 'formItemSearch',
    props: {
        searchValue: {
            type: String,
            required: true
        },
        fieldsetClass: String,
        placeholder: String,
        labelClass: String,
        itemClass: String,
        required: Boolean,
        label: String,
        type: String,
        name: String,
    },
    data: () => ({
        value: null
    }),
    created() {
        this.value = this.searchValue;
    }
}
</script>

<style scoped>
.form-item-search__input,
.form-item-search__input::placeholder {
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.form-item-search__input::placeholder {
    color: var(--color-light-gray);
}

.form-item-search__input {
    color: var(--color-dark-gray);
    padding: 7px 10px 7px 16px;
    background-color: var(--color-white);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
}
.form-item-search__input,
.form-item-search__label {
    display: flex;
    flex-basis: 100%;
}
</style>
