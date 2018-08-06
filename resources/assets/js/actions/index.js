export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const setCampaignType = (product) => {
    return {type: 'GET_PRODUCTS', payload: product}
};
export const getDefaultData = (data) =>{
    return {type:'GET_LIST',payload:data}
};