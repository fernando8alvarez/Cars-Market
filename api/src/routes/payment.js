const express = require("express");
const router = express.Router();
const cors=require("cors")
const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());
router.use(cors())
 router.get("/paymentdate", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
}); 

router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
