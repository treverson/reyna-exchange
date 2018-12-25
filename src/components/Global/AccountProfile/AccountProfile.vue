<template>
    <div :class="objectClass">
        <button @click="handlerDropDown()" :class="['account-profile__action']">
            <span :class="['account-profile__username']">
                {{ handlerUserName }}
            </span>
            <img :src="avatarUrl" :class="['account-profile__avatar']">
            <span :class="['icon-heavy-arrow-down', 'account-profile__arrow']"></span>
        </button>
        <div :class="{ 'account-profile__actions': true, 'account-profile__actions--dropDown-active': isDropDownMenu === true }">
            <div :class="['account-profile__address-wrap']">
                <span :class="['account-profile__address-title']">
                    My address
                </span>
                <span :class="['account-profile__address']">
                    TYQrtofWPEZCEdx...
                </span>
            </div>
            <router-link to="/account/settings" :class="['account-profile__link']">
                Settings
            </router-link>
            <router-link to="/account/log-out" :class="['account-profile__link']">
                Log out
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountProfile",
        props: {
            userName: {
                type: String,
                required: true
            },
            avatarUrl: {
                type: String,
                required: true
            },
            theme: {
                type: String,
                default: "light"
            }
        },
        data () {
            return {
                isDropDownMenu: false
            }
        },
        methods: {
            handlerDropDown: function () {
                this.isDropDownMenu = !this.isDropDownMenu
            }
        },
        computed: {
            objectClass: function () {
                return {
                    'account-profile': true,
                    'account-profile--theme-light': this.theme === 'light',
                    'account-profile--theme-dark': this.theme === 'dark',
                    'account-profile--dropDown-active': this.isDropDownMenu === true
                }
            },
            handlerUserName: function () {
                let fullUserName = this.userName
                let lessUserName = fullUserName.split(' ')[0] + ' ' + fullUserName.split(' ')[1][0] + '.'
                return lessUserName
            }
        }
    }
</script>

<style lang="scss">
    @import "AccountProfile";
</style>
