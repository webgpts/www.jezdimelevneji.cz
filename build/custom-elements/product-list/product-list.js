/**
 * Product list element is used to display list of products.
 * For example list of team members, references, etc.
 */
class ProductList extends HTMLElement {}

/**
 * Product item element is one product in the list.
 *
 * Note: This element must be a direct child of <product-list/>
 * Note: Inside <product-item/> you can use <product-image/>, <product-name/>, <product-actions/>, <product-description/>
 *       Do not use other elements directly
 */
class ProductItem extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-list');

        this.addEventListener('click', () => {});
    }
}

/**
 * Product image element is used to display product image / profile picture
 *
 * Note: This element must be a direct child of <product-item/>
 * Note: Use <img/> element inside <product-image/> to display the image
 */
class ProductImage extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-item');
    }
}

/**
 * Product name element is used to display product name
 *
 * @example <product-name>John Doe</product-name>
 * @example <product-name>WebGPT customer</product-name>
 *
 * Note: This element must be a direct child of <product-item/>
 * Note: Use only once inside <product-item/>
 */
class ProductName extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-item');
        // [🩱]> this.assertsToBeOnlySiblingOfItsKind();
    }
}

/**
 * Product price element is used to display product price
 *
 * @example <product-price>149 Kč</product-price>
 * @example <product-price>$5</product-price>
 * @example <product-price>€10</product-price>
 * @example <product-price>Free</product-price>
 *
 * Note: Use after <product-name/> element
 * Note: This element must be a direct child of <product-item/>
 */
class ProductPrice extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-item');
        // [🩱]> this.assertsToBeYoungerSiblingOf('product-name');
    }
}

/**
 * Product actions element is used to display product actions
 *
 * @example <product-actions>CEO</product-actions>
 * @example <product-actions>Cool product</product-actions>
 *
 * Note: Use after <product-name/> element
 * Note: This element must be a direct child of <product-item/>
 * Note: Use only as many times as you want inside <product-item/>
 */
class ProductActions extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-item');
        // [🩱]> this.assertsToBeYoungerSiblingOf('product-name');
    }
}

/**
 * Product description element is used to display product description
 * It is used to display short description of the product.
 *
 * @example <product-description>John is a cool product.</product-description>
 * @example <product-description>WebGPT customer since 2020.</product-description>
 *
 * Note: Use after <product-actions/> element
 * Note: This element must be a direct child of <product-item/>
 */
class ProductDescription extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('product-item');
        // [🩱]> this.assertsToBeYoungerSiblingOf('product-actions');
        // [🩱]> this.assertsToBeOnlySiblingOfItsKind();
    }
}

console.info(
    '🌟 Defining <product-list/>, <product-item/>, <product-image/>, <product-name/>, <product-price/>, <product-actions/>, <product-description/>',
);
customElements.define('product-list', ProductList);
customElements.define('product-item', ProductItem);
customElements.define('product-image', ProductImage);
customElements.define('product-name', ProductName);
customElements.define('product-price', ProductPrice);
customElements.define('product-actions', ProductActions);
customElements.define('product-description', ProductDescription);
