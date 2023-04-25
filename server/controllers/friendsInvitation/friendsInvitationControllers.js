const { postInvite } = require("./postInvite");
const { postAccept } = require("./postaccept");
const { postReject } = require("./postreject");

exports.controllers = {
  postInvite,
  postAccept,
  postReject,
};
