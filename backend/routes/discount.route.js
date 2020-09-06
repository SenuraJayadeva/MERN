const router = require("express").Router();

const discountSchema = require("../Models/Discount");

// @url /discount/create-discount/:id
// @description create order

router.route("/create-discount").post((req, res, next) => {
  discountSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// @url /discount/get-discount
// @description retrieve

router.route("/").get((req, res) => {
  discountSchema
    .find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/").get((req, res) => {
//   discountSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// Get Single Discount
//router.route('/edit-discount/:id').get((req, res) => {
//discountSchema.findById(req.params.id, (error, data) => {
//if (error) {
//   return next(error)
//} else {
//res.json(data)
//}
//})
//});

// @url /discount/update-discount/:id
// @description update order by id

router.route("/update-discount/:id").put((req, res, next) => {
  discountSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Discount updated successfully !");
      }
    }
  );
});

// @url /discount/delete-discount/:id
// @description delete order by id

router.route("/delete-discount/:id").delete((req, res, next) => {
  discountSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
