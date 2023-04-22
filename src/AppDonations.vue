<template>
    <div id="app" class="donation">
        <donationHeader title="Donations" :statuses="statuses"/>
    </div>
</template>

<script>
import DonationHeader from "@/components/DonationHeader.vue";

export default {
    name: 'AppDonations',
    components: {DonationHeader},
    data: () => ({
        statuses: [
            {
                name: 'All statuses',
                value: 'all'
            },
            {
                name: 'First status',
                value: 'first'
            },
            {
                name: 'Second status',
                value: 'second'
            }
        ]
    })
}
</script>

<style>
body {
    font-family: 'Work Sans', Arial, sans-serif;
    margin: 54px 0 0 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    --color-gray: #FAFAFA;
    --color-dark-gray: #2F2F30;
    --color-light-gray: #6C6D6F;
    --border-color: #DBDCDE;
    --color-white: white;
    --color-green: #00A651;
    --color-green-light: rgba(0, 166, 81, 0.25);
}

::selection {
    background-color: var(--color-green-light);
}

fieldset,
input,
select {
    padding: 0;
    margin: 0;
    border: 0;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
    appearance:none;
    -webkit-appearance:none;
    width: 12px;
    height: 12px;
    margin: 0;
    background-size: contain;
    cursor: pointer;
}


input:focus,
input:focus-visible,
input:focus-within,
select:focus,
select:focus-visible,
select:focus-within {
    outline-color: var(--color-green-light);
}

.donation {
    max-width: 1224px;
    margin: 0 auto;
}
</style>
