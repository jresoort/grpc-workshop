/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.nl.toefel.trains.InfraComponent');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nl.toefel.trains.InfraComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nl.toefel.trains.InfraComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.nl.toefel.trains.InfraComponent.displayName = 'proto.nl.toefel.trains.InfraComponent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nl.toefel.trains.InfraComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.nl.toefel.trains.InfraComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nl.toefel.trains.InfraComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nl.toefel.trains.InfraComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_char: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nl.toefel.trains.InfraComponent}
 */
proto.nl.toefel.trains.InfraComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nl.toefel.trains.InfraComponent;
  return proto.nl.toefel.trains.InfraComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nl.toefel.trains.InfraComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nl.toefel.trains.InfraComponent}
 */
proto.nl.toefel.trains.InfraComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nl.toefel.trains.InfraComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nl.toefel.trains.InfraComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nl.toefel.trains.InfraComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nl.toefel.trains.InfraComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getChar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.nl.toefel.trains.InfraComponent.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.nl.toefel.trains.InfraComponent.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.nl.toefel.trains.InfraComponent.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.nl.toefel.trains.InfraComponent.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string char = 3;
 * @return {string}
 */
proto.nl.toefel.trains.InfraComponent.prototype.getChar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.nl.toefel.trains.InfraComponent.prototype.setChar = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};

