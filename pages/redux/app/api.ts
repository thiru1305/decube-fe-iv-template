import { API_ROUTES } from "@/pages/routes/api"
import { api } from "@/AxiosUtils"

export async function movieList(data: any = {}): Promise<any> {
    const result = await api(API_ROUTES.MVLIST, 'GET', data)
    return result;
};

export async function movieDetail(data: any = {}): Promise<any> {
    const result = await api(data.id ?? API_ROUTES.MVDETAIL, 'GET', data)
    return result;
};
