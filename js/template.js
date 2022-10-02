var template = (function() {
    return {
        hightLightCourse: function() {
            $.ajax({
                url:"/templates/poster.txt",
                success: function(data) {
                    var eventsJson = { "events" :[]};
                    var eventList = data.split('#@#');
                    for (var event of eventList) {
                        var params = event.replace(/[\r\n]/g, "").split('#');
                        var today = new Date().getTime();
                        var eventDate = new Date(params[0]).getTime();
                        if (event && event.trim != "" && eventDate > today) {
                            var paramJson = {};
                            paramJson['event-img'] = params[2];
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