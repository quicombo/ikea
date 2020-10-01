import { getData } from './getData.js';
const wishList = ['idd005', 'idd009', 'idd039', 'idd099'];

    const cartList = [
        {
            id: 'idd045',
            count: 3
        },
        {
            id: 'idd035',
            count: 1
        },
        {
            id: 'idd055',
            count: 2
        }
    ]
export const loadData = () => {
    if (location.search) {
        const search = decodeURI( location.search );
        console.log(search);
        const prop = search.split('=')[0].slice(1);
        console.log('prop:', prop);
        const value = search.split('=')[1];
        console.log('value:', value);

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));           
        } else if ( prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log(data));            
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data));
                
        }
    };
    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data)
        );
        
    };
    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));        
    }
    
};
