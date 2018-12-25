<template>
    <div :class="objectClass" @click="changeHamburgerState">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
  name: 'HamburgerComponent',
  data () {
    return {
      state: false
    }
  },
  methods: {
    changeHamburgerState: function () {
      this.state = !this.state
      this.$emit('onClick')
    }
  },
  computed: {
    objectClass: function () {
      return {
        'hamburger': true,
        'hamburger--state_active': this.state
      }
    }
  }
}
</script>

<style lang="scss">
    .hamburger {
        width: 21px;
        height: 12px;

        position: relative;
        display: none;
        cursor: pointer;

        span {
            position: absolute;

            width: 21px;
            height: 2px;

            display: inline-block;

            background-color: #fff;
            border-radius: 20px;

            transition: .15s ease;

            &:first-child {
                top: 0;
            }

            &:nth-child(2) {
                top: 0;
                bottom: 0;
                margin: auto;
            }

            &:last-child {
                bottom: 0;
            }
        }

        &--state_active {
            span {
                &:first-child {
                    transform: translateY(5px) rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:last-child {
                    transform: translateY(-5px) rotate(-45deg);
                }
                background-color: rgba(51, 51, 51, 0.4);
            }
        }
    }

    @media (max-width: 992px) {
        .hamburger {
            display: inline-block;
            margin: 0 0 0 17px;
        }
    }
</style>
