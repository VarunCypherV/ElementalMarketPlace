//will run in nod3e environment in build time so we can do fun shit
exports.createPages= async ({graphql,actions}) => {
    const {data} = await graphql(`
        # //query for markdown route
    `);
}