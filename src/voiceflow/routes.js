const { Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getVoiceflow);
router.get("/:id", controller.getVoiceflowById);
router.post("/", controller.addVoiceflowEntry);
router.put("/:id", controller.updateEntry);
router.delete("/:id", controller.deleteEntry);


module.exports = router;