<template>
    <button :class="objectClass" @click="onClickButton()">
        {{ objectLabel }}
    </button>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ResendCode",
        props: {
            isActive: {
                type: Boolean,
                required: true,
                default: false
            },
            phone: {
                type: [Number, String],
                required: true
            },
            token: {
                type: String,
                required: true
            },
            timerDelay: {
                type: Number,
                default: 3
            }
        },
        data () {
            return {
                timerLeft: 0 // Текущее время таймера(секунды)
            }
        },
        methods: {
            /*
             * Callback (on click)
             */
            onClickButton: function () {

                /*
                 * Кнопка работает, только при активном статусе
                 * Статус кнопки передается в входных данных
                 */
                if (this.isActive === true) {
                    /*
                     * Если таймер закончился
                     */
                    if (this.timerLeft === 0) {

                        this.timerLeft = this.timerDelay
                        this.setResendTimer(this.timerLeft, 1000)
                        this.onSubmitData()

                    }

                }

            },
            /*
             * Отправка SMS-сообщения
             */
            onSubmitData: function () {

                axios.post('https://api.reyna.ml/api/Customers/phone', {

                    phone: this.generationCorrectPhone(this.phone),
                    phoneToken: this.token

                }).then(response => {

                    this.$parent.$emit('response-send-code', response.data['token'].token)

                }).catch(error => {

                    this.$parent.$emit('response-send-code-error', error.response.data.error.message)

                })

            },
            /*
             * Генерация валидного номера телефона
             */
            generationCorrectPhone: function (incorrectPhone) {

                let correctPhone = null

                /*
                 * Если первый знак (+)
                 */
                if (incorrectPhone[0] === '+') {
                    correctPhone = incorrectPhone.replace(/\s/g, '').substr(1)
                }

                /*
                 * Если телефон без знака (+)
                 */
                else {
                    correctPhone = incorrectPhone.replace(/\s/g, '')
                }

                return parseInt(correctPhone)

            },
            /*
             * Обратный таймер
             */
            setResendTimer: function (time, tick) {

                let timerInterval = setInterval(function () {

                    this.timerLeft = this.timerLeft - 1

                    if (this.timerLeft === 0) {

                        this.timerLeft = 0
                        clearInterval(timerInterval)
                    }

                }.bind(this), tick)

            }
        },
        computed: {
            /*
             * Подстановка классов для объекта
             */
            objectClass: function () {
                return {
                    'resend-code': true,
                    'resend-code--isActive-false': this.isActive === false,
                    'resend-code--isActive-true': this.isActive === true,
                    'resend-code--isTimer-true': this.timerLeft > 0
                }
            },
            /*
             * Текст объекта
             */
            objectLabel: function () {

                let label = null

                /*
                 * Если таймер не активный
                 */
                if (!this.timerLeft) {
                    label = 'Send code'
                }

                /*
                 * Если таймер активный
                 */
                else if (this.timerLeft > 0) {
                    label = 'Resend code ('+ this.timerLeft +')'
                }

                return label
            }
        }
    }
</script>

<style lang="scss">
    @import "ResendCode";
</style>
