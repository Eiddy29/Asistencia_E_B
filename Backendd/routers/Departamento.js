const express = require('express');
const router = express.Router();
const departamentomodel = require("../modelo/Departamentomodelo.js");

router.get("/", departamentomodel.consultarDetalle);
router.post("/", departamentomodel.ingresar);

router.route("/:codigo")
  .get(departamentomodel.consultarDetalle);

module.exports = router;