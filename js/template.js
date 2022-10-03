var template = (function() {
    return {
        hightLightCourse: function() {
            $.ajax({
                url:"https://light-workers-events-service.herokuapp.com/public/events",
                success: function(data) {
                    var eventsJson = { "events" :[]};
                    var eventList = data;
                    for (var event of eventList) {
                        var today = new Date().getTime();
                        var eventDate = new Date(event.startDate).getTime();
                        if (event && eventDate > today) {
                            var paramJson = {};
                            paramJson['event-img'] = event.brochureFilePath;
                            eventsJson.events.push(paramJson);
                        }
                    }
                    $.get("upcoming_courses_highlight_template.html", function(template) {
                        var result = Mustache.render(template, eventsJson);
                        $('#highlight-upcoming').html(result);

                    });

                }
            });
        }
    }
})();