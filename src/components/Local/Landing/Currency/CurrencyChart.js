import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data () {
        return {
            gradient: null,
        }
    },
    props: ['mainColor'],
    methods: {
        generateColor: function (array, opacity) {
            return 'rgba( ' + array[0] + ', ' + array[1] + ', ' + array[2] + ', ' + opacity + ' )'
        }
    },
    mounted() {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

        this.gradient.addColorStop(0, this.generateColor(this.mainColor, 0.4))
        this.gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0)')
        this.gradient.addColorStop(1, 'rgba(255, 255, 255, 1)')

        this.renderChart(
            {
                labels: [150, 140, 149, 10, 180, 200, 40, 320, 11, 124, 232, 12, 42, 35, 35, 44],
                datasets: [
                    {
                        label: 'Data One',
                        borderColor: this.generateColor(this.mainColor, 1),
                        pointBackgroundColor: 'transparent',
                        borderWidth: 1.5,
                        pointBorderColor: 'transparent',
                        backgroundColor: this.gradient,
                        data: [150, 140, 149, 10, 180, 200, 40, 320, 11, 124, 232, 12, 42, 35, 35, 44]
                    }
                ],
            }, {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowLabels: false,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false
                },
                ticks: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false,
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        )
    }
}
