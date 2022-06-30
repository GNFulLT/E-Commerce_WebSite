const resolvers = {
    Query:{
        hello:() => "sasad",
        getCategoryByID:()=>{return{id:0,categoryName:"sa"}}
    }
}

export default resolvers;