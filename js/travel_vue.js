const app = new Vue ({
    el: '#vue-travel',
    data(){
        return {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false
        }
    },
    methods: {
        // Change to a different picture when user hovers over
        hoverImage1(){
            if (this.hover1) {
                return 'images/contadora_island_beach.jpg'
            } else {
                return 'images/hotel_mar_y_oro.jpg'
            }
        },
        hoverImage2(){
            if (this.hover2) {
                return 'images/panama_canal_selfie.jpg'
            } else {
                return 'images/panama_canal.jpg'
            }
        },
        hoverImage3(){
            if (this.hover3) {
                return 'images/the_narrows.jpg'
            } else {
                return 'images/me_in_zion.jpg'
            }
        },
        hoverImage4(){
            if (this.hover4) {
                return 'images/bryce_canyon_2.jpg'
            } else {
                return 'images/bryce_canyon.jpg'
            }
        }
    }
})