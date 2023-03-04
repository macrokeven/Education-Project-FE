import axios, {AxiosRequestConfig} from 'axios';
import md5 from 'js-md5';
import 'element-plus/es/components/message/style/css'
import LTTips from "@/LTUI/LTTips";

export interface Response {
    status: number,
    data: object
}

const axiosRequestConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
    },
}
const LetoyService = {
    async authRequest(url: string, params: object, data: object) {
        const axiosRequestConfigAuth: AxiosRequestConfig = {
            headers: {
                "Content-Type": 'application/json;charset=UTF-8',
                "Authorization": sessionStorage.getItem('systemToken') || ""
            },
        }
        axiosRequestConfigAuth.params = params
        const post = () => {
            return new Promise(resolve => {
                axios.post("/api" + url, data, axiosRequestConfigAuth)
                    .then((response: Response) => {
                        if (response.status === 200) {
                            resolve(response.data);
                        } else {
                            LTTips.createLTTips({
                                label: "网络异常！",
                                type: 'warning',
                                duration: 1500,
                                top: false,
                                showCover: false
                            })
                            resolve(null);
                        }
                    });
            });
        };
        return await post();
    },
    async noAuthRequest(url: string, params: object, data: object) {
        const axiosRequestConfigAuth: AxiosRequestConfig = {
            headers: {
                "Content-Type": 'application/json;charset=UTF-8'
            },
        }
        axiosRequestConfigAuth.params = params
        const post = () => {
            return new Promise(resolve => {
                axios.post("/api" + url, data, axiosRequestConfig)
                    .then((response: Response) => {
                        if (response.status === 200) {
                            resolve(response.data);
                        } else {
                            LTTips.createLTTips({
                                label: "网络异常！", type: 'warning', duration: 1500, top: false,
                                showCover: false
                            })
                            resolve(null);
                        }
                    });
            });
        };
        return await post();
    },
    login(username: string, password: string) {
        return this.noAuthRequest('/login', {
            username,
            password: md5(password)
        }, {});
    }
};
export default LetoyService;
