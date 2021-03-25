import evenBus from "@/utils/eventBus"
import debounce from "@/utils/debounce"
import defaultGif from "@/assets/loadingImg.gif"

let imgs = [];

function setImg() {

    for (const img of imgs) {
        const minHeight = 160;
        const rect = img.dom.getBoundingClientRect();
        const clientHeight = document.documentElement.clientHeight;
        if (rect.top > -minHeight && rect.top < clientHeight) {
            const tempImg = new Image();
            tempImg.onload = function () {
                img.dom.src = img.src;
                console.log(img.dom.src)
            }
            tempImg.src = img.src;

            imgs.filter((item) => item !== img)
        }

    }

}

function handleScroll() {
    setImg()
}
const debounceScroll = debounce(handleScroll);
evenBus.$on("lazyScroll", debounceScroll)


export default {
    inserted(el, binding) {
        el.src = defaultGif;
        imgs.push({
            dom: el,
            src: binding.value
        })
        console.log(imgs)
        evenBus.$emit("lazyScroll")
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    }
}