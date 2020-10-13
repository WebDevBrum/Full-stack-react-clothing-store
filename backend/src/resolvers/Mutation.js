const Mutations = {
  createItem(parent, args, ctx, info) {
    //TODO: check if they are logged in

    const item = ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);
  }
  // createDog(parent, args, ctx, info) {
  //   //create a dog
  //   console.log(args);
  // }

};

module.exports = Mutations;
