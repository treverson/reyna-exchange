<template>
    <div :class="{ 'lang-switcher': true, 'lang-switcher--isActive-yes': isLanguagesListOpen === true }">

        <!-- object -->
        <div class="lang-switcher__object">

            <!-- item -->
            <button
                    v-for="item in languagesList"
                    v-bind:key="item.id"
                    @click="changeCurrentLanguageByID(item.id)"
                    :class="{ 'lang-switcher__item': true, 'lang-switcher__item--isActive-yes': currentLanguage === item.id }"
            >{{ item.language }}</button>
            <!-- item end -->

        </div>
        <!-- object end -->

        <!-- current lang -->
        <div
                @click="showLanguagesList()"
                :class="{ 'lang-switcher__current': true }"
        >{{ languagesList[currentLanguage].language }}</div>
        <!-- current lang end -->

    </div>
</template>

<script>
    import Languages from './LanguageList'

    export default {
        name: "LangSwitcher",
        props: {
            /*
             *  Выбранный язые по умолчанию
             *  type: Number
             */
            defaultLanguage: {
                type: Number,
                default: 0
            }
        },

        data () {
            return {
                isLanguagesListOpen: false,
                currentLanguage: this.defaultLanguage,
                languagesList: Languages
            }
        },

        methods: {
            /*
             *  Функция изменяет текущий выбранный язык
             */
            changeCurrentLanguageByID: function (id) {
                this.currentLanguage = id
                this.showLanguagesList()
            },

            /*
             *  Функция изменяет текущий выбранный язык
             */
            showLanguagesList: function () {
                this.isLanguagesListOpen = !this.isLanguagesListOpen
            }
        }
    }
</script>

<style lang="scss">
    @import "LangSwitcher";
</style>
