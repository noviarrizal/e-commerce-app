import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzcwN2M2MDMxZTFlMGRlMzNmZjliMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzg2MzUxNiwiZXhwIjoxNjQ4MTIyNzE2fQ.zIvG_nAG9wyuOw_Cmw6gDT8KbxCOFOuS-FZJXtpgu4c";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
