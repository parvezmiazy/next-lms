const { replaceMongoIdInArray } = require("@/lib/convertData");
const { Category } = require("@/model/category-model");

export async function getCategories() {
  const categories = await Category.find({}).lean();

  return replaceMongoIdInArray(categories);
}
