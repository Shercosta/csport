import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchIPRequest,
  fetchIPSuccess,
  fetchIPFailure,
  fetchIP,
} from "./Action";
import config from "../../config";

const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore([thunk.withExtraArgument(mockAxios)]);

describe("Actions", () => {
  afterEach(() => {
    mockAxios.restore();
  });

  it("Requesting user IP", () => {
    const expectedAction = { type: "FETCH_IP_REQUEST" };
    expect(fetchIPRequest()).toEqual(expectedAction);
  });

  it("Requesting IP Successfully", () => {
    const data = { ip: config.baseUrl };
    const expectedAction = {
      type: "FETCH_IP_SUCCESS",
      payload: data,
    };
    expect(fetchIPSuccess(data)).toEqual(expectedAction);
  });

  it("Requesting IP Failure", () => {
    const error = "Error fetching IP";
    const expectedAction = {
      type: "FETCH_IP_FAILURE",
      payload: error,
    };
    expect(fetchIPFailure(error)).toEqual(expectedAction);
  });

  it("Sending Fetch IP (Request IP Success)", async () => {
    const data = { ip: config.baseUrl };
    mockAxios.onGet("http://ip-api.com/json/").reply(200, data);
    const expectedActions = [
      { type: "FETCH_IP_REQUEST" },
      { type: "FETCH_IP_SUCCESS", payload: data },
    ];
    const store = mockStore();
    await store.dispatch(fetchIP());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("Sending Fetch IP (Request IP Failure)", async () => {
    const error = "Request failed with status code 404";
    const response = { status: "fail", message: error };
    mockAxios.onGet("http://ip-api.com/json/1.1.1.1").replyOnce(404, response);
    const expectedActions = [
      { type: "FETCH_IP_REQUEST" },
      { type: "FETCH_IP_FAILURE", payload: error },
    ];
    const store = mockStore();
    await store.dispatch(fetchIP());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
