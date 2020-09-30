export const openMenu = () => {
    'use strict';
    // day 1
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
    const catalogList = document.querySelector('.catalog-list');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);
    const openMenu = () => {
        console.log('click');    
        catalog.classList.add ('open');
        overlay.classList.add ('active');
    };
    const closeMenu = () => {
        console.log('close');
        catalog.classList.remove ('open');
        overlay.classList.remove ('active');  
        closeSubMenu();
    };
    const openSubMenu = () => {
        console.log('submenu');
        event.preventDefault();
        const target = event.target;
        const itemList = event.target.closest('.catalog-list__item');
        console.log(itemList);
        if (itemList) {
            subCatalogHeader.innerHTML = target.innerHTML;
            subCatalog.classList.add('subopen');
        };       
    }
    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    }
    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalogList.addEventListener('click', openSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);
}