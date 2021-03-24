import getComponentRootDom from "./getComponentRootDom.js"
import Icon from "@/components/Icon"
import styles from "./popMessage.module.less"
/**
* popMessage
* @param {} options - 数字

*/
export default function (options = {}) {
    let content = options.content || "";
    let type = options.type || "info";
    let duration = options.duration || 2000;
    let container = options.container || document.body;
    const iconDom = getComponentRootDom(Icon, {
        type,
    });
    let div = document.createElement('div');
    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><sapn>${content}</span>`;

    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = `${styles.message} ${typeClassName}`;
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }

    }
    container.appendChild(div)
    // 浏览器强行渲染
    div.clientHeight; // 导致reflow

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    // 等一段时间，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener(
            "transitionend",
            function () {
                div.remove();
                // 运行回调函数
                options.callback && options.callback();
            }, {
                once: true
            }
        );
    }, duration);
}