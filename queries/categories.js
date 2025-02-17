const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/lib/convertData");
const { Category } = require("@/model/category-model");

export async function getCategories() {
  const categories = await Category.find({}).lean();

  return replaceMongoIdInArray(categories);
}

export async function getCategoryDetails(categoryId) {
  try {
    // console.log(category);
    const category = await Category.findById(categoryId).lean();
    return replaceMongoIdInObject(category);
  } catch (error) {
    throw new Error(error);
  }
}
