import axios from "axios";
import popMessage from "@/utils/popMessage";

const ins = axios.create(); // 创建一个axios的实例
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        popMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500,
        });
        return null;
    }
    return resp.data.data;
});

export default ins;