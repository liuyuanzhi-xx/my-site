export default function (refValue) {
    return {
        data() {
            return {
                isShowTop: false
            }
        },
        methods: {
            handleMainScroll() {
                if (this.$refs[refValue].scrollTop >= 500) {
                    this.isShowTop = true
                } else {
                    this.isShowTop = false
                }
            },
            toTop() {
                if (this.$refs[refValue].scrollTop >= 500) {
                    this.$refs[refValue].scrollTop = 0;
                }
            }
        },
        mounted() {
            this.$bus.$on("toTop", this.toTop)
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll)
        },
        beforedestroy() {
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)
            this.$bus.$off("toTop", this.toTop)
        }
    }

}