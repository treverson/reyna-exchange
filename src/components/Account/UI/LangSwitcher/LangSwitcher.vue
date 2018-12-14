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

    .lang-switcher {
        position: relative;

        max-width: 49px;
        width: 100%;
    }

    .lang-switcher--isActive-yes {

        .lang-switcher__current {
            color: #000;

            border-top-left-radius: 0;
            border-top-right-radius: 0;

            background-color: #fff;
        }

        .lang-switcher__object {
            visibility: visible;
            opacity: 1;
        }
    }

    .lang-switcher__object {
        width: 100%;

        position: absolute;
        z-index: 998;
        overflow: hidden;

        bottom: 18px;

        display: flex;
        flex-direction: column;

        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-color: #FFFFFF;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10);

        visibility: hidden;
        opacity: 0;

        transition: .25s eaes;
    }

    .lang-switcher__item {
        width: 100%;

        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        padding: 0;
        text-align: center;

        color: rgba(0, 0, 0, 0.43);
        font-size: 10px;
        line-height: 18px;

        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #F5EBEB;
        }
    }

    .lang-switcher__current {
        position: relative;

        cursor: pointer;

        z-index: 999;

        color: rgba(0, 0, 0, 0.43);
        font-size: 10px;
        line-height: 18px;

        padding: 0;
        text-align: center;

        border-radius: 3px;

        background-color: #FFCBCB;

        transition: .15s ease;

        &:hover,
        &:focus {
            background-color: #fff;
        }
    }

</style>
