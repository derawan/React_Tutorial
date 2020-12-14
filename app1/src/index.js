import store from './reducer/store'


// dispatch 

// subscribe
let sb1 = store.subscribe(()=>{
    console.log(store.getState());
})
let sb2 = store.subscribe(()=>{
    alert(store.getState())
})
let sb3 = store.subscribe(()=>{
    document.title = 'hallo';
})

store.dispatch({
    type:'SURAT_MASUK',
    dekripsi : 'hahaha'
})

sb2();
sb3()

store.dispatch({
    type:'CALON_SISWA'
});