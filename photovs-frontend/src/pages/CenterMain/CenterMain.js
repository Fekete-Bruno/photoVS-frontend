
import { Center } from "../../components/Main";
import usePolls from "../../hooks/usePolls";
import { Title } from "../../layouts/StyledContainer";
import PollsBox from "./PollsBox";

export default function CenterMain({page}) {
    const { polls, pollsLoading} = usePolls();

    return(
        <Center page={page}>
            <Title>Recent Polls</Title>
            <PollsBox polls={polls} pollsLoading={pollsLoading} />
        </Center>
    );
}