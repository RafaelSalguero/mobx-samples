import { delay } from '../../tools';

export const obtenerCustomer = async () => {
    await delay(10);
    return {
        name: "Rafa"
    };
}