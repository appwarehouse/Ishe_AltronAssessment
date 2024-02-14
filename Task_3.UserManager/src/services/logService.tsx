import React from "react";

function log(error: any) {
  console.error(`An error occured at ${Date()}`, error);
}

export default {
  log,
};
