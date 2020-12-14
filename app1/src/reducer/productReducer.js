


/*
action  = {
    type: "",
    deskripsi:""
}

*/

function mailReducer(state = "tidak ada surat", action) {
    switch(action.type)
    {
        case 'SURAT_MASUK':
            return  'SURAT MASUK BRO !!!'  + action.dekripsi;
        case 'SURAT_DIAMBIL':
                return  'SURAT DIAMBIL BRO !!!'  + action.dekripsi;
        case 'SURAT_DIANTAR':
                    return  'SURAT DIANTAR BRO !!!'  + action.dekripsi;
        case 'SURAT_DITERIMA':
                        return  'SURAT DITERIMA BRO !!!'  + action.dekripsi;
        default:
                return state;
    }
}

function siswaReducer(state = {}, action) {
    switch(action.type)
    {
        case 'CALON_SISWA':
            return  action.status = 'CALON';
        case 'SISWA':
            return  action.status = 'SISWA';
        case 'ALUMNI':
            return  action.status = 'ALIMUNI';
        default:
                return action.status = 'TIDAK JELAS';
    }
}

export {mailReducer, siswaReducer};