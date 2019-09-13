Blockly.Blocks['tsl2561'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("TSL25611", null,["Plugin.TSL2561"], ["Plugin.TSL2561"]), "TSL25611")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x39"), "TSL2561ADD");
    this.appendValueInput("TSL2561SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("TSL2561SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['tsl2561getlux'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("TSL25611", null ,["Plugin.TSL2561"], ["Plugin.TSL2561"]), "TSL25611")
        .appendField("TSL2561 read LUX");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};