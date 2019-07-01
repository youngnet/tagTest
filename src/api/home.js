import api from "../utils/request";

export function getData() {
    return api.post("/category/list/font", {
        before: "2019-07-01T09:36:39.165Z",
        categoryId: "string",
        courseDate: "string",
        enabled: false,
        id: "string",
        index: 0,
        isPage: false,
        last: "2019-07-01T09:36:39.165Z",
        name: "string",
        pageNo: 0,
        pageSize: 0,
        stacking: false,
        thirdParty: false,
        verifyState: 0,
        versionNo: "string",
        versionType: "string"
    });
}

export function getRole() {
    return api.post("/live/statis/all", {
        date: "2019-07-01 09:36:40",
        pageNo: 0,
        pageSize: 0
    });
}
