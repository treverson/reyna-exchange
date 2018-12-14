<script>
    import axios from 'axios'

    export default {
        name: "VerifyEmail",
        mounted () {
            /* eslint-disable */

            axios.post('https://api.reyna.ml/api/Customers/email/verify', {
                emailToken: this.$route.params['token']
            })
            .then(response => {
                console.log(response)
                console.log(response.data['phoneToken'])
                if (response.status === 200) {
                    this.$router.push('/verify/phone/'+ response.data['phoneToken'])
                }
            })
            .catch(error => {
                console.log(error)
                this.$router.push('/auth/register')
            })
        }
    }
</script>
