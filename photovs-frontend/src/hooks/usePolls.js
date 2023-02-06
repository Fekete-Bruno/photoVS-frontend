import useAsync from "./useAsync";
import useToken from "./useToken";
import * as pollApi from "./../services/pollsApi";

export default function usePolls () {
    const token = useToken();
    const {
        data: polls,
        loading: pollsLoading,
        error: pollsError,
        act: getPolls
    } = useAsync(() => pollApi.getAllPolls(token));

    return{
        polls,
        pollsLoading,
        pollsError,
        getPolls
    };
}