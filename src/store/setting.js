import getSetting from "@/api/setting"
import titleController from "@/utils/titleController"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }

    },
    actions: {
        async fetchSetting(ctx) {
            if (ctx.state.data != null) {
                return
            }
            ctx.commit("setLoading", true);
            let resp = await getSetting()
            console.log(resp)
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false)
            if (resp.favicon) {
                let link = document.querySelector("link");
                if (!link) {
                    link = document.createElement("link")
                    link.rel = "shortcut icon";
                    link.type = "images/x-icon";
                    link.href = resp.favicon;
                    document.querySelector("head").appendChild(link)
                } else {
                    link.rel = "shortcut icon";
                    link.type = "images/x-icon";
                    link.href = resp.favicon;
                }
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle)
            }

        }
    }

}