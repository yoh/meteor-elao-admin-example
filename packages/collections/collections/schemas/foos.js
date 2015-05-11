Schema.foos = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 149
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000,
        autoform: {rows: 5}
    }
});
