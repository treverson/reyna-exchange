<template>
    <a :href="href" class="learn-more"><slot></slot></a>
</template>

<script>
export default {
  name: 'LearnMore',
  props: {
    href: {
      type: String,
      required: true,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
    .learn-more {
        color: #EB5353;
        line-height: 26px;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;

        position: relative;
        outline: none;

        transition: .15s ease;

        &:after {
            content: "";
            position: absolute;

            right: -15px;
            bottom: 0;
            top: 5px;
            margin: auto;

            width: 7px;
            height: 12px;
            display: inline-block;
            transition: .15s ease;

            background-repeat: no-repeat;
            background-image: url('../../assets/img/arrow-right.svg');
        }

        &:hover {
            color: #ca4747;

            &:after {
                right: -20px;
            }
        }

        &:focus {
            color: #9c3737;
            &:after {
                opacity: 0;
                right: -30px;
            }
        }
    }
</style>
