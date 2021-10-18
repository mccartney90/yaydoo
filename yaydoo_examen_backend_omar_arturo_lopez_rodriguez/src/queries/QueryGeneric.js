export default class QueryGeneric {
   constructor(Model) {
      this.Model = Model;
   }
   async create(input) {
      return await this.Model.create(input);
   }

   async update(rowUpdate, conditions = {}) {
      let model;
      try {
         model = await this.Model.update(rowUpdate, { where: conditions });
      } catch (err) {
         console.log(err);
      }
      return model;
   }
   async findAll(q = {}) {
      return await this.Model.findAll(q);
   }

   async findById(id) {
      return this.Model.findById(id);
   }
   async findOne(inputWhere) {
      return this.Model.findOne(inputWhere);
   }
   async delete(inputWhere) {
      return this.Model.destroy(inputWhere);
   }
}
