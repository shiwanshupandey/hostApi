const Product = require("../models/products");


const getAllProducts = async (req, res) => {
    const {id, company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;
    }

    if (featured){
        queryObject.featured = featured;
    }

    if (name){
        queryObject.name = { $regex: name, $options: "i" };
    }

    if(id){
        queryObject.id = id;
    }

    let apiData = Product.find(queryObject);

    if (sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  // page = 2;
  // limit = 3;
  // skip =  1 * 3 = 3

  apiData = apiData.skip(skip).limit(limit);

    const Products = await apiData;
    res.status(200).json({Products, nbHits: Products.length });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "i am getAllProductsTesting"})
};

module.exports = {getAllProducts,getAllProductsTesting}; 
