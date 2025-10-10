var vg_1 = "js/barchart.vg.json";
// { actions : false } to hide the "Open in Vega" etc... actions (the three dots that show)
vegaEmbed("#barchart", vg_1, { actions : false }).then(function(result) {
}).catch(console.error);

var vg_2 = "js/int_students_by_cob_2024.vg.json";
// { actions : false } to hide the "Open in Vega" etc... actions (the three dots that show)
vegaEmbed("#int_students_by_cob", vg_2, { actions : false }).then(function(result) {
}).catch(console.error);

var vg_3 = "js/bach_or_higher_by_state.vg.json";
// { actions : false } to hide the "Open in Vega" etc... actions (the three dots that show)
vegaEmbed("#pop_degree_by_state", vg_3, { actions : false }).then(function(result) {
}).catch(console.error);