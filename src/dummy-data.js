const dummyData = [{
    "data": {
        copyright: "Bryan Goff",
        date: "2020-03-18",
        "explanation": "What's happening behind those clouds?  Although the scene may appear somehow supernatural, nothing more unusual is occurring than a Sun setting on the other side of the sky.  Pictured here are anticrepuscular rays.  To understand them, start by picturing common crepuscular rays that are seen any time that sunlight pours though scattered clouds. Now although sunlight indeed travels along straight lines, the projections of these lines onto the spherical sky are great circles.  Therefore, the crepuscular rays from a setting (or rising) sun will appear to re-converge on the other side of the sky.  At the anti-solar point 180 degrees around from the Sun, they are referred to as anticrepuscular rays.  Featured here is a particularly striking display of anticrepuscular rays photographed in 2016 over Dry Tortugas National Park in Florida, USA.",
        hdurl: "https://apod.nasa.gov/apod/image/2003/AntiCrepRays_Goff_3072.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Anticrepuscular Rays over Florida",
        url: "https://apod.nasa.gov/apod/image/2003/AntiCrepRays_Goff_960.jpg"
    },
    status: 200,
    statusText: "OK",
    headers: {
        contenttype: "application/json"
    },
    config: {
        url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*"
        },
        transformRequest: [
            null
        ],
        transformResponse: [
            null
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1
    },
    request: {}
}]

export default dummyData