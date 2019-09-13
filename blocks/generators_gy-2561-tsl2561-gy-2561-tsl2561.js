Blockly.JavaScript['tsl2561'] = function(block) {
  var variable_tsl25611 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('TSL25611'), Blockly.Variables.NAME_TYPE);
  var text_tsl2561add = block.getFieldValue('TSL2561ADD');
  var value_tsl2561sda = Blockly.JavaScript.valueToCode(block, 'TSL2561SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tsl2561scl = Blockly.JavaScript.valueToCode(block, 'TSL2561SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include "TSL2561.h"#END

#VARIABLE
TSL2561 ${variable_tsl25611}(${text_tsl2561add});
#END
Wire.begin(${value_tsl2561sda},${value_tsl2561scl});\n
if (${variable_tsl25611}.begin()) {
    Serial.println("Found sensor");
  } else {
    Serial.println("No sensor?");
    while (1);
  }
${variable_tsl25611}.setGain(TSL2561_GAIN_16X);
${variable_tsl25611}.setTiming(TSL2561_INTEGRATIONTIME_13MS);
\n
`;
  return code;
};

Blockly.JavaScript['tsl2561getlux'] = function(block) {
  var variable_tsl25611 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('TSL25611'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_tsl25611}.calculateLux(0,0)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};