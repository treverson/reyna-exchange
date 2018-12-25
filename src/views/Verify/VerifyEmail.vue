<script>
    import axios from 'axios'

    export default {
        name: "VerifyEmail",
        mounted () {
            axios.post('https://api.reyna.ml/api/Customers/email/verify', {
                emailToken: this.$route.params['token']
            })
            .then(response => {
                if (response.status === 200) {
                    this.$router.push('/verify/phone/'+ response.data['phoneToken'])
                } else {
                    this.$router.push('/auth/register')
                }
            })
            .catch(() => {
                this.$router.push('/auth/register')
            })
        }
    }
</script>
