import { baseUrl } from "../app/shared/baseUrl";

export const mapImageUrl = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image,
        }
    });
};