import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";
import api from "../token/axios";
import {useRouter} from "vue-router";

export const useServerListStore = defineStore("serverListStore", () => {

    const buttons = reactive([
        {
            channel_UID: 0,
            member_UID: 3,
            channel_title: "lobby",
            channel_icon_url: "/img/serverlist/discord_Icon.png",
            channel_type: 'lobby'
        },
    ])
    const router = useRouter();

    const getPathEndPoint = (computed(()=> {
        const path = router.currentRoute.value.href.split('/');
        console.log(path)
        let triumphant = null
        if (!(path[2] === 'lobby'|| path[2] === 'public' || path[2] === 'addServer'))
            triumphant = Number(path[2]);
        else
            triumphant = path[2]
        return triumphant;
    } ))

    const getEndPoint = computed(() => {
        const pathSegments = router.currentRoute.value.path.split('/');
        return pathSegments[2];
    });


    let btnResult = ref({
        endPoint: 'lobby',
    })

    async function initBtn() {
        await api.get("/myInfo/channelList")
            .then(({data}) => {
                const resultArray = data.result;
                resultArray.forEach(btn => {
                    buttons.push(btn)
                })
            })
    }
    async function leaveChannel(){
        let channelUID = router.currentRoute.value.path.split('/')[2]
        api.delete(`/channel/leaveChannel/${channelUID}`)
            .then(res=>{
                console.log(res)
                buttons.forEach((r,index)=>{
                    if (r.channel_UID === Number(channelUID)){
                        buttons.splice(index,1)
                    }
                })
            })
            .catch(()=>{
                console.log("fail")
            })

    }
    async function updateBtn(btn) {
        this.buttons.splice(1, 0, btn)
    }

    return {
        buttons,
        btnResult,
        getPathEndPoint,
        getEndPoint,
        leaveChannel,
        router,
        initBtn,
        updateBtn,
    }
})