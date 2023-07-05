import {defineStore} from "pinia";
import {reactive} from "vue";
import api from "../token/axios";


//id 고유아이디
//state 상태 (현재코드에선 초기상태 0으로 리턴해줌)
export const useLobbyStore = defineStore("lobbyStore", () => {

    let user = reactive({
        email: '',
        username: '',
        role: '',
        join_date: '',
        user_icon_url: '',
        user_description: ''
    })

    function updateMyInfo() {
        api.get('/myInfo/lobby')
            .then(({data}) => {
                const userInfo = data.result
                user.email = userInfo.email
                user.username = userInfo.username
                user.role = userInfo.role
                user.join_date = userInfo.join_date
                user.user_icon_url = "data:image/png;base64,"+userInfo.user_icon_url
                user.user_description = userInfo.user_description
                localStorage.setItem('user',JSON.stringify(user))
            })
    }



    return {
        user,
        updateMyInfo
    }
});