/**
 * @fileoverview FTC robot blocks related to AdafruitBNO055IMU.Parameters.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// adafruitBNO055IMUParametersIdentifier
// The following are defined in vars.js:
// createNonEditableField
// getPropertyColor
// functionColor

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['AccelUnit', 'AccelUnit'],
        ['AccelerationIntegrationAlgorithm', 'AccelerationIntegrationAlgorithm'],
        ['AngleUnit', 'AngleUnit'],
        ['CalibrationDataFile', 'CalibrationDataFile'],
        ['I2cAddress7Bit', 'I2cAddress7Bit'],
        ['I2cAddress8Bit', 'I2cAddress8Bit'],
        ['LoggingEnabled', 'LoggingEnabled'],
        ['LoggingTag', 'LoggingTag'],
        ['SensorMode', 'SensorMode'],
        ['TempUnit', 'TempUnit'],
    ];
    this.setOutput(true); // no type, for compatibility
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['AccelUnit',
            'The AccelUnit of the given AdafruitBNO055IMU.Parameters.'],
        ['AccelerationIntegrationAlgorithm',
            'The AccelerationIntegrationAlgorithm of the given AdafruitBNO055IMU.Parameters.'],
        ['AngleUnit',
            'The AngleUnit of the given AdafruitBNO055IMU.Parameters.'],
        ['CalibrationDataFile',
            'The calibration data file for the given AdafruitBNO055IMU.Parameters.'],
        ['I2cAddress7Bit', 'The 7 bit I2C address.'],
        ['I2cAddress8Bit', 'The 8 bit I2C address.'],
        ['LoggingEnabled',
            'True if logging is enabled in the given AdafruitBNO055IMU.Parameters, false otherwise.'],
        ['LoggingTag',
            'The logging tag of the given AdafruitBNO055IMU.Parameters.'],
        ['SensorMode',
            'The SensorMode of the given AdafruitBNO055IMU.Parameters.'],
        ['TempUnit',
            'The TempUnit of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'] = function(block) {
  var property = block.getFieldValue('PROP');
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var code = adafruitBNO055IMUParametersIdentifier + '.get' + property + '(' +
      adafruitBNO055IMUParameters + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_AccelUnit'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['AccelUnit', 'AccelUnit'],
    ];
    this.setOutput(true, 'AccelUnit');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['AccelUnit',
            'The AccelUnit of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_AccelUnit'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_AccelerationIntegrationAlgorithm'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['AccelerationIntegrationAlgorithm', 'AccelerationIntegrationAlgorithm'],
    ];
    this.setOutput(true, 'AccelerationIntegrationAlgorithm');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['AccelerationIntegrationAlgorithm',
            'The AccelerationIntegrationAlgorithm of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_AccelerationIntegrationAlgorithm'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_AngleUnit'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['AngleUnit', 'AngleUnit'],
    ];
    this.setOutput(true, 'AngleUnit');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['AngleUnit',
            'The AngleUnit of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_AngleUnit'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_String'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['CalibrationDataFile', 'CalibrationDataFile'],
        ['LoggingTag', 'LoggingTag'],
    ];
    this.setOutput(true, 'String');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['CalibrationDataFile',
            'The calibration data file for the given AdafruitBNO055IMU.Parameters.'],
        ['LoggingTag',
            'The logging tag of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_String'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_Number'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['I2cAddress7Bit', 'I2cAddress7Bit'],
        ['I2cAddress8Bit', 'I2cAddress8Bit'],
    ];
    this.setOutput(true, 'Number');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['I2cAddress7Bit', 'The 7 bit I2C address.'],
        ['I2cAddress8Bit', 'The 8 bit I2C address.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_Number'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_Boolean'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['LoggingEnabled', 'LoggingEnabled'],
    ];
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['LoggingEnabled',
            'True if logging is enabled in the given AdafruitBNO055IMU.Parameters, false otherwise.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_Boolean'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_SensorMode'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['SensorMode', 'SensorMode'],
    ];
    this.setOutput(true, 'SensorMode');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['SensorMode',
            'The SensorMode of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_SensorMode'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

Blockly.Blocks['adafruitBNO055IMUParameters_getProperty_TempUnit'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['TempUnit', 'TempUnit'],
    ];
    this.setOutput(true, 'TempUnit');
    this.appendDummyInput()
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['TempUnit',
            'The TempUnit of the given AdafruitBNO055IMU.Parameters.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty_TempUnit'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_getProperty'];

// Functions

Blockly.Blocks['adafruitBNO055IMUParameters_create'] = {
  init: function() {
    this.setOutput(true, 'AdafruitBNO055IMU.Parameters');
    this.appendDummyInput()
        .appendField('new')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'));
    this.setColour(functionColor);
    this.setTooltip('Create a new AdafruitBNO055IMU.Parameters object.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_create'] = function(block) {
  var code = adafruitBNO055IMUParametersIdentifier + '.create()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['adafruitBNO055IMUParameters_setAccelUnit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setAccelUnit'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ACCEL_UNIT').setCheck('AccelUnit')
        .appendField('accelUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the AccelUnit for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setAccelUnit'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var accelUnit = Blockly.JavaScript.valueToCode(
      block, 'ACCEL_UNIT', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setAccelUnit(' +
      adafruitBNO055IMUParameters + ', ' + accelUnit + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setAccelerationIntegrationAlgorithm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setAccelerationIntegrationAlgorithm'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ACCELERATION_INTEGRATION_ALGORITHM').setCheck('AccelerationIntegrationAlgorithm')
        .appendField('accelerationIntegrationAlgorithm')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the acceleration integration algorithm for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setAccelerationIntegrationAlgorithm'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var accelerationIntegrationAlgorithm = Blockly.JavaScript.valueToCode(
      block, 'ACCELERATION_INTEGRATION_ALGORITHM', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setAccelerationIntegrationAlgorithm(' +
      adafruitBNO055IMUParameters + ', ' + accelerationIntegrationAlgorithm + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setAngleUnit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setAngleUnit'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ANGLE_UNIT').setCheck('AngleUnit')
        .appendField('angleUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the AngleUnit for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setAngleUnit'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var angleUnit = Blockly.JavaScript.valueToCode(
      block, 'ANGLE_UNIT', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setAngleUnit(' +
      adafruitBNO055IMUParameters + ', ' + angleUnit + ');\n';
};


Blockly.Blocks['adafruitBNO055IMUParameters_setCalibrationDataFile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setCalibrationDataFile'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CALIBRATION_DATA_FILE').setCheck('String')
        .appendField('calibrationDataFile')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the calibration data file for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setCalibrationDataFile'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var calibrationDataFile = Blockly.JavaScript.valueToCode(
      block, 'CALIBRATION_DATA_FILE', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setCalibrationDataFile(' +
      adafruitBNO055IMUParameters + ', ' + calibrationDataFile + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setI2cAddress7Bit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setI2cAddress7Bit'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('I2C_ADDRESS_7_BIT').setCheck('Number')
        .appendField('i2cAddress7Bit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the 7 bit I2C address.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setI2cAddress7Bit'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var i2cAddress7Bit = Blockly.JavaScript.valueToCode(
      block, 'I2C_ADDRESS_7_BIT', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setI2cAddress7Bit(' +
      adafruitBNO055IMUParameters + ', ' + i2cAddress7Bit + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setI2cAddress8Bit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setI2cAddress8Bit'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('I2C_ADDRESS_8_BIT').setCheck('Number')
        .appendField('i2cAddress8Bit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the 8 bit I2C address.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setI2cAddress8Bit'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var i2cAddress8Bit = Blockly.JavaScript.valueToCode(
      block, 'I2C_ADDRESS_8_BIT', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setI2cAddress8Bit(' +
      adafruitBNO055IMUParameters + ', ' + i2cAddress8Bit + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setLoggingEnabled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setLoggingEnabled'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('LOGGING_ENABLED').setCheck('Boolean')
        .appendField('loggingEnabled')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets whether logging is enabled.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setLoggingEnabled'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var loggingEnabled = Blockly.JavaScript.valueToCode(
      block, 'LOGGING_ENABLED', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setLoggingEnabled(' +
      adafruitBNO055IMUParameters + ', ' + loggingEnabled + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setLoggingTag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setLoggingTag'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('LOGGING_TAG').setCheck('String')
        .appendField('loggingTag')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the logging tag for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setLoggingTag'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var loggingTag = Blockly.JavaScript.valueToCode(
      block, 'LOGGING_TAG', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setLoggingTag(' +
      adafruitBNO055IMUParameters + ', ' + loggingTag + ');\n';
};
Blockly.Blocks['adafruitBNO055IMUParameters_setSensorMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setSensorMode'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('SENSOR_MODE').setCheck('SensorMode')
        .appendField('sensorMode')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the SensorMode for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setSensorMode'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var sensorMode = Blockly.JavaScript.valueToCode(
      block, 'SENSOR_MODE', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setSensorMode(' +
      adafruitBNO055IMUParameters + ', ' + sensorMode + ');\n';
};

Blockly.Blocks['adafruitBNO055IMUParameters_setTempUnit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('AdafruitBNO055IMU.Parameters'))
        .appendField('.')
        .appendField(createNonEditableField('setTempUnit'));
    this.appendValueInput('ADAFRUIT_BNO055IMU_PARAMETERS').setCheck('AdafruitBNO055IMU.Parameters')
        .appendField('adafruitBNO055IMUParameters')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('TEMP_UNIT').setCheck('TempUnit')
        .appendField('tempUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the TempUnit for the Adafruit BNO055IMU sensor.');
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_setTempUnit'] = function(block) {
  var adafruitBNO055IMUParameters = Blockly.JavaScript.valueToCode(
      block, 'ADAFRUIT_BNO055IMU_PARAMETERS', Blockly.JavaScript.ORDER_NONE);
  var tempUnit = Blockly.JavaScript.valueToCode(
      block, 'TEMP_UNIT', Blockly.JavaScript.ORDER_NONE);
  return adafruitBNO055IMUParametersIdentifier + '.setTempUnit(' +
      adafruitBNO055IMUParameters + ', ' + tempUnit + ');\n';
};

// Enums

Blockly.Blocks['adafruitBNO055IMUParameters_enum_accelUnit'] = {
  init: function() {
    var ACCEL_UNIT_CHOICES = [
        ['METERS_PERSEC_PERSEC', 'METERS_PERSEC_PERSEC'],
        ['MILLI_EARTH_GRAVITY', 'MILLI_EARTH_GRAVITY'],
    ];
    this.setOutput(true); // no type, for compatibility
    this.appendDummyInput()
        .appendField('AccelUnit')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(ACCEL_UNIT_CHOICES), 'ACCEL_UNIT');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['METERS_PERSEC_PERSEC', 'The AccelUnit value METERS_PERSEC_PERSEC.'],
        ['MILLI_EARTH_GRAVITY', 'The AccelUnit value MILLI_EARTH_GRAVITY.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('ACCEL_UNIT');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_enum_accelUnit'] = function(block) {
  var code = '"' + block.getFieldValue('ACCEL_UNIT') + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['adafruitBNO055IMUParameters_typedEnum_accelUnit'] = {
  init: function() {
    var ACCEL_UNIT_CHOICES = [
        ['METERS_PERSEC_PERSEC', 'METERS_PERSEC_PERSEC'],
        ['MILLI_EARTH_GRAVITY', 'MILLI_EARTH_GRAVITY'],
    ];
    this.setOutput(true, 'AccelUnit');
    this.appendDummyInput()
        .appendField('AccelUnit')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(ACCEL_UNIT_CHOICES), 'ACCEL_UNIT');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['METERS_PERSEC_PERSEC', 'The AccelUnit value METERS_PERSEC_PERSEC.'],
        ['MILLI_EARTH_GRAVITY', 'The AccelUnit value MILLI_EARTH_GRAVITY.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('ACCEL_UNIT');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_typedEnum_accelUnit'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_enum_accelUnit'];

Blockly.Blocks['adafruitBNO055IMUParameters_enum_accelerationIntegrationAlgorithm'] = {
  init: function() {
    var ACCELERATION_INTEGRATION_ALGORITHM_CHOICES = [
        ['NAIVE', 'NAIVE'],
        ['JUST_LOGGING', 'JUST_LOGGING'],
    ];
    this.setOutput(true, 'AccelerationIntegrationAlgorithm');
    this.appendDummyInput()
        .appendField('AccelerationIntegrationAlgorithm')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(ACCELERATION_INTEGRATION_ALGORITHM_CHOICES),
            'ACCELERATION_INTEGRATION_ALGORITHM');
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['NAIVE',
            'Use a very naive acceleration integration algorithm that just does the basic physics.'],
        ['JUST_LOGGING',
            'Use an acceleration integration algorithm that doesn\'t actually integrate ' +
            'accelerations, but merely reports them in the logcat log.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('ACCELERATION_INTEGRATION_ALGORITHM');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_enum_accelerationIntegrationAlgorithm'] = function(block) {
  var code = '"' + block.getFieldValue('ACCELERATION_INTEGRATION_ALGORITHM') + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['adafruitBNO055IMUParameters_typedEnum_accelerationIntegrationAlgorithm'] =
    Blockly.Blocks['adafruitBNO055IMUParameters_enum_accelerationIntegrationAlgorithm'];

Blockly.JavaScript['adafruitBNO055IMUParameters_typedEnum_accelerationIntegrationAlgorithm'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_enum_accelerationIntegrationAlgorithm'];

Blockly.Blocks['adafruitBNO055IMUParameters_enum_sensorMode'] = {
  init: function() {
    var SENSOR_MODE_CHOICES = [
        ['ACCONLY', 'ACCONLY'],
        ['MAGONLY', 'MAGONLY'],
        ['GYRONLY', 'GYRONLY'],
        ['ACCMAG', 'ACCMAG'],
        ['ACCGYRO', 'ACCGYRO'],
        ['MAGGYRO', 'MAGGYRO'],
        ['AMG', 'AMG'],
        ['IMU', 'IMU'],
        ['COMPASS', 'COMPASS'],
        ['M4G', 'M4G'],
        ['NDOF_FMC_OFF', 'NDOF_FMC_OFF'],
        ['NDOF', 'NDOF'],
    ];
    this.setOutput(true, 'SensorMode');
    this.appendDummyInput()
        .appendField('SensorMode')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(SENSOR_MODE_CHOICES),
            'SENSOR_MODE');
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['ACCONLY', 'The BNO055 Operation Mode ACCONLY'],
        ['MAGONLY', 'The BNO055 Operation Mode MAGONLY'],
        ['GYRONLY', 'The BNO055 Operation Mode GYRONLY'],
        ['ACCMAG', 'The BNO055 Operation Mode ACCMAG'],
        ['ACCGYRO', 'The BNO055 Operation Mode ACCGYRO'],
        ['MAGGYRO', 'The BNO055 Operation Mode MAGGYRO'],
        ['AMG', 'The BNO055 Operation Mode AMG'],
        ['IMU', 'The BNO055 Operation Mode IMU'],
        ['COMPASS', 'The BNO055 Operation Mode COMPASS'],
        ['M4G', 'The BNO055 Operation Mode M4G'],
        ['NDOF_FMC_OFF', 'The BNO055 Operation Mode NDOF_FMC_OFF'],
        ['NDOF', 'The BNO055 Operation Mode NDOF'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('SENSOR_MODE');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['adafruitBNO055IMUParameters_enum_sensorMode'] = function(block) {
  var code = '"' + block.getFieldValue('SENSOR_MODE') + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['adafruitBNO055IMUParameters_typedEnum_sensorMode'] =
    Blockly.Blocks['adafruitBNO055IMUParameters_enum_sensorMode'];

Blockly.JavaScript['adafruitBNO055IMUParameters_typedEnum_sensorMode'] =
    Blockly.JavaScript['adafruitBNO055IMUParameters_enum_sensorMode'];
