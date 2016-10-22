import DS from 'ember-data';

export default DS.Model.extend({
  lastMove: DS.attr("string", {defaultValue: "O"}),
  field1: DS.attr("string", { defaultValue: ""}),
  field2: DS.attr("string", { defaultValue: ""}),
  field3: DS.attr("string", { defaultValue: ""}),
  field4: DS.attr("string", { defaultValue: ""}),
  field5: DS.attr("string", { defaultValue: ""}),
  field6: DS.attr("string", { defaultValue: ""}),
  field7: DS.attr("string", { defaultValue: ""}),
  field8: DS.attr("string", { defaultValue: ""}),
  field9: DS.attr("string", { defaultValue: ""})
});
