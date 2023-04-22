<template>
    <div class="donation-header">
        <h1 v-if="title" class="donation-header__title">{{ title }}</h1>

        <form class="donation-header__bottom">
            <div class="donation-header__tools">
                <formItemSearch
                    fieldset-class="donation-header__fieldset"
                    name="searchDonation"
                    placeholder="Search"
                    type="search"
                    :search-value="searchValue"/>

                <formItemSelect
                    v-if="statuses.length > 0"
                    fieldset-class="donation-header__fieldset"
                    name="donationSelect"
                    :statuses="statuses"/>
            </div>
        </form>
    </div>
</template>

<script>
import FormItemSearch from "@/components/formItemSearch.vue";
import FormItemSelect from "@/components/formItemSelect.vue";

export default {
    name: 'DonationHeader',
    components: {FormItemSelect, FormItemSearch},
    props: {
        title: String,
        statuses: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        searchValue: ''
    })
}
</script>

<style scoped>
.donation-header {
    flex-basis: 100%;
    background-color: var(--color-white);
    border: 1px solid var(--border-color);
    box-shadow: 1px 3px 3px rgba(62, 63, 64, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.donation-header__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    color: var(--color-dark-gray);
    margin: 0;
    padding: 28px 32px;
}

.donation-header__bottom {
    padding: 16px 32px;
    background-color: var(--color-gray);
    border-top: 1px solid var(--border-color);
}

.donation-header__tools {
    display: flex;
    align-items: center;
    gap: 0 40px;
}

.donation-header__fieldset {
    flex-basis: 100%;
    max-width: 338px;
}

.donation-header__fieldset_search {

}
</style>
