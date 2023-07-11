function createNewEventWithMeet() {
  for(var i = 1; i <=14; i++ ){
      const calendarId = "ccsh@apps.ccsh.ptc.edu.tw";
      const resource = {
        start: { dateTime: "2021-08-25T10:00:00.000+08:00" },
        end: { dateTime: "2021-08-25T12:00:00.000+08:00" },
        attendees: [{ email: "ccsh@apps.ccsh.ptc.edu.tw" }],
        conferenceData: {
          createRequest: {
            requestId: "20210825_ccsh1"+i,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
        summary: "1年"+ i +"班線上導師時間",
        description: "1年"+ i +"班線上導師時間",
      };

    const res = Calendar.Events.insert(resource, calendarId, {
      conferenceDataVersion: 1,
    });
    console.log("成功");
  }
}
