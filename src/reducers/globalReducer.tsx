const reducer = (state: any, action: any) => {
  return { ...state, detailedShow: action.payload };
};

export default reducer;
