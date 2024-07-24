// @ts-ignore
export function useFlowbite(callback) {
    //init de estilos de flowbite
    if (process.client) {
        import('flowbite').then((flowbite) => {
            callback(flowbite);
        });
    }
}