const useAsyncHandler = (fun: Function) => async (data: any) => {
    try {
        return await fun(data);
    } catch (error) {
        return error;
    }
};
export default useAsyncHandler;
