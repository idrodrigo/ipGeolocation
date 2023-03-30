import { getIpInfo } from "../helpers/getIpInfo";
import { setLoadingInfo, setInfo } from "./appSlice";

export const startGettingInfo = (ip) => {
  return async (dispatch) => {
    dispatch(setLoadingInfo());
    dispatch(setInfo(await getIpInfo(ip)));
  };
};
