const express = require("express");
const cors=require("cors");
const router = express.Router();
const Week = require("../models/Week");
router.use(cors());
// Get All Route
router.get("/", async (req, res) => {
	 try {
         const  weeks = await Week.find({},{_id:0}).sort({week:1})
		     res.json(weeks)
		   } catch (err) {
			       res.status(500).json({message: err.message})
			     }
  }); 
//  // Get One Route
  router.get("/:id", getWeek, (req, res) => {
	  res.json(res.week);
  });

//getUser middleware
async function getWeek(req, res, next) {
  let week;
    try {
        week = await Week.findOne({week: req.params.id});
            if (week == null) {
                  return res.status(404).json({ message: "Cannot find the week" });
                      }
                        } catch (err) {
                            return res.status(500).json({ message: err.message });
                              }
                                res.week = week;
                                  next();
                                  }

//Patch One
/*
router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.name != null) {
      res.product.name = req.body.name;
        }
          if (req.body.description != null) {
              res.product.description = req.body.description;
              console.log(req.body)
                }
                  try {
                      const updatedProduct = res.product.save();
                          res.json(updatedProduct);
                            } catch (err) {
                                res.status(400).json({ message: res.product, error: err.message });
                                  }
                                  });
//Put One

router.put("/:id", getProduct, async (req, res) => {
  try {
    const updatedProduct = await res.product.set(req.body);
    res.json(updatedProduct);
      } catch (err) {
    res.status(400).json({ message: err.message });
      }
});
//  // Delete One Route
router.delete("/:id", getProduct, async (req, res) => {
	  try {
		      await res.product.deleteOne();
		      res.json({ message: "Product has been deleted"});
		    } catch (err) {
			        res.status(500).json({ message: err.message });
			      }
}); 
*/
module.exports = router;
