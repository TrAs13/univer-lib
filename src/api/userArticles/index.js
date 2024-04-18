import $api from "@/api";

export async function getArticles(params) {
    try {
        const response = await $api.get(`/offerArticles?page=${params.page}&size=${params.size}`);
        return response.data
    } catch (err) {
        console.log(err)
        throw err;
    }
}
