<template>
    <div class="TerminalPrimaryContent">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TerminalPrimaryContent",
        props: {
            type: {
                type: String,
                default: 'default'
            }
        },
        mounted () {
            /* eslint-disable */

            if (this.type === 'tab') {

                let self = this

                /*
                 * Скрытие лишних (terminal-primary-tab-item) при загрузке
                 */
                self.$children.forEach((component) => {

                    if (component.$props['tabId'] !== self.$parent.$children[0].$props['currentTab']) {
                        return component.$el.hidden = true
                    }

                })

                /*
                 * Вывод компонента (terminal-primary-tab-item), по ID текущей вкладки
                 */
                self.$parent.$on('current-tab-item', (response) => {

                    self.$children.forEach((component) => {

                        if (component.$props['tabId'] === response) {
                            return component.$el.hidden = false
                        }

                        else {
                            return component.$el.hidden = true
                        }

                    })

                })

            }

        }
    }
</script>

<style lang="scss">
    @import "TerminalPrimaryContent";
</style>
