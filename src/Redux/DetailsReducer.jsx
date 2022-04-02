const stateXemChiTiet = {
    xemChiTiet: []
}
export const DetailsReducer = (state = stateXemChiTiet, action) => {
    let gioHangUpdate = []
    switch (action.type) {
        case 'XEM_CHI_TIET': {
            //Xu ly logic them  gio hang
             gioHangUpdate.push(action.spChitiet);
            state.xemChiTiet = gioHangUpdate;
            return { ...state }
        }
        default:
            break;
    }



    return { ...state }
}